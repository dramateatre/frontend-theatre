'use client'

import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export function ContentWithToggle({ data }: any) {
    const { t } = useTranslation()
    const [isExpanded, setIsExpanded] = useState(false)
    const [height, setHeight] = useState<string | number>('auto')
    const [isTransitioning, setIsTransitioning] = useState(false)
    const contentRef = useRef<HTMLDivElement>(null)
    const innerContentRef = useRef<HTMLDivElement>(null)
    const toggleRef = useRef<HTMLButtonElement>(null)

    // Calculate and set proper heights on mount and when content changes
    useEffect(() => {
        if (!contentRef.current || !innerContentRef.current) return

        const updateHeight = () => {
            if (isExpanded) {
                setHeight(innerContentRef.current?.scrollHeight || 'auto')
            } else {
                // Height for collapsed state (show approximately 20 lines)
                setHeight('400px')
            }
        }

        updateHeight()
        window.addEventListener('resize', updateHeight)
        return () => window.removeEventListener('resize', updateHeight)
    }, [isExpanded, data])

    const toggleView = () => {
        if (contentRef.current) {
            const scrollPosition = window.scrollY
            const contentTop = contentRef.current.getBoundingClientRect().top + scrollPosition

            setIsTransitioning(true)
            setIsExpanded((prev) => !prev)

            // Smooth scroll to keep the toggle button in view
            setTimeout(() => {
                window.scrollTo({
                    top: contentTop - 50, // Scroll a bit above to see context
                    behavior: 'smooth',
                })
            }, 50)
        }
    }

    // Remove transitioning state after animation completes
    useEffect(() => {
        const transitionEndHandler = () => {
            setIsTransitioning(false)
        }

        if (contentRef.current) {
            contentRef.current.addEventListener('transitionend', transitionEndHandler)
        }

        return () => {
            if (contentRef.current) {
                contentRef.current.removeEventListener('transitionend', transitionEndHandler)
            }
        }
    }, [])

    if (!data) return null

    return (
        <div className="w-full px-3 py-10 text-sm text-white md:px-6 md:py-20 md:text-base lg:px-6 xl:px-32">
            <div
                ref={contentRef}
                style={{ height }}
                className={`relative overflow-hidden transition-all duration-700 ease-in-out`}
            >
                <div
                    ref={innerContentRef}
                    className={`transition-opacity duration-500 ${isTransitioning ? 'opacity-80' : 'opacity-100'}`}
                >
                    <BlocksRenderer content={data[0]?.attributes?.description} />
                </div>

                {/* Gradient fade overlay when collapsed */}
                {!isExpanded && (
                    <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
                )}
            </div>

            <div className="mt-6 text-center">
                <button
                    ref={toggleRef}
                    className="rounded-md bg-white/10 px-5 py-2 text-base transition-all duration-300 hover:bg-white/20"
                    onClick={toggleView}
                >
                    {isExpanded ? t('viewLess') : t('viewMore')}
                </button>
            </div>
        </div>
    )
}

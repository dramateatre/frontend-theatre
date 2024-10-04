'use client'

import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export function ContentWithToggle({ data }: any) {
    const { t } = useTranslation()
    const [isExpanded, setIsExpanded] = useState(false)
    const contentRef = useRef<HTMLDivElement>(null)
    const toggleRef = useRef<HTMLButtonElement>(null)

    const toggleView = () => {
        if (contentRef.current) {
            const scrollPosition = window.scrollY
            const contentTop = contentRef.current.getBoundingClientRect().top + scrollPosition
            setIsExpanded((prev) => !prev)

            // Use setTimeout to ensure the DOM has updated before we adjust scroll
            setTimeout(() => {
                window.scrollTo({
                    top: contentTop,
                    behavior: 'instant',
                })
            }, 0)
        }
    }

    useEffect(() => {
        if (isExpanded && toggleRef.current) {
            toggleRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
        }
    }, [isExpanded])

    if (!data) return null

    return (
        <div
            ref={contentRef}
            className="w-full px-3 py-10 text-sm text-white md:px-6 md:py-20 md:text-base lg:px-6 xl:px-32"
        >
            <div
                className={`overflow-hidden ${isExpanded ? '' : 'line-clamp-[20]'} transition-all duration-300`}
            >
                <BlocksRenderer content={data[0]?.attributes?.description} />
            </div>
            <div className="mt-4 text-center">
                <button ref={toggleRef} className="text-base underline" onClick={toggleView}>
                    {isExpanded ? t('viewLess') : t('viewMore')}
                </button>
            </div>
        </div>
    )
}

'use client'

import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export function ContentWithToggle({ content }: any) {
    const { t } = useTranslation()
    const [isExpanded, setIsExpanded] = useState(false)

    const toggleView = () => {
        setIsExpanded((prev) => !prev)
    }

    return (
        <div className="w-full px-3 py-10 text-sm text-white md:px-6 md:py-20 md:text-base lg:px-6 xl:px-32">
            <div
                className={`overflow-hidden ${isExpanded ? '' : 'line-clamp-[20]'} transition-all duration-300`}
            >
                <BlocksRenderer content={content} />
            </div>
            <div className="mt-4 text-center">
                <button className="text-base underline" onClick={toggleView}>
                    {isExpanded ? t('viewLess') : t('viewMore')}
                </button>
            </div>
        </div>
    )
}

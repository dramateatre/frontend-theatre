'use client'

import i18nConfig from '@/libs/i18n/i18nConfig'
import { useStore } from '@/zustand/zustand'

import { useParams, usePathname, useRouter } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import { EnglishFlag, GeorgianFlag } from '../svg'

type LangChooseProps = {
    className: string
    spanClassname: string
}

const LangChoose = ({ className, spanClassname }: LangChooseProps) => {
    const currentPathname = usePathname()
    const router = useRouter()
    const { i18n } = useTranslation()
    const { id } = useParams()
    const currentLocale = i18n.language
    const newLocale = currentLocale === 'ka' ? 'en' : 'ka'

    const newsAlternateLocales = useStore((state) => state.newsAlternateLocales)
    const creativeGroupAlternateLocales = useStore((state) => state.creativeGroupAlternateLocales)
    const troupeAlternateLocales = useStore((state) => state.troupeAlternateLocales)

    const handleLangSwitch = () => {
        const newLocale = currentLocale === 'ka' ? 'en' : 'ka'

        let newPath = ''

        if (currentLocale === i18nConfig.defaultLocale) {
            newPath = '/' + newLocale + currentPathname
        } else {
            newPath = currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
        }

        if (newsAlternateLocales && currentPathname.includes('/news/') && id) {
            newPath = `/${newLocale}/news/${newsAlternateLocales}`
        } else if (
            creativeGroupAlternateLocales &&
            currentPathname.includes('/creative-group/') &&
            id
        ) {
            newPath = `/${newLocale}/creative-group/${creativeGroupAlternateLocales}`
        } else if (troupeAlternateLocales && currentPathname.includes('/troupe/') && id) {
            newPath = `/${newLocale}/troupe/${troupeAlternateLocales}`
        }

        router.push(newPath)
        router.refresh()
    }

    return (
        <>
            <div className={`${className}`} onClick={handleLangSwitch}>
                <span className={`${spanClassname}`}>
                    {newLocale === 'ka' ? (
                        <EnglishFlag className="h-6 w-6" />
                    ) : (
                        <GeorgianFlag className="h-6 w-6" />
                    )}
                </span>
            </div>
        </>
    )
}

export default LangChoose

'use client'

import { useRouter } from 'next/router'
import { FC } from 'react'

interface LocaleSwitcherProps {
    alternateLocales: { locale: string; id: number }[]
}

const LocaleSwitcher: FC<LocaleSwitcherProps> = ({ alternateLocales }) => {
    const router = useRouter()

    const handleLocaleChange = (newLocale: string, newId: number) => {
        router.replace(`/${newLocale}/news/${newId}`)
    }

    return (
        <div>
            {alternateLocales.map((altLocale) => (
                <button
                    key={altLocale.locale}
                    onClick={() => handleLocaleChange(altLocale.locale, altLocale.id)}
                    className="text-white underline"
                >
                    {altLocale.locale}
                </button>
            ))}
        </div>
    )
}

export default LocaleSwitcher

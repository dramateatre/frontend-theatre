import { useParams } from 'next/navigation'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Cover() {
    const { t } = useTranslation()
    const params = useParams()
    const locale = params.locale
    return (
        <section className="relative h-[450px] w-full bg-main-cover bg-cover  bg-no-repeat md:h-[550px] md:bg-top  border-b border-black">
            <div className="absolute inset-0 h-full w-full bg-black opacity-70"></div>
            <div className="relative z-10 flex h-full items-center justify-center text-white">
                <h1
                    className={`${locale === 'en' ? 'font-playwrite' : 'font-georgian'} text-center text-3xl md:text-6xl`}
                >
                    {t('batumiTheatre')}
                </h1>
            </div>
        </section>
    )
}

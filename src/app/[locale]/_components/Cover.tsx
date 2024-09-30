'use client'
import { Logo } from '@/components/svg'
import { useParams } from 'next/navigation'
import { useTranslation } from 'react-i18next'

export default function Cover() {
    const { t } = useTranslation()
    const params = useParams()
    const locale = params.locale
    return (
        <section className="relative min-h-screen w-full border-b border-black bg-main-cover bg-cover bg-no-repeat md:h-[550px] md:bg-top xl:px-20">
            <div className="absolute inset-0 h-full w-full bg-black opacity-70"></div>
            <div className="relative z-10 flex h-full flex-col items-center justify-center text-white">
               
                <h1
                    className={`${locale === 'en' ? 'font-playwrite' : 'font-georgian'} text-center text-2xl leading-10 lg:text-5xl`}
                >
                    {t('batumiTheatre')}
                </h1>
            </div>
        </section>
    )
}

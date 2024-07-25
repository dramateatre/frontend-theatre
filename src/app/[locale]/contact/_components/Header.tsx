'use client'

import { FbIcon, InstaIcon, WhatsappIcon } from '@/components/svg'
import { useParams } from 'next/navigation'
import { useTranslation } from 'react-i18next'

function Header() {
    const { t } = useTranslation()
    const params = useParams()
    const locale = params.locale
    return (
        <section className="flex h-auto w-full flex-col items-center gap-6 px-5 text-white md:gap-10">
            <h1
                className={`text-center ${locale === 'en' ? 'font-playwrite' : 'font-georgian'} pb-5 text-2xl lg:text-4xl`}
            >
                {t('batumiTheatre')}
            </h1>
            <div className="grid grid-cols-1 gap-x-4 gap-y-3 text-sm md:grid-cols-2 md:gap-y-4">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.google.com/maps/dir/?api=1&destination=41.643173265504%2C42.011096477509"
                >
                    <span className="text-sm underline-offset-4 hover:underline">
                        <span className="font-semibold">{t('address')}: </span>
                        {t('addressItem')}
                    </span>
                </a>
                <div className="flex flex-row">
                    <span className="text-sm font-semibold">{t('phone')}: </span>
                    <a
                        className="ml-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="tel:+55555555"
                    >
                        <span className="text-sm underline-offset-4 hover:underline">
                            +995 555 55 55 55
                        </span>
                    </a>
                    <a
                        className="ml-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="tel:+99555555555"
                    >
                        <span className="text-sm underline-offset-4 hover:underline">
                            +995 55555555
                        </span>
                    </a>
                </div>

                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="mailto:batumidramatheatre@gmail.com"
                >
                    <span className="text-sm underline-offset-4 hover:underline md:text-sm">
                        <span className="font-semibold">{t('email')}: </span>
                        batumidramatheatre@gmail.com
                    </span>
                </a>
                <div className="flex flex-row items-center gap-5">
                    <a target="_blank" rel="noopener noreferrer" href="#">
                        <FbIcon className="h-5 w-5" />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="#">
                        <InstaIcon className="h-5 w-5" />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="#">
                        <WhatsappIcon className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Header

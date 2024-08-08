'use client'

import { useTranslation } from 'react-i18next'

export default function Location() {
    const { t } = useTranslation()
    return (
        <section className="h-auto w-full">
            <h2 className="pb-10 text-center text-xl text-white">{t('directions')}</h2>
            <div className="relative flex h-full w-full flex-row">
                <iframe
                    className="bg-black opacity-50"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2981.133396167243!2d41.63561747607315!3d41.65285977126737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4067864730b1dcd5%3A0x39f194c59b736d82!2z0JHQsNGC0YPQvNGB0LrQuNC5INC00YDQsNC80LDRgtC40YfQtdGB0LrQuNC5INGC0LXQsNGC0YA!5e0!3m2!1sru!2sge!4v1723116141348!5m2!1sru!2sge"
                    width="100%"
                    height="300px"
                    loading="lazy"
                ></iframe>
            </div>
        </section>
    )
}

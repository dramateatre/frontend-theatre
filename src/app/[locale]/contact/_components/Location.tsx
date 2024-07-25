'use client'

import { useTranslation } from 'react-i18next'

export default function Location() {
    const { t } = useTranslation()
    return (
        <section className="h-auto w-full">
            <h2 className="text-center text-xl text-white pb-10">{t('directions')}</h2>
            <div className="relative flex h-full w-full flex-row">
                <iframe
                    className="bg-black opacity-70"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6040.209050569789!2d42.005494502926226!3d41.64308089971449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x405d5d86ef5e0d85%3A0xe84b5afc793fc9a2!2sHotel%20Chateau%20Iveri!5e0!3m2!1sru!2sge!4v1715158858308!5m2!1sru!2sge"
                    width="100%"
                    height="300px"
                    loading="lazy"
                ></iframe>
            </div>
        </section>
    )
}

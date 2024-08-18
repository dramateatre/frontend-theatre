'use client'

import Image from 'next/image'
import Village from '../../../../public/imgs/village.jpg'
import initTranslations from '@/libs/i18n/i18n'

export default async function page({ params: { locale } }: { params: { locale: string } }) {
    const i18nNamespaces = ['repertory']
    const { t } = await initTranslations(locale, i18nNamespaces)

    return (
        <section
            className={` ${locale === 'en' ? 'font-playwrite' : 'font-georgian'} flex w-full flex-col gap-10 text-white lg:px-40`}
        >
            <div className="flex w-full flex-row justify-center pt-10">
                <h1 className={`texet-center text-3xl tracking-[20px]`}>{t('repertoires')}</h1>
            </div>

            <div className="relative z-50 flex w-full flex-col overflow-hidden rounded-[16px] shadow-custom lg:h-[350px] lg:flex-row">
                <div className="h-[200px] w-full md:h-[300px] lg:h-full lg:w-[70%]">
                    <Image
                        className="h-full w-full object-cover object-center"
                        src={Village}
                        alt="Village"
                    />
                </div>
                <div className="flex h-full flex-col bg-[#0f1017] bg-poster-gradient justify-between px-4 py-4 lg:order-2 lg:w-[30%]">
                    <h1 className="my-1 text-center text-xl">მე ვხედავ მზეს</h1>

                    <div className="flex h-full flex-col justify-center gap-2">
                        <span>
                            <span className="text-sm font-bold">{t('author')}</span>
                            <span className="ml-2 font-sans text-base">ლადო ასამბაძე</span>
                        </span>
                        <span>
                            <span className="text-sm font-bold">{t('director')}</span>
                            <span className="ml-2 font-sans text-base">Lado Asambadze</span>
                        </span>
                        <span>
                            <span className="text-sm font-bold">{t('duration')}</span>
                            <span className="ml-2 font-sans text-base">ლადო ასამბაძე</span>
                        </span>
                        <span>
                            <span className="text-sm font-bold">{t('pemierDate')}</span>
                            <span className="ml-2 font-sans text-base">ლადო ასამბაძე</span>
                        </span>
                        <span className="text-center">ერთ მოქმედებად</span>
                    </div>
                    <div className="flex w-full flex-row gap-5 px-5 pt-4 lg:gap-3">
                        <button className="w-full rounded-[16px] bg-gradient-to-r from-[#6d595962] to-[#467575] py-[6px] text-sm text-white">
                            {t('viewMore')}
                        </button>
                        <button className="w-full rounded-[16px] bg-gradient-to-r from-[#6d595962] to-[#467575] py-[6px] text-sm text-white">
                            {t('tickets')}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

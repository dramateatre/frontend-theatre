import Image from 'next/image'
import React from 'react'
import NewsImage from '../../../../public/imgs/New.webp'
import initTranslations from '@/libs/i18n/i18n'

export default async function page({ params }: { params: { locale: string } }) {
    const i18nNamespaces = ['main']
    const { t } = await initTranslations(params.locale, i18nNamespaces)

    return (
        <main className="flex w-full flex-col justify-center gap-10 px-6 pb-20 pt-10 md:px-7 lg:px-20 xl:px-64">
            <h1
                className={` ${params.locale === 'en' ? 'font-playwrite' : 'font-georgian'} text-center text-3xl tracking-[5px] text-white`}
            >
                {t('news')}
            </h1>
            <div className="relative z-50 flex w-full flex-col overflow-hidden rounded-[16px] shadow-custom md:flex-row">
                <div className="relative h-[200px] w-full md:w-[400px]">
                    <Image
                        fill
                        src={NewsImage}
                        alt="Village"
                        className="object-cover object-center"
                    />
                </div>
                <div
                    style={{
                        background:
                            'radial-gradient(121.65% 100% at 32.68% 0, #3c4155 0, rgba(60, 65, 85, .18) 32.49%, rgba(60, 65, 85, 0) 51.34%), radial-gradient(91.41% 43.04% at 50% 0, #1a1c24 20.67%, rgba(26, 28, 36, 0) 100%), radial-gradient(69.96% 25.89% at 50% 100%, #15171e 22.77%, rgba(19, 21, 27, 0) 100%)',
                    }}
                    className="flex h-full w-full flex-col items-start justify-between gap-3 bg-[#1a1c2f] px-3 pb-3 pt-5 md:h-auto md:px-6"
                >
                    <div className="flex w-full flex-col justify-between gap-3 md:gap-5">
                        <h1 className="text-base text-white md:text-lg">
                            "რაც გინახავს ვეღარ ნახავ"
                        </h1>
                        <p className="line-clamp-3 overflow-hidden text-ellipsis text-xs leading-5 text-white">
                            თეატრალურ ნიღაბს ორი სახე აქვს, ერთი ტირის, მეორე - იცინის. თეატრის
                            სამხატვრო ხელმძღვანელმა, ალექსანდრე ქანთარიამ ამჯერად თეატრალური ნიღბის
                            ის მხარე აირჩია, რომელიც მაყურებელს აღიმებს, მეტიც შეილება ითქვას,
                            გულიანად ახარხარებს, რადგან ბათუმის დრამატული თეატრის სცენაზე ავქსეgq
                            gqe qegqeg q გულიანად ახარხარებს, რადგან ბათუმის დრამატული თეატრის
                            სცენაზე ავქსეgq gqe qegqeg გულიანად ახარხარებს, რადგან ბათუმის დრამატული
                            თეატრის სცენაზე ავქსეgq gqe qegqeg გულიანად ახარხარებს, რადგან ბათუმის
                            დრამატული თეატრის სცენაზე ავქსეgq gqe qegqeg
                        </p>
                    </div>
                    <div className="flex w-full flex-col gap-2">
                        <div className="h-[1px] w-full bg-white"></div>
                        <div className="flex w-full items-center justify-between">
                            <span className="text-sm text-white">07.25.2024</span>

                            <button className="flex flex-row items-center justify-center text-sm text-white underline-offset-2 hover:underline">
                                {t('viewMore')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative z-50 flex w-full flex-col overflow-hidden rounded-[16px] shadow-custom md:flex-row">
                <div className="relative h-[200px] w-full md:w-[400px]">
                    <Image
                        fill
                        src={NewsImage}
                        alt="Village"
                        className="object-cover object-center"
                    />
                </div>
                <div
                    style={{
                        background:
                            'radial-gradient(121.65% 100% at 32.68% 0, #3c4155 0, rgba(60, 65, 85, .18) 32.49%, rgba(60, 65, 85, 0) 51.34%), radial-gradient(91.41% 43.04% at 50% 0, #1a1c24 20.67%, rgba(26, 28, 36, 0) 100%), radial-gradient(69.96% 25.89% at 50% 100%, #15171e 22.77%, rgba(19, 21, 27, 0) 100%)',
                    }}
                    className="flex h-full w-full flex-col items-start justify-between gap-3 bg-[#1a1c2f] px-3 pb-3 pt-5 md:h-auto md:px-6"
                >
                    <div className="flex w-full flex-col justify-between gap-3 md:gap-5">
                        <h1 className="text-base text-white md:text-lg">
                            "რაც გინახავს ვეღარ ნახავ"
                        </h1>
                        <p className="line-clamp-3 overflow-hidden text-ellipsis text-xs leading-5 text-white">
                            თეატრალურ ნიღაბს ორი სახე აქვს, ერთი ტირის, მეორე - იცინის. თეატრის
                            სამხატვრო ხელმძღვანელმა, ალექსანდრე ქანთარიამ ამჯერად თეატრალური ნიღბის
                            ის მხარე აირჩია, რომელიც მაყურებელს აღიმებს, მეტიც შეილება ითქვას,
                            გულიანად ახარხარებს, რადგან ბათუმის დრამატული თეატრის სცენაზე ავქსეgq
                            gqe qegqeg q გულიანად ახარხარებს, რადგან ბათუმის დრამატული თეატრის
                            სცენაზე ავქსეgq gqe qegqeg გულიანად ახარხარებს, რადგან ბათუმის დრამატული
                            თეატრის სცენაზე ავქსეgq gqe qegqeg გულიანად ახარხარებს, რადგან ბათუმის
                            დრამატული თეატრის სცენაზე ავქსეgq gqe qegqeg
                        </p>
                    </div>
                    <div className="flex w-full flex-col gap-2">
                        <div className="h-[1px] w-full bg-white"></div>
                        <div className="flex w-full items-center justify-between">
                            <span className="text-sm text-white">07.25.2024</span>

                            <button className="flex flex-row items-center justify-center text-sm text-white underline-offset-2 hover:underline">
                                სრულად ნახვა
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

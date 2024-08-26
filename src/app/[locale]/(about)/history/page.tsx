import Image from 'next/image'
import New from '@images/New.webp'
import Old from '@images/OldTheatre.jpg'
import axiosInstance from '@/AxiosInstance'
import initTranslations from '@/libs/i18n/i18n'
import { ContentWithToggle } from './_componenets/Paragraph'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const i18nNamespaces = ['meta']
    const { t } = await initTranslations(locale, i18nNamespaces)

    return {
        title: t('historyPage'),
        description: t('descriptionAbout'),
        openGraph: {
            title: t('historyPage'),
            description: t('descriptionHistory'),
            type: 'website',
            locale: locale,
            url: 'https://batumitheatre.ge/history',
            siteName: 'Batumi Theatre',
            images: [
                {
                    url: './../imgs/OldTheatre.jpg',
                },
            ],
        },
    }
}

async function fetchData(locale: string) {
    try {
        const response = await axiosInstance.get('/theatre-histories', {
            params: {
                populate: '*',
                locale: locale,
            },
        })
        return response.data
    } catch (error) {
        console.error('Error fetching data:', error)
        return []
    }
}

export default async function page({ params: { locale } }: { params: { locale: string } }) {
    const { data } = await fetchData(locale)

    const i18nNamespaces = ['main']
    const { t } = await initTranslations(locale, i18nNamespaces)

    return (
        <div
            className={` ${locale === 'en' ? 'italic' : 'font-georgian'} relative flex h-auto w-full flex-col py-5 md:pt-16`}
        >
            <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 md:gap-0 md:pl-6 lg:pl-6 xl:pl-32">
                <div className="relative h-full w-full">
                    <div className="flex h-full w-full flex-row justify-start">
                        <Image
                            src={Old}
                            alt="New Image"
                            className="h-[220px] w-4/5 border border-white object-cover shadow-customWhiteSmall md:flex md:h-[250px] md:w-full md:rounded-none lg:h-[400px]"
                        />
                        <div className="ml-10 flex h-full w-auto flex-col items-center justify-between text-white md:hidden">
                            <span>{t('1')}</span>
                            <span>{t('2')}</span>
                            <span>{t('3')}</span>
                            <span>{t('4')}</span>
                            <span>{t('5')}</span>
                            <span>{t('6')}</span>
                            <span>{t('7')}</span>
                        </div>
                    </div>
                </div>

                <div className="relative flex w-full flex-col items-end md:items-center md:pr-10">
                    <h1
                        className={`${locale === 'en' ? 'font-playwrite' : 'font-georgian'} hidden text-center text-4xl tracking-widest text-white md:flex`}
                    >
                        {t('theatreHistory')}
                    </h1>

                    <div className="relative hidden h-full w-full md:block">
                        <div className="relative flex flex-row md:-translate-x-6 md:translate-y-8 lg:-translate-x-20">
                            <Image
                                src={New}
                                alt="New Image"
                                className="h-full w-full border border-white object-cover shadow-customWhiteSmall md:h-[250px] lg:h-[400px]"
                            />
                        </div>
                    </div>
                    <div className="flex w-full flex-row justify-end">
                        <div className="mr-10 flex h-full w-auto flex-col items-center justify-between text-white md:hidden">
                            <span>{t('8')}</span>
                            <span>{t('9')}</span>
                            <span>{t('10')}</span>
                            <span>{t('11')}</span>
                            <span>{t('12')}</span>
                            <span>{t('13')}</span>
                            <span>{t('14')}</span>
                        </div>
                        <Image
                            src={New}
                            alt="New Image"
                            className="h-[220px] w-4/5 border border-white object-cover shadow-customWhiteSmall md:hidden md:h-full lg:w-full"
                        />
                    </div>
                </div>
            </div>
            <ContentWithToggle content={data[0]?.attributes?.description} />
        </div>
    )
}

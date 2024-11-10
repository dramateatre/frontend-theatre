import axiosInstance from '@/AxiosInstance'
import initTranslations from '@/libs/i18n/i18n'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import PhotoViewers from './_components/PhotoViewers'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const i18nNamespaces = ['meta']
    const { t } = await initTranslations(locale, i18nNamespaces)

    return {
        title: t('salaryTickets'),
        description: t('descriptionTickets'),
        openGraph: {
            title: t('salaryTickets'),
            description: t('descriptionTickets'),
            type: 'website',
            locale: locale,
            url: 'https://batumitheatre.ge/tickets',
            siteName: 'Batumi Theatre',
        },
    }
}

async function fetchData(locale: string) {
    try {
        const response = await axiosInstance.get('/box-offices', {
            params: {
                populate: '*',
                locale: locale,
            },
        })
        return response.data
    } catch (error) {
        return []
    }
}

export default async function Page({ params: { locale } }: { params: { locale: string } }) {
    const i18nNamespaces = ['main']
    const { t } = await initTranslations(locale, i18nNamespaces)
    const data = await fetchData(locale)

    return (
        <main className="flex min-h-screen w-full justify-center bg-[#1a1b2f] px-6 py-10 md:px-7 lg:px-40 xl:px-64">
            <div className="relative h-full w-full rounded-[10px] bg-[#0f1017] bg-opacity-100 bg-card-gradient shadow-custom">
                <div className="absolute right-6 top-8 flex h-auto w-full flex-row items-center md:right-7 lg:right-64">
                    <div className="h-[1px] w-3/5 bg-white lg:w-4/5"></div>
                    <span className="ml-4 text-xl uppercase text-white">{t('boxOffice')}</span>
                </div>
                {data?.data && (
                    <div className="flex h-auto w-full flex-col items-end gap-5 px-5 pb-5 pt-20 md:px-20">
                        <div className="mb-6 flex h-auto w-full flex-col gap-5 text-white">
                            {data?.data[0]?.attributes?.description && (
                                <span className="text-sm">
                                    <BlocksRenderer content={data.data[0].attributes.description} />
                                </span>
                            )}
                            <h2 className="text-center text-xl">{t('stage')}</h2>
                            <PhotoViewers data={data.data} />
                        </div>
                    </div>
                )}
            </div>
        </main>
    )
}

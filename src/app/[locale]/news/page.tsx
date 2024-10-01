import initTranslations from '@/libs/i18n/i18n'
import axiosInstance from '@/AxiosInstance'
import ClientWrapper from './_components/ClientWrapper'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const i18nNamespaces = ['meta']
    const { t } = await initTranslations(locale, i18nNamespaces)

    return {
        title: t('news'),
        description: t('describeNews'),
        openGraph: {
            title: t('news'),
            description: t('describeNews'),
            type: 'website',
            locale: locale,
            url: 'https://batumitheatre.ge/news',
            siteName: 'Batumi Theatre',
            images: [
                {
                    url: '/imgs/TheatreHall.jpg',
                },
            ],
        },
    }
}

async function fetchData(locale: string, page: number, pageSize: number) {
    try {
        const response = await axiosInstance.get('/news', {
            params: {
                populate: '*',
                locale: locale,
                pagination: {
                    page: page,
                    pageSize: pageSize,
                },
                sort: 'date:desc',
            },
        })
        return response.data
    } catch (error) {
        return []
    }
}

export default async function page({
    params: { locale },
    searchParams,
}: {
    params: { locale: string }
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    const page = Number(searchParams.page) || 1
    const pageSize = 5
    const data = await fetchData(locale, page, pageSize)

    return <ClientWrapper data={data} page={page} pageSize={pageSize} />
}

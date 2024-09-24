import axiosInstance from '@/AxiosInstance'
import initTranslations from '@/libs/i18n/i18n'
import ClientWrapper from './_components/ClientWrapper'

export async function generateMetadata({
    params: { locale, id },
}: {
    params: { locale: string; id?: number }
}) {
    const i18nNamespaces = ['meta']
    const { t } = await initTranslations(locale, i18nNamespaces)

    // Fetch data
    const data = await fetchData(locale, id)

    console.log(data.attributes.image.data.attributes.url)

    return {
        title: data.attributes.header || t('historyPage'),
        openGraph: {
            title: data.attributes.header || t('historyPage'),
            type: 'website',
            locale: locale,
            url: `https://batumitheatre.ge/news/${data.id}`,
            siteName: 'Batumi Theatre',
            images: [
                {
                    url: `https://api.batumitheatre.ge${data.attributes.image.data.attributes.url}`,
                },
            ],
        },
    }
}

async function fetchData(locale?: string, id?: number) {
    try {
        const endpoint = id ? `/news/${id}` : '/news'

        const response = await axiosInstance.get(endpoint, {
            params: {
                populate: '*',
                locale: locale,
            },
        })
        return response.data.data
    } catch (error) {
        return []
    }
}
export default async function page({
    params: { locale, id },
}: {
    params: { locale: string; id?: number }
}) {
    const data = await fetchData(locale, id)

    return (
        <>
            <ClientWrapper data={data} />
        </>
    )
}

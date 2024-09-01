import axiosInstance from '@/AxiosInstance'
import ClientWrapper from './_components/ClientWrapper'
import initTranslations from '@/libs/i18n/i18n'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const i18nNamespaces = ['meta']
    const { t } = await initTranslations(locale, i18nNamespaces)

    return {
        title: t('museum'),
        description: t('descriptionMuseum'),
        openGraph: {
            title: t('museum'),
            description: t('descriptionMuseum'),
            type: 'website',
            locale: locale,
            url: 'https://batumitheatre.ge/museum',
            siteName: 'Batumi Theatre',
            images: [
                {
                    url: './../imgs/Oidipos_afisha.jpg',
                },
            ],
        },
    }
}

async function fetchData(locale: string) {
    try {
        const response = await axiosInstance.get('/museums', {
            params: {
                populate: '*',
                locale: locale,
            },
        })
        return response.data
    } catch (error) {
        console.warn('Error fetching data:', error)
        return []
    }
}

export default async function page({ params: { locale } }: { params: { locale: string } }) {
    const { data } = await fetchData(locale)

    return <ClientWrapper data={data} />
}

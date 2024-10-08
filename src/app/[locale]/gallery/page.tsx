import initTranslations from '@/libs/i18n/i18n'
import axiosInstance from '@/AxiosInstance'
import ClientWrapper from './_components/ClientWrapper'

// export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
//     const i18nNamespaces = ['meta']
//     const { t } = await initTranslations(locale, i18nNamespaces)

//     return {
//         title: t('gallery'),

//         openGraph: {
//             title: t('news'),
//             type: 'website',
//             locale: locale,
//             url: 'https://batumitheatre.ge/gallery',
//             siteName: 'Batumi Theatre',
//             images: [
//                 {
//                     url: '/imgs/TheatreHall.jpg',
//                 },
//             ],
//         },
//     }
// }

async function fetchData() {
    try {
        const response = await axiosInstance.get('/galleries', {
            params: {
                populate: '*',
            },
        })
        return response.data
    } catch (error) {
        return []
    }
}

export default async function page() {
    const data = await fetchData()

    return <ClientWrapper data={data} />
}

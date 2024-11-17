import axiosInstance from '@/AxiosInstance'
import ClientWrapper from './_components/ClientWrapper'

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

async function fetchPoster(locale: string) {
    try {
        const response = await axiosInstance.get('/repertoires', {
            params: {
                populate: '*',
                locale: locale,
                filters: {
                    poster: {
                        $eq: true,
                    },
                },
                sort: 'publicationDate:desc',
            },
        })
        return response.data
    } catch (error) {
        return []
    }
}
async function fetchTroupe(locale: string) {
    try {
        const response = await axiosInstance.get('/troupes', {
            params: {
                populate: '*',
                locale: locale,
            },
        })
        const data = response.data.data

        for (let i = data.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            ;[data[i], data[j]] = [data[j], data[i]]
        }

        return data.slice(0, 5)
    } catch (error) {
        return []
    }
}

export default async function Home({ params: { locale } }: { params: { locale: string } }) {
    const newsData = await fetchData(locale, 1, 4)
    const posterData = await fetchPoster(locale)
    const creativeGroupData = await fetchTroupe(locale)

    return (
        <ClientWrapper
            newsData={newsData}
            posterData={posterData}
            creativeGroupData={creativeGroupData}
        />
    )
}

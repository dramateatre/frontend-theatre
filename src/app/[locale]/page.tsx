import Actors from './_components/Actors'
import Cover from './_components/Cover'
import Poster from './_components/Poster'
import History from './_components/History'
import News from './_components/News'
import axiosInstance from '@/AxiosInstance'

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
            },
        })
        return response.data
    } catch (error) {
        return []
    }
}
async function fetchCreativeGroup(locale: string) {
    try {
        const response = await axiosInstance.get('/creative-groups', {
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

export default async function Home({ params: { locale } }: { params: { locale: string } }) {
    const newsData = await fetchData(locale, 1, 4)
    const posterData = await fetchPoster(locale)
    const creativeGroupData = await fetchCreativeGroup(locale)

    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-[#0f1017] pb-10">
            <Cover />
            <Poster data={posterData} />
            <News data={newsData} />
            <Actors data={creativeGroupData} />
            <History />
        </main>
    )
}

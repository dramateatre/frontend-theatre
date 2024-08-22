import axiosInstance from '@/AxiosInstance'
import ClientWrapper from './_components/ClientWrapper'

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
        console.error('Error fetching data:', error)
        return []
    }
}

export default async function page({ params: { locale } }: { params: { locale: string } }) {
    const { data } = await fetchData(locale)
    return <ClientWrapper data={data} />
}

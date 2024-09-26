import axiosInstance from '@/AxiosInstance'
import ClientWrapper from './_components/ClientWrapper'

async function fetchData(locale: string) {
    try {
        const response = await axiosInstance.get('/artistic-directors', {
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

export default async function Page({ params: { locale } }: { params: { locale: string } }) {
    const data = await fetchData(locale)

 

    return <ClientWrapper data={data} />
}

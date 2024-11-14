import axiosInstance from '@/AxiosInstance'
import ClientWrapper from './_components/ClientWrappe'

async function fetchData(locale: string, id?: number) {
    try {
        const endpoint = id ? `/administrations/${id}` : '/administrations'
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

export default async function Page({
    params: { locale, id },
}: {
    params: { locale: string; id?: number }
}) {
    const data = await fetchData(locale, id)

    return <ClientWrapper data={data} />
}

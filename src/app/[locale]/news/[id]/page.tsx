import axiosInstance from '@/AxiosInstance'
import ClientWrapper from './_components/ClientWrapper'

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

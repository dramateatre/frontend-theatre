import axiosInstance from '@/AxiosInstance'
import initTranslations from '@/libs/i18n/i18n'
import ClientWrapper from './_componets/ClientWrapper'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const i18nNamespaces = ['meta']
    const { t } = await initTranslations(locale, i18nNamespaces)

    return {
        title: t('troupe'),
        description: t('descriptionTroupe'),
    }
}

async function fetchData(locale: string, page: number, pageSize: number) {
    try {
        const response = await axiosInstance.get('/troupes', {
            params: {
                populate: '*',
                locale: locale,
                pagination: {
                    page: page,
                    pageSize: pageSize,
                },
            },
        })
        return response.data
    } catch (error) {
        return []
    }
}

export default async function Page({
    params: { locale },
    searchParams,
}: {
    params: { locale: string }
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    const page = Number(searchParams.page) || 1
    const pageSize = 100
    const data = await fetchData(locale, page, pageSize)

    return <ClientWrapper data={data} />
}

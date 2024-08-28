import axiosInstance from '@/AxiosInstance'
import AvatarImage from './_components/AvatarImage'
import initTranslations from '@/libs/i18n/i18n'
import Link from 'next/link'
import Paragraph from './_components/Paragraph'

async function fetchData(locale: string, id?: number) {
    try {
        const endpoint = id ? `/troupes/${id}` : '/troupes'
        const response = await axiosInstance.get(endpoint, {
            params: {
                populate: '*',
                locale: locale,
            },
        })
        return response.data.data
    } catch (error) {
        console.error('Error fetching data:', error)
        return []
    }
}

export default async function Page({
    params: { locale, id },
}: {
    params: { locale: string; id?: number }
}) {
    const data = await fetchData(locale, id)
    const i18nNamespaces = ['main']
    const { t } = await initTranslations(locale, i18nNamespaces)
    console.log(data?.attributes?.description)

    return (
        <main
            className={` ${locale === 'en' ? 'italic' : 'font-georgian'} flex min-h-screen w-full justify-center overflow-hidden text-white md:py-10`}
        >
            <div className="h-full w-full overflow-hidden rounded-[4px] border border-slate-400 bg-[#0f1017] bg-opacity-100 bg-card-gradient shadow-md md:w-2/3">
                <div className="relative mr-5 h-[250px] w-full md:float-left md:h-[300px] md:w-[400px]">
                    <AvatarImage data={data} />
                </div>
                <div className="w-full px-3">
                    <div className="flex flex-row items-center gap-2 py-2">
                        <span className="my-1 text-lg">{data?.attributes?.firstname}</span>
                        <span className="my-1 text-lg">{data?.attributes?.lastname}</span>
                        <span>-</span>
                        <span className="text-[#838CAC]">16.04.2022</span>
                    </div>
                    <div className="h-[1px] w-full bg-white"></div>
                    {data?.attributes?.description && (
                        <div className="py-5 text-sm md:text-base">
                            <Paragraph content={data && data?.attributes?.description} />
                        </div>
                    )}
                    {data?.attributes?.repertuaris?.data?.length > 0 ? (
                        <div className="flex flex-col gap-4 pb-10">
                            <h2 className="text-center text-xl">ნათამაშები სპექტაკლები</h2>
                            {data.attributes.repertuaris.data.map((item: any, index: any) => (
                                <Link key={item.id} href={`/repertory/${item.id}`}>
                                    <span className="cursor-pointer">
                                        {index + 1}. {item.attributes.header}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    ) : null}
                </div>
            </div>
        </main>
    )
}

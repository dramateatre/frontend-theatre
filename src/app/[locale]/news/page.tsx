import Image from 'next/image'
import initTranslations from '@/libs/i18n/i18n'
import axiosInstance from '@/AxiosInstance'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import Link from 'next/link'
import Pagination from '@/components/shared/pagination/Pagination'
import { Calendar } from '@/components/svg'

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
            },
        })
        return response.data
    } catch (error) {
        console.error('Error fetching data:', error)
        return []
    }
}

export default async function page({
    params: { locale },
    searchParams,
}: {
    params: { locale: string }
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    const i18nNamespaces = ['main']
    const { t } = await initTranslations(locale, i18nNamespaces)
    const page = Number(searchParams.page) || 1
    const pageSize = 10
    const data = await fetchData(locale, page, pageSize)

    return (
        <main className="flex w-full flex-col justify-center gap-10 bg-[#0f1017] px-6 pb-20 pt-10 md:px-7 lg:px-20 xl:px-48">
            <h1
                className={` ${locale === 'en' ? 'font-playwrite' : 'font-georgian'} text-center text-3xl tracking-[5px] text-white`}
            >
                {t('news')}
            </h1>
            {data?.data?.map((item: any, index: number) => (
                <Link href={`/news/${item.id}`}>
                    <div
                        key={index}
                        className="relative z-50 flex h-[410px] w-full flex-col overflow-hidden rounded-[16px] shadow-custom md:h-[200px] md:flex-row"
                    >
                        <div className="relative min-h-[200px] w-full md:w-[400px]">
                            <Image
                                fill
                                src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
                                alt="Village"
                                className="object-cover object-center"
                            />
                        </div>
                        <div className="flex h-full w-full flex-col items-start justify-between gap-3 bg-[#0f1017] bg-card-gradient px-3 pb-3 pt-3 md:px-6">
                            <div className="flex w-full flex-col justify-between">
                                <h1 className="line-clamp-1 h-7 overflow-hidden text-ellipsis text-center text-base text-white md:text-left md:text-lg">
                                    {item.attributes.header}
                                </h1>
                                <div className="my-2 h-[1px] w-full bg-white"></div>
                                <div className="line-clamp-7 h-24 overflow-hidden text-ellipsis text-xs text-white">
                                    <BlocksRenderer content={item.attributes.description} />
                                </div>
                            </div>
                            <div className="flex w-full flex-col gap-1">
                                <div className="h-[1px] w-full bg-white"></div>
                                <div className="flex w-full items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Calendar />
                                        <span className="text-sm text-white">
                                            {new Date(
                                                item.attributes.date
                                                    ? item.attributes.date
                                                    : item.attributes.publishedAt
                                            ).toLocaleString('en-US', {
                                                year: 'numeric',
                                                month: 'numeric',
                                                day: 'numeric',
                                            })}
                                        </span>
                                    </div>

                                    <button className="flex flex-row items-center justify-center text-sm text-white underline-offset-2 hover:underline">
                                        {t('viewMore')}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}

            <Pagination
                currentPage={data?.meta?.pagination?.page}
                totalPages={data?.meta?.pagination?.pageCount}
            />
        </main>
    )
}

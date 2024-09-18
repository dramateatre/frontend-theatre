import Image from 'next/image'
import initTranslations from '@/libs/i18n/i18n'
import axiosInstance from '@/AxiosInstance'
import Pagination from '@/components/shared/pagination/Pagination'
import { Calendar, Clock } from '@/components/svg'
import { formatDate } from '@/utils/formatDate'
import { formatTime } from '@/utils/formatTime'
import Link from 'next/link'

async function fetchData(locale: string, page: number, pageSize: number) {
    try {
        const response = await axiosInstance.get('/repertoires', {
            params: {
                populate: '*',
                locale: locale,
                pagination: {
                    page: page,
                    pageSize: pageSize,
                },
                sort: 'createdAt:desc',
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

export default async function page({
    params: { locale },
    searchParams,
}: {
    params: { locale: string }
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    const i18nNamespaces = ['repertory', 'main']
    const { t } = await initTranslations(locale, i18nNamespaces)

    const page = Number(searchParams.page) || 1
    const pageSize = 5
    const data = await fetchData(locale, page, pageSize)

    return (
        <section className="min-h-screen w-full px-6 py-10 md:px-7 lg:px-20 xl:px-40">
            <div
                className={` ${locale === 'en' ? 'italic' : 'font-georgian'} flex w-full flex-col gap-16 text-white`}
            >
                <div className="flex w-full flex-row justify-center">
                    <h1
                        className={`text-center ${locale === 'en' ? 'font-playwrite' : 'font-georgian'} text-2xl tracking-[20px] md:text-3xl`}
                    >
                        {t('poster')}
                    </h1>
                </div>
                {data?.data?.map((item: any, index: any) => (
                    <Link href={`/repertory/${item.id}`}>
                        <div
                            key={index}
                            className="relative z-50 flex w-full flex-col overflow-hidden rounded-[16px] shadow-custom md:h-[400px] md:flex-row"
                        >
                            <div className="relative h-[200px] w-full md:h-full md:w-[60%] lg:w-[70%]">
                                <Image
                                    className="h-full w-full object-cover object-center"
                                    fill
                                    src={
                                        item?.attributes?.image?.data?.attributes?.url
                                            ? `https://api.batumitheatre.ge${item?.attributes.image.data.attributes.url}`
                                            : `https://api.batumitheatre.ge${item?.attributes.image.data.attributes.url}`
                                    }
                                    alt="Village"
                                />
                            </div>
                            <div className="flex h-auto flex-col justify-between gap-5 bg-[#0f1017] bg-poster-gradient py-3 md:order-2 md:w-[40%] md:py-4 lg:w-[30%]">
                                <h1 className="text-center text-xl">{item.attributes?.header}</h1>
                                <div className="flex h-full flex-col justify-center gap-1 px-2 md:px-6">
                                    {item.attributes?.author && (
                                        <span className="line-clamp-2">
                                            <span className="text-sm">{t('author')}</span>
                                            <span className="ml-2 text-sm">
                                                {item.attributes?.author}
                                            </span>
                                        </span>
                                    )}
                                    {item.attributes?.director && (
                                        <span className="line-clamp-2">
                                            <span className="text-sm">{t('director')}</span>
                                            <span className="ml-2 text-sm">
                                                {item.attributes?.director}
                                            </span>
                                        </span>
                                    )}
                                    {item.attributes?.performance && (
                                        <span className="line-clamp-1">
                                            <span className="text-sm">{t('performance')}</span>
                                            <span className="ml-2 text-sm">
                                                {item.attributes?.performance}
                                            </span>
                                        </span>
                                    )}
                                    <span className="line-clamp-2">
                                        <span className="text-sm">{t('duration')}</span>
                                        <span className="ml-2 text-sm">
                                            {item.attributes?.duration
                                                ?.split(':')
                                                .slice(0, 2)
                                                .join(':')}{' '}
                                            {t('hour')}
                                        </span>
                                    </span>

                                    {item.attributes?.poster && (
                                        <>
                                            {item.attributes?.ticketPrice && (
                                                <span className="line-clamp-2">
                                                    <span className="text-sm">
                                                        {t('ticketPrice')}
                                                    </span>
                                                    <span className="ml-2 text-sm">
                                                        {item.attributes?.ticketPrice} ₾
                                                    </span>
                                                </span>
                                            )}
                                            {item.attributes?.premiereDate1 && (
                                                <span className="flex flex-row items-center gap-2">
                                                    <Calendar className="text-base" />
                                                    <span className="text-sm">
                                                        {formatDate(item.attributes?.premiereDate1)}
                                                    </span>
                                                    <Clock className="fill-zinc-300 text-base" />
                                                    <span className="text-sm">
                                                        {formatTime(item.attributes?.premiereDate1)}
                                                    </span>
                                                    {item.attributes?.premiere && (
                                                        <span className="ml-3 animate-fade text-sm text-[red]">
                                                            {t('premiere')}
                                                        </span>
                                                    )}
                                                </span>
                                            )}
                                            {item.attributes?.premiereDate2 && (
                                                <span className="flex flex-row items-center gap-2">
                                                    <Calendar className="text-base" />
                                                    <span className="text-sm">
                                                        {formatDate(item.attributes?.premiereDate2)}
                                                    </span>
                                                    <Clock className="fill-zinc-300 text-base" />
                                                    <span className="text-sm">
                                                        {formatTime(item.attributes?.premiereDate2)}
                                                    </span>
                                                    {item.attributes?.premiere && (
                                                        <span className="ml-3 animate-fade text-sm text-[red]">
                                                            {t('premiere')}
                                                        </span>
                                                    )}
                                                </span>
                                            )}
                                            {item.attributes?.premiereDate3 && (
                                                <span className="flex flex-row items-center gap-2">
                                                    <Calendar className="text-base" />
                                                    <span className="text-sm">
                                                        {formatDate(item.attributes?.premiereDate3)}
                                                    </span>
                                                    <Clock className="fill-zinc-300 text-base" />
                                                    <span className="text-sm">
                                                        {formatTime(item.attributes?.premiereDate3)}
                                                    </span>
                                                    {item.attributes?.premiere && (
                                                        <span className="ml-3 animate-fade text-sm text-[red]">
                                                            {t('premiere')}
                                                        </span>
                                                    )}
                                                </span>
                                            )}
                                            {item.attributes?.premiereDate4 && (
                                                <span className="flex flex-row items-center gap-2">
                                                    <Calendar className="text-base" />
                                                    <span className="text-sm">
                                                        {formatDate(item.attributes?.premiereDate4)}
                                                    </span>
                                                    <Clock className="fill-zinc-300 text-base" />
                                                    <span className="text-sm">
                                                        {formatTime(item.attributes?.premiereDate4)}
                                                    </span>
                                                    {item.attributes?.premiere && (
                                                        <span className="ml-3 animate-fade text-sm text-[red]">
                                                            {t('premiere')}
                                                        </span>
                                                    )}
                                                </span>
                                            )}
                                        </>
                                    )}
                                </div>
                                <div className="flex w-full flex-row gap-5 px-5 md:gap-3 md:pt-4">
                                    <button className="w-full rounded-[16px] bg-gradient-to-r from-[#6d595962] to-[#467575] py-[6px] text-sm text-white">
                                        {t('viewMore')}
                                    </button>
                                    {item.attributes?.poster && (
                                        <button className="w-full rounded-[16px] bg-gradient-to-r from-[#6d595962] to-[#467575] py-[6px] text-sm text-white">
                                            {t('tickets')}
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}

                <Pagination
                    currentPage={data?.meta?.pagination?.page}
                    totalPages={data?.meta?.pagination?.pageCount}
                />
            </div>
        </section>
    )
}

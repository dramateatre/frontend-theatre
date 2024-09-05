import axiosInstance from '@/AxiosInstance'
import initTranslations from '@/libs/i18n/i18n'
import Image from 'next/image'
import Link from 'next/link'

async function fetchData(locale: string) {
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

export default async function Page({ params: { locale } }: { params: { locale: string } }) {
    const data = await fetchData(locale)
    const i18nNamespaces = ['main']
    const { t } = await initTranslations(locale, i18nNamespaces)

    return (
        <main className="flex min-h-screen w-full flex-col gap-10 px-12 py-5 text-white md:px-7 md:py-10 lg:px-20">
            <h1
                className={` ${locale === 'en' ? 'font-playwrite' : 'font-georgian'} text-center text-2xl tracking-widest md:text-2xl`}
            >
                {t('creativeGroup')}
            </h1>
            <div className="grid h-auto w-full grid-cols-1 gap-10 md:grid-cols-5 md:gap-y-10">
                {data.map((item: any, index: number) => (
                    <Link href={`/creative-group/${item.id}`}>
                        <div
                            key={index}
                            className="group relative z-10 h-52 w-full cursor-pointer overflow-hidden rounded-[6px] transition-all duration-300 ease-in-out md:h-52 md:hover:z-10 md:hover:scale-110"
                        >
                            {item?.attributes?.image?.data && (
                                <Image
                                    src={`https://api.batumitheatre.ge${item?.attributes?.image?.data?.attributes?.url}`}
                                    alt={`Actor ${index + 1}`}
                                    className="h-full w-full object-cover transition-all duration-300 ease-in-out md:group-hover:scale-105"
                                    layout="fill"
                                />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90" />
                                <div className="absolute bottom-0 left-0 right-0">
                                    <div className="flex w-full flex-row items-center justify-center gap-1 bg-white/20 pb-2 pt-1 text-sm">
                                        <h3>{item.attributes && item.attributes.firstname}</h3>
                                        <h3>{item.attributes && item.attributes.lastname}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    )
}

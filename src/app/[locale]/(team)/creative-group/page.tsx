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
        <main className="flex min-h-screen w-full flex-col gap-10 px-6 py-5 text-white md:px-7 md:py-10 lg:px-20">
            <h1
                className={` ${locale === 'en' ? 'font-playwrite' : 'font-georgian'} text-center text-2xl tracking-widest md:text-2xl`}
            >
                {t('creativeGroup')}
            </h1>
            <div className="grid h-auto w-full grid-cols-2 gap-x-10 gap-y-7 md:grid-cols-4 md:gap-y-10">
                {data.map((item: any, index: number) => (
                    <Link href={`/creative-group/${item.id}`}>
                        <div
                            key={index}
                            className="group relative z-10 h-40 w-full cursor-pointer overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out md:h-72 md:hover:z-10 md:hover:scale-110"
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
                                <div className="flex flex-row gap-2">
                                    <h3 className="text-md md:text-base">
                                        {item.attributes && item.attributes.firstname}
                                    </h3>
                                    <h3 className="text-md md:text-base">
                                        {item.attributes && item.attributes.lastname}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    )
}

import axiosInstance from '@/AxiosInstance'
import Image from 'next/image'
import Link from 'next/link'

async function fetchData(locale: string) {
    try {
        const response = await axiosInstance.get('/troupes', {
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

export default async function Page({ params: { locale } }: { params: { locale: string } }) {
    const data = await fetchData(locale)
    console.log(data, 'here')

    return (
        <main className="flex h-full w-full bg-[#1a1c2f] px-6 pb-20 pt-40 md:px-7 lg:px-20">
            <div className="grid h-auto w-full grid-cols-2 gap-x-5 gap-y-7 md:grid-cols-6 md:gap-y-10">
                {data.map((item: any, index: number) => (
                    <Link href={`/troupe/${item.id}`}>
                        <div
                            key={index}
                            className="group relative z-10 h-40 w-full cursor-pointer overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out md:h-48 md:hover:z-10 md:hover:scale-110"
                        >
                            {item.attributes.Avatar && item.attributes.Avatar.data && (
                                <Image
                                    src={`http://localhost:1337${item.attributes.Avatar.data.attributes.url}`}
                                    alt={`Actor ${index + 1}`}
                                    className="h-full w-full object-cover transition-all duration-300 ease-in-out md:group-hover:scale-105"
                                    layout="fill"
                                />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                <div className="flex flex-row gap-2">
                                    <h3 className="text-md md:text-base">
                                        {item.attributes && item.attributes.Firstname}
                                    </h3>
                                    <h3 className="text-md md:text-base">
                                        {item.attributes && item.attributes.Lastname}
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

import axiosInstance from '@/AxiosInstance'
import { EmailSms, PhoneCall } from '@/components/svg'
import initTranslations from '@/libs/i18n/i18n'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const i18nNamespaces = ['meta']
    const { t } = await initTranslations(locale, i18nNamespaces)

    return {
        title: t('administration'),
        description: t('descriptionAdministration'),
    }
}

async function fetchData(locale: string) {
    try {
        const response = await axiosInstance.get('/administrations', {
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
export default async function page({ params: { locale } }: { params: { locale: string } }) {
    const data = await fetchData(locale)
    const i18nNamespaces = ['main']
    const { t } = await initTranslations(locale, i18nNamespaces)

    return (
        <main
            className={`min-h-screen px-4 py-8 md:px-8 md:py-16 ${locale === 'en' ? 'italic' : 'font-georgian'}`}
        >
            <div className="mx-auto max-w-4xl">
                <h1
                    className={`mb-8 text-center text-xl text-white md:text-3xl ${
                        locale === 'en' ? 'font-playwrite' : 'font-georgian'
                    }`}
                >
                    {t('administration')}
                </h1>

                <div className="overflow-hidden rounded-[6px] bg-[#8a8989] bg-opacity-10 bg-card-gradient shadow-xl">
                    {data?.map((item: any, index: any) => (
                        <div
                            key={index}
                            className="border-b border-blue-200 border-opacity-30 p-6 last:border-b-0"
                        >
                            <div className="mb-4 flex flex-col justify-between md:flex-row md:items-center">
                                <div className="mb-2 flex items-center md:mb-0">
                                    <span className="text-lg font-semibold text-white">
                                        {item.attributes.firstname} {item.attributes.lastname}
                                    </span>
                                </div>
                                <span className="text-blue-200">{item.attributes.position}</span>
                            </div>
                            <div className="flex flex-col gap-4 sm:flex-row">
                                {item.attributes.email && (
                                    <a
                                        href={`mailto:${item.attributes.email}`}
                                        className="flex items-center text-blue-100 transition-colors duration-200 hover:text-white"
                                    >
                                        <EmailSms className="mr-2 h-5 w-5" />
                                        <span>{item.attributes.email}</span>
                                    </a>
                                )}
                                {item.attributes.phone && (
                                    <a
                                        href={`tel:${item.attributes.phone}`}
                                        className="flex items-center text-blue-100 transition-colors duration-200 hover:text-white"
                                    >
                                        <PhoneCall className="mr-2 h-4 w-4" />
                                        <span>{item.attributes.phone}</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

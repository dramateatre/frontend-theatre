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
        console.error('Error fetching data:', error)
        return []
    }
}
export default async function page({ params: { locale } }: { params: { locale: string } }) {
    const data = await fetchData(locale)
    const i18nNamespaces = ['main']
    const { t } = await initTranslations(locale, i18nNamespaces)

    return (
        <main
            className={` ${locale === 'en' ? 'italic' : 'font-georgian'} flex h-auto w-full flex-col items-center gap-6 py-5 text-white md:min-h-screen md:gap-10 md:py-10`}
        >
            <h1
                className={` ${locale === 'en' ? 'font-playwrite' : 'font-georgian'} text-xl tracking-wider md:text-2xl`}
            >
                {t('administration')}
            </h1>

            <div className="h-auto w-full border-t border-white bg-opacity-100 bg-card-gradient md:w-2/3 md:border-x">
                {data?.map((item: any, index: any) => (
                    <div
                        key={index}
                        className="flex w-full flex-col gap-2 pt-5 text-sm md:text-base"
                    >
                        <div className="flex flex-row items-start gap-4 px-3 md:items-center md:px-10">
                            <div className="flex flex-row items-center gap-2">
                                <span>{item.attributes.firstname}</span>
                                <span>{item.attributes.lastname}</span>
                            </div>
                            <span>-</span>
                            <span>{item.attributes.position}</span>
                        </div>
                        <div className="flex flex-row gap-4 px-3 md:px-10">
                            <a
                                href={`mailto:${item.attributes.email}`}
                                className="flex cursor-pointer flex-row items-center gap-1"
                            >
                                <EmailSms className="h-5 w-5" />
                                <span>{item.attributes.email}</span>
                            </a>
                            <span>-</span>

                            <a
                                href={`tel:${item.attributes.phone}`}
                                className="flex cursor-pointer flex-row items-center gap-1"
                            >
                                <PhoneCall className="h-3 w-3" />
                                <span>{item.attributes.phone}</span>
                            </a>
                        </div>
                        <div className="h-[1px] w-full bg-slate-200"></div>
                    </div>
                ))}
            </div>
        </main>
    )
}

import initTranslations from '@/libs/i18n/i18n'
import Contact from './_components/Contact'
import Header from './_components/Header'
import Location from './_components/Location'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const i18nNamespaces = ['meta']
    const { t } = await initTranslations(locale, i18nNamespaces)

    return {
        title: t('contact'),
        description: t('descriptionContact'),
        openGraph: {
            title: t('contact'),
            description: t('descriptionContact'),
            type: 'website',
            locale: locale,
            url: 'https://batumitheatre.ge/contact',
            siteName: 'Batumi Theatre',
        },
    }
}
export default async function page() {
    return (
        <main className="flex h-auto w-full flex-col gap-14 pt-10 bg-[#1a1b2f]">
            <Header />
            <Contact />
            <Location />
        </main>
    )
}

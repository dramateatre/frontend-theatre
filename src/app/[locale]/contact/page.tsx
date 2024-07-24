import Contact from './_components/Contact'
import Header from './_components/Header'
import Location from './_components/Location'

export default async function page({ params: { locale } }: { params: { locale: string } }) {
    return (
        <main className="flex h-auto w-full flex-col gap-14  bg-bg-body pt-10 md:pt-16 lg:pt-20">
            <Header locale={locale} />
            <Contact />

            <Location />
        </main>
    )
}

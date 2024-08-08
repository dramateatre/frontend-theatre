import Contact from './_components/Contact'
import Header from './_components/Header'
import Location from './_components/Location'

export default async function page() {
    return (
        <main className="flex h-auto w-full flex-col gap-14 pt-10">
            <Header />
            <Contact />
            <Location />
        </main>
    )
}

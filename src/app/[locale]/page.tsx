import Actors from './_components/Actors'
import Cover from './_components/Cover'
import Poster from './_components/Poster'
import History from './_components/History'
import News from './_components/News'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-[#07070981] pb-10">
            <Cover />
            <Poster />
            <News />
            <Actors />
            <History />
        </main>
    )
}

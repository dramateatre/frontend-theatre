'use client'
import { useTranslation } from 'react-i18next'
import Actors from './_components/Actors'
import Cover from './_components/Cover'
import Poster from './_components/Poster'
import History from './_components/History'

export default function Home() {
    const { t } = useTranslation()
    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-[#1D1B26]">
            <Cover />
            <Poster />

            <Actors />
            <History />
        </main>
    )
}

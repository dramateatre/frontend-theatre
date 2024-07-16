'use client'
import { useTranslation } from 'react-i18next'
import Actors from './_components/Actors'
import Cover from './_components/Cover'
import Paybill from './_components/Paybill'
import History from './_components/History'

export default function Home() {
    const { t } = useTranslation()
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Cover />
            <Paybill />
            <History />
            <Actors />
        </main>
    )
}

'use client'
import { useTranslation } from 'react-i18next'
import Actors from './_components/Actors'

export default function Home() {
    const { t } = useTranslation()
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Actors />
        </main>
    )
}

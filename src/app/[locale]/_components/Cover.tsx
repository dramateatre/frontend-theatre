'use client'
import { useParams } from 'next/navigation'
 

export default function Cover() {
    const params = useParams()

    return (
        <section className="relative mb-10 h-screen w-full bg-main-cover bg-cover bg-center bg-no-repeat md:min-h-screen xl:px-20"></section>
    )
}

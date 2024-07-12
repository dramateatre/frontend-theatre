import Image from 'next/image'
import ActorsIcon from '../../../../public/imgs/ActorsIcon.png'

export default function Actors() {
    return (
        <section className="flex w-full flex-col items-center gap-10 bg-black">
            <h1 className="font-garamond text-4xl text-white">Our Actors</h1>
            <Image src={ActorsIcon} className="h-auto w-auto" alt="Actors icon" />
        </section>
    )
}

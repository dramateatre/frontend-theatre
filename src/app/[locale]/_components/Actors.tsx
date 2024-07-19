import Image from 'next/image'
import ActorsIcon from '../../../../public/imgs/ActorsIcon.png'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import ActorImage from '../../../../public/imgs/actor.jpeg'
import { Component } from './Paybill'

export default function Actors() {
    return (
        <section className="flex w-full flex-col items-center gap-10 shadow-xl">
            <h1 className="font-garamond text-4xl text-black">Our Actors</h1>
            <Image src={ActorsIcon} className="h-auto w-auto" alt="Actors icon" />
            <Carousel
                opts={{
                    align: 'start',
                }}
                className="w-full px-7"
            >
                <CarouselContent>
                    {Array.from({ length: 12 }).map((_, index) => (
                        <CarouselItem key={index} className="lg:basis-1/6">
                            <Component />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    )
}

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

export default function Actors() {
    return (
        <section className="flex w-full flex-col items-center gap-10 bg-white shadow-xl">
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
                            <div className="p-1">
                                <Card className="rounded-md p-0">
                                    <CardContent className="flex aspect-square items-center justify-center p-0">
                                        <Image
                                            src={ActorImage}
                                            alt="123123"
                                            className="h-full w-full object-cover"
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    )
}

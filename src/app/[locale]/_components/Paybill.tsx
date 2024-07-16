import { Card, CardContent } from '@/components/ui/card'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'
import Village from '../../../../public/imgs/village.jpg'

export default function Paybill() {
    return (
        <div className="bg-bg-body w-full py-20">
            <Carousel>
                <CarouselContent className="lg:px-7 xl:px-20">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className='mr-5'>
                            <div className="border-gray flex h-auto w-full flex-col lg:gap-3 shadow-xl lg:h-full lg:w-auto lg:flex-row">
                                <Image
                                    className="h-[250px] w-full border border-black object-cover lg:h-full lg:w-3/4"
                                    src={Village}
                                    alt="Village"
                                />
                                <div className="flex h-auto w-full flex-col items-center justify-between gap-3 border border-black py-5 lg:order-2">
                                    <p className="text-cente text-sm">ბათუმის დრამატული თეატრი</p>
                                    <p className="lg:text-6xl">23</p>
                                    <p>სეტ / შაბ</p>
                                    <h1 className="text-3xl">სოფელსა შინა</h1>
                                    <p className="text-center text-sm">
                                        მიხეილ ჯავახიშვილის პიესის "შერცხვენილნი" ის მიხედვით
                                    </p>
                                    <div className="flex flex-row gap-3">
                                        <button className="border border-black p-1">სრულად</button>
                                        <button className="border border-black p-1">
                                            ბილეთები
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}

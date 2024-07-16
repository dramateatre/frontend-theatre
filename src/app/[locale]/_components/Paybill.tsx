import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import Village from '../../../../public/imgs/village.jpg'

export default function Paybill() {
    return (
        <div className="bg-bg-body bg-[#F1EFEB] w-full py-20">
            <Carousel>
                <CarouselContent className="px-2 lg:px-7 xl:px-20">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="lg:mr-5">
                            <div className="border-gray flex h-auto w-full flex-col shadow-xl lg:h-full lg:w-auto lg:flex-row lg:gap-3">
                                <Image
                                    className="h-[250px] w-full border border-[#BA9E66] object-cover lg:h-full lg:w-3/4"
                                    src={Village}
                                    alt="Village"
                                />
                                <div className="flex h-auto w-full flex-col items-center justify-between gap-1 border border-[#BA9E66] px-5 py-2 lg:order-2 lg:gap-3 lg:py-5">
                                    <p className="text-cente text-xs lg:text-sm">
                                        ბათუმის დრამატული თეატრი
                                    </p>
                                    <div className="flex flex-row items-center gap-3 lg:flex-col">
                                        <p className="text-2xl lg:text-6xl">23</p>
                                        <p>სეტ / შაბ</p>
                                    </div>
                                    <h1 className="text-xl lg:text-3xl">სოფელსა შინა</h1>
                                    <p className="text-center text-sm">
                                        მიხეილ ჯავახიშვილის პიესის "შერცხვენილნი" ის მიხედვით
                                    </p>
                                    <div className="mt-2 flex flex-row gap-5 lg:gap-3">
                                        <button className="border border-black px-3 lg:p-1">
                                            სრულად
                                        </button>
                                        <button className="border border-black px-3 lg:p-1">
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

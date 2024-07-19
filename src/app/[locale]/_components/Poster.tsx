import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import Village from '../../../../public/imgs/village.jpg'

export default function Poster() {
    return (
        <div className="w-full py-20 text-white">
            <Carousel>
                <CarouselContent className="ml-0 lg:px-7 xl:px-10">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="px-6 lg:pl-7 xl:px-10">
                            <div className="flex h-auto w-full flex-col overflow-hidden rounded-[12px] border border-white lg:h-full lg:w-auto lg:flex-row lg:gap-5 lg:rounded-none lg:border-none">
                                <Image
                                    className="h-[220px] w-full border-white object-cover object-center shadow-inner lg:h-full lg:w-3/4 lg:rounded-[12px] lg:border"
                                    src={Village}
                                    alt="Village"
                                />
                                <div className="flex h-auto w-full flex-col items-center justify-between gap-3 border-white bg-[#2c2943] px-5 pb-8 pt-4 shadow-inner lg:order-2 lg:rounded-[12px] lg:border lg:py-8">
                                    <p className="text-cente text-xs">ბათუმის დრამატული თეატრი</p>
                                    <div className="flex flex-row items-center gap-3 lg:flex-col">
                                        <p className="text-sm lg:text-5xl">23</p>
                                        <p className="text-sm">სექტემბერი / შაბათი</p>
                                    </div>
                                    <h1 className="text-xl lg:text-3xl">სოფელსა შინა</h1>
                                    <p className="text-center text-sm">
                                        მიხეილ ჯავახიშვილის პიესის "შერცხვენილნი" ის მიხედვით
                                    </p>
                                    <div className="flex w-full flex-row gap-5 pt-4 lg:gap-3">
                                        <button className="flex w-full items-center justify-center rounded-[6px] border border-white bg-white py-1 text-sm text-black shadow-inner">
                                            სრულად
                                        </button>
                                        <button className="flex w-full items-center justify-center rounded-[6px] border border-white bg-white py-1 text-sm text-black">
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

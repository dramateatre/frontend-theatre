import Image from 'next/image'
import Test from '../../../../public/imgs/Test.jpg'
import { useTranslation } from 'react-i18next'
import { useParams } from 'next/navigation'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'

export default function News() {
    const { t } = useTranslation()
    const params = useParams()
    const locale = params.locale
    return (
        <div className="w-full text-white pb-10">
            <div className="flex w-full flex-row justify-center">
                <h1
                    className={` ${locale === 'en' ? 'font-playwrite' : 'font-georgian'} texet-center text-3xl tracking-[5px]`}
                >
                    სიახლეები
                </h1>
            </div>
            <Carousel className="flex justify-center">
                <CarouselContent className="py-10 pr-2 lg:px-7 xl:px-10">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <>
                            <CarouselItem key={index} className="md:basis-1/4 pl-6 lg:pl-7 xl:pl-10">
                                <div className="shadow-custom relative z-50 flex w-full flex-col overflow-hidden rounded-[16px]">
                                    <div className="h-[200px] w-full">
                                        <Image
                                            className="h-full w-full object-cover object-center"
                                            src={Test}
                                            alt="Village"
                                        />
                                    </div>
                                    <div className="flex h-[150px] flex-col py-2 px-3 items-startg  justify-around bg-[#1a1c2f]">
                                        <h1>რაც გინახავს ვეღარ ნახავ</h1>
                                        <p className="line-clamp-2 overflow-hidden text-ellipsis text-xs">
                                            თეატრალურ ნიღაბს ორი სახე აქვს, ერთი ტირის, მეორე -
                                            იცინის. თეატრის სამხატვრო ხელმძღვანელმა, ალექსანდრე
                                            ქანთარიამ ამჯერად თეატრალური ნიღბის ის მხარე აირჩია,
                                            რომელიც მაყურებელს აღიმებს, მეტიც შეილება ითქვას,
                                            გულიანად ახარხარებს, რადგან ბათუმის დრამატული თეატრის
                                            სცენაზე ავქსე
                                        </p>
                                        <div className="h-[1px] w-full bg-white"></div>
                                        <span>07.25.2024</span>
                                    </div>
                                </div>
                            </CarouselItem>
                        </>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}

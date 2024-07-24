import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import Village from '../../../../public/imgs/village.jpg'
import { useParams } from 'next/navigation'
import { useTranslation } from 'react-i18next'

export default function Poster() {
    const { t } = useTranslation()
    const params = useParams()
    const locale = params.locale
    return (
        <div className="w-full pb-10 md:pb-20 text-white">
            <div className="flex w-full flex-row justify-center pt-10">
                <h1
                    className={` ${locale === 'en' ? 'font-playwrite' : 'font-georgian'} texet-center text-3xl tracking-[20px]`}
                >
                    {t('poster')}
                </h1>
            </div>
            <Carousel className="flex justify-center">
                <CarouselContent className="py-10 pr-2 lg:px-7 xl:px-10">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <>
                            <CarouselItem key={index} className="pl-6 lg:pl-7 xl:pl-10">
                                <div className="shadow-custom relative z-50 flex w-full flex-col overflow-hidden rounded-[16px] lg:h-[400px] lg:flex-row">
                                    <div className="h-[200px] w-full md:h-[300px] lg:h-full lg:w-[70%] xl:w-[75%]">
                                        <Image
                                            className="h-full w-full object-cover object-center"
                                            src={Village}
                                            alt="Village"
                                        />
                                    </div>
                                    <div className="flex h-auto flex-col items-center justify-between gap-3 bg-[#1a1c2f] pb-8 pt-4 lg:order-2 lg:w-[30%] lg:py-8 xl:w-[25%]">
                                        <p className="text-cente text-xs">
                                            ბათუმის დრამატული თეატრი
                                        </p>
                                        <div className="flex flex-row items-center gap-3 lg:flex-col">
                                            <p className="text-sm lg:text-5xl">23</p>
                                            <p className="text-sm">სექტემბერი / შაბათი</p>
                                        </div>
                                        <h1 className="text-xl lg:text-2xl">სოფელსა შინა</h1>
                                        <p className="px-5 text-center text-sm">
                                            მიხეილ ჯავახიშვილის პიესის "შერცხვენილნი" ის მიხედვითqe
                                        </p>
                                        <div className="flex w-full flex-row gap-5 px-5 pt-4 lg:gap-3">
                                            <button className="flex w-full items-center justify-center rounded-[6px] bg-white py-1 text-sm text-black">
                                                სრულად
                                            </button>
                                            <button className="flex w-full items-center justify-center rounded-[6px] bg-white py-1 text-sm text-black">
                                                ბილეთები
                                            </button>
                                        </div>
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

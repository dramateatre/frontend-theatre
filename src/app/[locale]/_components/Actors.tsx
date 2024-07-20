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
import Creative from '../../../../public/imgs/Creative.jpg'
import { useTranslation } from 'react-i18next'
import { useParams } from 'next/navigation'

export default function Actors() {
    const { t } = useTranslation()
    const params = useParams()
    const locale = params.locale
    return (
        <section className="flex w-full flex-col items-center gap-5 border-white bg-[#130f23] lg:gap-10">
            <h1
                className={`${locale === 'en' ? 'font-playwrite' : 'font-georgian'} px-6 text-left text-2xl text-white md:text-4xl`}
            >
                {t('creativeGroup')}
            </h1>
            <Image src={ActorsIcon} className="h-3 w-auto" alt="Actors icon" />
            <Carousel className="flex justify-center">
                <CarouselContent className="pr-6 lg:pr-7 xl:pr-10">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <CarouselItem
                            key={index}
                            className="pl-6 sm:basis-1/2 lg:basis-1/3 lg:pl-7 xl:basis-1/5 xl:pl-10"
                        >
                            <div className="flex items-center justify-center">
                                <Image
                                    src={Creative}
                                    alt="123123"
                                    className="h-[220px] w-full border border-white object-cover md:h-[250px]"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    )
}

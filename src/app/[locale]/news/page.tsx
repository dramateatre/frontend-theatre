import Image from 'next/image'
import React from 'react'
import NewsImage from '../../../../public/imgs/New.webp'
import test from '../../../../public/imgs/village.jpg'
import test2 from '../../../../public/imgs/Test.jpg'

export default function page() {
    return (
        <main className="flex flex-col gap-10 px-5 pb-20 pt-40 md:px-40">
            <div className="relative z-50 flex w-full flex-col overflow-hidden rounded-[16px] shadow-custom md:flex-row">
                <div className="relative h-[200px] w-[300px]">
                    <Image
                        fill
                        src={NewsImage}
                        alt="Village"
                        className="object-cover object-center"
                    />
                </div>
                <div className="flex h-[150px] w-[400px] flex-col items-start justify-around bg-[#1a1c2f] px-3 py-2 md:h-auto md:px-6">
                    <h1 className="text-white">რაც გინახავს ვეღარ ნახავ</h1>
                    <p className="line-clamp-2 overflow-hidden text-ellipsis text-xs text-white">
                        თეატრალურ ნიღაბს ორი სახე აქვს, ერთი ტირის, მეორე - იცინის. თეატრის
                        სამხატვრო ხელმძღვანელმა, ალექსანდრე ქანთარიამ ამჯერად თეატრალური ნიღბის ის
                        მხარე აირჩია, რომელიც მაყურებელს აღიმებს, მეტიც შეილება ითქვას, გულიანად
                        ახარხარებს, რადგან ბათუმის დრამატული თეატრის სცენაზე ავქსე
                    </p>
                    <div className="h-[1px] w-full bg-white"></div>
                    <span className="text-white">07.25.2024</span>
                </div>
            </div>
            <div className="relative z-50 flex w-full flex-col overflow-hidden rounded-[16px] shadow-custom md:flex-row">
                <div className="relative h-[200px] w-[300px]">
                    <Image fill src={test2} alt="Village" className="object-cover object-center" />
                </div>
                <div className="flex h-[150px] w-[400px] flex-col items-start justify-around bg-[#1a1c2f] px-3 py-2 md:h-auto md:px-6">
                    <h1 className="text-white">რაც გინახავს ვეღარ ნახავ</h1>
                    <p className="line-clamp-2 overflow-hidden text-ellipsis text-xs text-white">
                        თეატრალურ ნიღაბს ორი სახე აქვს, ერთი ტირის, მეორე - იცინის. თეატრის
                        სამხატვრო ხელმძღვანელმა, ალექსანდრე ქანთარიამ ამჯერად თეატრალური ნიღბის ის
                        მხარე აირჩია, რომელიც მაყურებელს აღიმებს, მეტიც შეილება ითქვას, გულიანად
                        ახარხარებს, რადგან ბათუმის დრამატული თეატრის სცენაზე ავქსე
                    </p>
                    <div className="h-[1px] w-full bg-white"></div>
                    <span className="text-white">07.25.2024</span>
                </div>
            </div>
            <div className="relative z-50 flex w-full flex-col overflow-hidden rounded-[16px] shadow-custom md:flex-row">
                <div className="relative h-[200px] w-[300px]">
                    <Image fill className="object-cover object-center" src={test} alt="Village" />
                </div>
                <div className="flex h-[150px] w-[400px] flex-col items-start justify-around bg-[#1a1c2f] px-3 py-2 md:h-auto md:px-6">
                    <h1 className="text-white">რაც გინახავს ვეღარ ნახავ</h1>
                    <p className="line-clamp-2 overflow-hidden text-ellipsis text-xs text-white">
                        თეატრალურ ნიღაბს ორი სახე აქვს, ერთი ტირის, მეორე - იცინის. თეატრის
                        სამხატვრო ხელმძღვანელმა, ალექსანდრე ქანთარიამ ამჯერად თეატრალური ნიღბის ის
                        მხარე აირჩია, რომელიც მაყურებელს აღიმებს, მეტიც შეილება ითქვას, გულიანად
                        ახარხარებს, რადგან ბათუმის დრამატული თეატრის სცენაზე ავქსე
                    </p>
                    <div className="h-[1px] w-full bg-white"></div>
                    <span className="text-white">07.25.2024</span>
                </div>
            </div>
        </main>
    )
}

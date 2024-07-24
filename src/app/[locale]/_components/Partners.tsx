import Image from 'next/image'
import Test1 from '../../../../public/imgs/partners/326245135_1009278503544266_7557136609059809949_n.png'
import Test2 from '../../../../public/imgs/partners/academ.jpg'
import Test3 from '../../../../public/imgs/partners/batauto.png'
import Test4 from '../../../../public/imgs/partners/bsu.png'

export default function Partners() {
    return (
        <section className="relative h-full w-full">
            {/* Dark overlay with gradient */}
            <div className="absolute inset-[20px] z-50 bg-black opacity-50 blur-[25px]"></div>

            {/* Content */}
            <div className="relative z-20 grid grid-cols-7 gap-10 p-8">
                <div className="h-20 w-20 overflow-hidden rounded-full">
                    <Image className="h-full w-full object-cover" src={Test1} alt="Partner 1" />
                </div>
                <div className="h-20 w-20 overflow-hidden rounded-full">
                    <Image className="h-full w-full object-cover" src={Test2} alt="Partner 2" />
                </div>
                <div className="h-20 w-20 overflow-hidden rounded-full">
                    <Image className="h-full w-full object-cover" src={Test3} alt="Partner 3" />
                </div>
                <div className="h-20 w-20 overflow-hidden rounded-full">
                    <Image className="h-full w-full object-cover" src={Test4} alt="Partner 4" />
                </div>
                <div className="h-20 w-20 overflow-hidden rounded-full">
                    <Image className="h-full w-full object-cover" src={Test1} alt="Partner 1" />
                </div>
                <div className="h-20 w-20 overflow-hidden rounded-full">
                    <Image className="h-full w-full object-cover" src={Test2} alt="Partner 2" />
                </div>
                <div className="h-20 w-20 overflow-hidden rounded-full">
                    <Image className="h-full w-full object-cover" src={Test3} alt="Partner 3" />
                </div>
                <div className="h-20 w-20 overflow-hidden rounded-full">
                    <Image className="h-full w-full object-cover" src={Test4} alt="Partner 4" />
                </div>
                <div className="h-20 w-20 overflow-hidden rounded-full">
                    <Image className="h-full w-full object-cover" src={Test1} alt="Partner 1" />
                </div>
                <div className="h-20 w-20 overflow-hidden rounded-full">
                    <Image className="h-full w-full object-cover" src={Test2} alt="Partner 2" />
                </div>
                <div className="h-20 w-20 overflow-hidden rounded-full">
                    <Image className="h-full w-full object-cover" src={Test3} alt="Partner 3" />
                </div>
                <div className="h-20 w-20 overflow-hidden rounded-full">
                    <Image className="h-full w-full object-cover" src={Test4} alt="Partner 4" />
                </div>
                <div className="h-20 w-20 overflow-hidden rounded-full">
                    <Image className="h-full w-full object-cover" src={Test1} alt="Partner 1" />
                </div>
                <div className="h-20 w-20 overflow-hidden rounded-full">
                    <Image className="h-full w-full object-cover" src={Test2} alt="Partner 2" />
                </div>
                <div className="h-20 w-20 overflow-hidden rounded-full">
                    <Image className="h-full w-full object-cover" src={Test3} alt="Partner 3" />
                </div>
                <div className="h-20 w-20 overflow-hidden rounded-full">
                    <Image className="h-full w-full object-cover" src={Test4} alt="Partner 4" />
                </div>
            </div>
        </section>
    )
}

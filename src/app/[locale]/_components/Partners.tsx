import { useState, useEffect } from 'react'
import Image from 'next/image'
import Test1 from '../../../../public/imgs/partners/326245135_1009278503544266_7557136609059809949_n.png'
import Test2 from '../../../../public/imgs/partners/academ.jpg'
import Test3 from '../../../../public/imgs/partners/batauto.png'
import Test4 from '../../../../public/imgs/partners/bsu.png'
import { useMediaQuery } from 'react-responsive'

export default function Partners() {
    const isDesktop = useMediaQuery({
        query: '(min-width: 768px)',
    })
    const [visibleItems, setVisibleItems] = useState(8)

    const partnerImages = [
        { src: Test1, alt: 'Partner 1' },
        { src: Test2, alt: 'Partner 2' },
        { src: Test3, alt: 'Partner 3' },
        { src: Test4, alt: 'Partner 4' },
        { src: Test4, alt: 'Partner 5' },
        { src: Test1, alt: 'Partner 6' },
        { src: Test1, alt: 'Partner 7' },
        { src: Test1, alt: 'Partner 8' },
        { src: Test1, alt: 'Partner 9' },
        { src: Test4, alt: 'Partner 4' },
        { src: Test4, alt: 'Partner 5' },
        { src: Test1, alt: 'Partner 6' },
    ]

    useEffect(() => {
        if (isDesktop) {
            setVisibleItems(partnerImages.length)
        } else {
            setVisibleItems(8)
        }
    }, [isDesktop, partnerImages.length])

    const loadMore = () => {
        setVisibleItems((prevItems) => Math.min(prevItems + 4, partnerImages.length))
    }

    return (
        <section className="relative my-10 h-full w-full px-6 md:px-60">
            <div className="absolute inset-[20px] z-50 bg-black opacity-50 blur-[25px]"></div>
            <div className="relative z-20 grid grid-cols-4 items-center justify-center gap-x-5 gap-y-2 md:gap-y-5 md:grid-cols-6">
                {partnerImages.slice(0, visibleItems).map((image, index) => (
                    <div
                        key={index}
                        className="flex h-20 w-20 flex-row items-center justify-center overflow-hidden rounded-full"
                    >
                        <Image
                            className="h-full w-full object-cover"
                            src={image.src}
                            alt={image.alt}
                        />
                    </div>
                ))}
            </div>
            {!isDesktop && visibleItems < partnerImages.length && (
                <div className="mt-4 text-center">
                    <button
                        onClick={loadMore}
                        className="rounded border border-black bg-[#1a1c2f] px-4 py-1 text-sm text-white shadow-custom transition duration-300 ease-in-out hover:bg-gray-800"
                    >
                        Load More
                    </button>
                </div>
            )}
        </section>
    )
}

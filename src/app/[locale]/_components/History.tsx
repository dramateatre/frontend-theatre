import Image from 'next/image'
import React from 'react'
import Old from '../../../../public/imgs/OldTheatre.jpg'
import New from '../../../../public/imgs/New.webp'

export default function History() {
    return (
        <div className="relative flex h-auto w-full bg-[#F1EFEB] py-10 shadow-lg md:pb-40">
            <div className="grid grid-cols-1 md:grid-cols-2 md:pl-20">
                <div className="relative">
                    <Image
                        src={Old}
                        alt="Old Image"
                        className="l h-full w-full border-2 border-white object-cover"
                    />
                </div>
                <div className="relative flex flex-col">
                    <h1 className="my-5 text-center text-4xl text-black md:mt-5">
                        History of theatre
                    </h1>
                    <div className="relative hidden h-full w-full md:block">
                        <div className="relative" style={{ transform: 'translate(-80px, 20%)' }}>
                            <Image
                                src={New}
                                alt="New Image"
                                className="h-full w-full border-2 border-white object-cover"
                            />
                        </div>
                    </div>
                    <Image
                        src={New}
                        alt="New Image"
                        className="h-full w-full border border-white object-cover md:hidden"
                    />
                </div>
            </div>
        </div>
    )
}

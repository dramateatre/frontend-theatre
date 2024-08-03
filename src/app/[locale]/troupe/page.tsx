import React from 'react'
import Actor from '../../../../public/imgs/Creative.jpg'
import Image from 'next/image'

export default function Page() {
    return (
        <main className="flex h-full w-full bg-[#1a1c2f] px-6 pb-20 pt-40 md:px-7 lg:px-20">
            <div className="grid h-auto w-full grid-cols-2 gap-x-5 gap-y-7 md:grid-cols-6 md:gap-y-10">
                {[...Array(15)].map((_, index) => (
                    <div
                        key={index}
                        className="group relative z-10 h-48 w-full cursor-pointer overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out md:hover:z-10 md:hover:scale-110"
                    >
                        <Image
                            src={Actor}
                            alt={`Actor ${index + 1}`}
                            className="h-full w-full object-cover transition-all duration-300 ease-in-out md:group-hover:scale-105"
                            layout="fill"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 transition-opacity duration-300 ease-in-out md:opacity-0 md:group-hover:opacity-70" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transition-all duration-300 ease-in-out md:translate-y-full md:group-hover:translate-y-0">
                            <h3 className="text-lg font-bold">Actor Name</h3>
                            <p className="text-sm">Role Description</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}

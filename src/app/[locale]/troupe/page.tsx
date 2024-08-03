import React from 'react'
import Actor from '../../../../public/imgs/Creative.jpg'
import Image from 'next/image'

export default function Page() {
    return (
        <main className="flex h-full w-full bg-[#1a1c2f] px-6 pt-40 md:px-7 lg:px-20">
            <div className="grid h-auto w-full grid-cols-2 gap-5 md:grid-cols-6">
                {[...Array(6)].map((_, index) => (
                    <div
                        key={index}
                        className="group relative h-48 w-full overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:z-10 hover:scale-110"
                    >
                        <Image
                            src={Actor}
                            alt={`Actor ${index + 1}`}
                            className="h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
                            layout="fill"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-70" />
                        <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 text-white transition-all duration-300 ease-in-out group-hover:translate-y-0">
                            <h3 className="text-lg font-bold">Actor Name</h3>
                            <p className="text-sm">Role Description</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}

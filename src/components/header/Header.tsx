import Link from 'next/link'
import React from 'react'
import LangChoose from './LangChoose'

export default function Header() {
    return (
        <div className="absolute z-50 flex h-24 w-full flex-row items-center justify-end gap-10 border-b border-white bg-[#0f1017] bg-opacity-80 px-6 backdrop-blur-none md:px-7 lg:px-20">
            <Link href="/">
                <h1 className="text-lg text-white">Main</h1>
            </Link>
            <Link href="/contact">
                <h1 className="text-lg text-white">Contact</h1>
            </Link>
            <LangChoose className="cursor-pointer text-white" spanClassname=" " />
        </div>
    )
}

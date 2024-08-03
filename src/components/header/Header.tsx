import Link from 'next/link'
import React from 'react'
import LangChoose from './LangChoose'

export default function Header() {
    return (
        <div className="absolute z-50 flex h-24 w-full flex-row items-center justify-end gap-10 border-b border-white bg-[#0f1017] bg-opacity-80 px-6 backdrop-blur-none md:px-7 lg:px-20">
            <Link href="/">
                <h1 className="text-lg text-white">Main</h1>
            </Link>
            <Link href="/news">
                <h1 className="text-lg text-white">News</h1>
            </Link>
            <details className="dropdown">
                <summary className="btn order-2 m-1 cursor-pointer text-xl text-white">
                    team
                </summary>
                <ul className="menu dropdown-content absolute z-[1] mt-3 flex w-52 flex-col gap-5 overflow-hidden rounded-[6px] bg-[#282837] p-4 text-white shadow">
                    <li>
                        <a>დასი</a>
                    </li>
                    <li>
                        <a>სამხატვრო გუნდი</a>
                    </li>
                </ul>
            </details>
            <details className="dropdown">
                <summary className="btn order-2 m-1 cursor-pointer text-xl text-white">
                    about
                </summary>
                <ul className="menu dropdown-content absolute z-[1] mt-3 flex w-52 flex-col gap-5 overflow-hidden rounded-[6px] bg-[#282837] p-4 text-white shadow">
                    <li>
                        <a>თეატრის ისტორია</a>
                    </li>
                    <li>
                        <a>სპეკტაკლოგრაფია</a>
                    </li>
                    <li>
                        <a>მუზეუმი</a>
                    </li>
                </ul>
            </details>
            <Link href="/troupe">
                <h1 className="btn text-lg text-white">Troupe</h1>
            </Link>
            <Link href="/contact">
                <h1 className="text-lg text-white">Contact</h1>
            </Link>

            <LangChoose className="cursor-pointer text-white" spanClassname=" " />
        </div>
    )
}

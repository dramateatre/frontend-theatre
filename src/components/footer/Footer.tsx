import Image from 'next/image'
import FooterCover from '../../../public/imgs/FooterCover1.jpg'
import { Social } from '../shared/SocialIcons'
import { HomePhoneCall, Message, PhoneCall } from '../svg'

export default function Footer() {
    return (
        <section className="bg-footer-cover flex h-[600px] w-full bg-cover bg-top bg-no-repeat px-10 pt-12 md:h-[400px] md:flex-col md:justify-between md:bg-center md:px-24">
            <div className="flex w-full flex-col items-center gap-12 md:flex-row md:items-start md:justify-between">
                <h1 className="text-2xl text-white">Batumi Drama Theatre</h1>
                <div className="grid grid-flow-col grid-cols-2 grid-rows-5 items-center gap-5 gap-x-20 text-sm text-white">
                    <span>Main</span>
                    <span>News History</span>
                    <span>Theater</span>
                    <span>History History</span>
                    <span>Contact</span>
                    <span>History</span>
                    <span>History</span>
                    <span>Contact</span>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-sm font-semibold text-white">Contact</h1>
                    <div className="mt-4 flex flex-col gap-4 md:grid md:grid-cols-1">
                        <div className="flex cursor-pointer flex-row items-center gap-3">
                            <PhoneCall className="h-4 w-4" />
                            <a target="_blank" rel="noopener noreferrer" href="tel:+995577980858">
                                <span className="text-sm text-white hover:underline">
                                    577 980 858
                                </span>
                            </a>
                            <span className="text-white">|</span>
                            <a target="_blank" rel="noopener noreferrer" href="tel:+995555366399">
                                <span className="text-sm text-white hover:underline">
                                    555 366 399
                                </span>
                            </a>
                        </div>
                        <div className="flex cursor-pointer flex-row items-center gap-3">
                            <HomePhoneCall className="h-5 w-5" />
                            <a target="_blank" rel="noopener noreferrer" href="tel:0422 27 31 80 ">
                                <span className="text-sm text-white hover:underline">
                                    0422 27 31 80
                                </span>
                            </a>
                            <span className="text-white">|</span>
                            <a target="_blank" rel="noopener noreferrer" href="tel:+995577980826">
                                <span className="text-sm text-white hover:underline">
                                    577 980 826
                                </span>
                            </a>
                        </div>

                        <div className="flex cursor-pointer flex-row items-center gap-3">
                            <Message className="h-4 w-4" />
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="mailto:batumidramatheatre@gmail.com"
                            >
                                <span className="text-sm text-white hover:underline">
                                    batumidramatheatre@gmail.com
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="hidden pt-16 md:flex">
                        <Social />
                    </div>
                </div>
                <div className="flex w-full flex-col items-start md:hidden">
                    <Social />
                    <div className="mt-8 h-[1px] w-full bg-white md:mt-0 md:hidden"></div>
                </div>
            </div>

            <div className="mt-6 hidden h-[1px] w-full bg-white md:block"></div>
            <div className="flex flex-row items-center justify-center py-4 md:justify-center">
                <p className="text-[10px] text-white">Copyrighyt 2024</p>
            </div>
        </section>
    )
}

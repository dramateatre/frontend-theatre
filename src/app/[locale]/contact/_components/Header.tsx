import { FbIcon, InstaIcon, WhatsappIcon } from "@/components/svg"
import initTranslations from "@/libs/i18n/i18n"

 
 

async function Header({ locale }: { locale: string }) {
    const i18nNamespaces = ['contact']
    const { t } = await initTranslations(locale, i18nNamespaces)
    return (
        <section className="flex h-auto w-full flex-col items-center gap-6 px-5 md:gap-10">
            <h1 className=" font-modernline text-4xl lg:text-5xl">{t('chateau')}</h1>
            <div className="grid grid-cols-1 gap-x-4   gap-y-3 text-sm md:grid-cols-2 md:gap-y-4 ">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.google.com/maps/dir/?api=1&destination=41.643173265504%2C42.011096477509"
                >
                    <span className="text-xs underline-offset-4 hover:underline md:text-sm">
                        <span className="font-semibold">{t('address')}: </span>
                        {t('addressItem')}
                    </span>
                </a>
                <div className="flex flex-row ">
                    <span className="font-semibold">{t('phone')}: </span>
                    <a
                        className="ml-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="tel:+995599716263"
                    >
                        <span className="text-xs underline-offset-4 hover:underline md:text-sm">
                            +995 599 71 62 63
                        </span>
                    </a>
                    <a
                        className="ml-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="tel:+995599412231"
                    >
                        <span className="text-xs underline-offset-4 hover:underline md:text-sm">
                            +995 599 41 22 31
                        </span>
                    </a>
                </div>

                <a target="_blank" rel="noopener noreferrer" href="mailto:chateauiveri@gmail.com">
                    <span className="text-xs underline-offset-4 hover:underline md:text-sm">
                        <span className=" font-semibold ">{t('email')}: </span>
                        chateauiveri@gmail.com
                    </span>
                </a>
                <div className="flex flex-row items-center gap-5">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.facebook.com/Chateauiveri"
                    >
                        <FbIcon className="h-5 w-5" />
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.instagram.com/chateau.iveri"
                    >
                        <InstaIcon className="h-5 w-5" />
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://wa.me/%2B995599716263"
                    >
                        <WhatsappIcon className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Header

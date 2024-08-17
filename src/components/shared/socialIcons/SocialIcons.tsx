import { WhiteFb, WhiteInsta, WhiteWatsapp } from '../../svg'

export const Social = () => {
    return (
        <>
            <div className="flex w-full flex-row gap-x-6 md:justify-end">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/BatumiDrama"
                >
                    <WhiteFb className="h-5 w-5" />
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/batumitheatre"
                >
                    <WhiteInsta className="h-5 w-5" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://wa.me/%2B995599716263">
                    <WhiteWatsapp className="h-5 w-5" />
                </a>
            </div>
        </>
    )
}

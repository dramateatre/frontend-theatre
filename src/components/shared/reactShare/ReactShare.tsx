import { FacebookShareButton, WhatsappShareButton, EmailShareButton } from 'react-share'
import { FacebookIcon, TwitterIcon, WhatsappIcon, EmailIcon } from 'react-share'

export const BlogActions = () => {
    const pageUrl = window.location.href

    const copyLink = () => {
        navigator.clipboard.writeText(pageUrl).then(() => {
            alert('Link copied to clipboard!')
        })
    }

    const printContent = () => {
        window.print()
    }

    return (
        <div>
            <button onClick={copyLink}>Copy Link</button>
            <button onClick={printContent}>Print</button>
            <div>
                <FacebookShareButton url={pageUrl}>
                    <FacebookIcon size={32} round />
                </FacebookShareButton>

                <WhatsappShareButton url={pageUrl}>
                    <WhatsappIcon size={32} round />
                </WhatsappShareButton>

                <EmailShareButton url={pageUrl}>
                    <EmailIcon size={32} round />
                </EmailShareButton>
            </div>
        </div>
    )
}

import { CopyLink, Print } from '@/components/svg'
import { useTranslation } from 'react-i18next'
import { FacebookShareButton, WhatsappShareButton, EmailShareButton } from 'react-share'
import { FacebookIcon, WhatsappIcon, EmailIcon } from 'react-share'

export const BlogActions = () => {
    const pageUrl = window.location.href
    const { t } = useTranslation()

    const copyLink = () => {
        navigator.clipboard.writeText(pageUrl).then(() => {
            alert(t('copied'))
        })
    }

    const printContent = () => {
        window.print()
    }

    return (
        <div className="flex flex-row gap-4">
            <button onClick={copyLink}>
                <CopyLink className="h-6 w-6 fill-white" />
            </button>
            <button onClick={printContent}>
                <Print className="h-6 w-6 fill-white" />
            </button>
            <div className="flex flex-row gap-4">
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

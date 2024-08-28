'use client'
import BigStagePHotoViewer from '@/components/shared/reactPhotoView/BigStagePhotoiewer'
import SmallStagePhotoViewer from '@/components/shared/reactPhotoView/SmallStagePhotoViewer'
import { useTranslation } from 'react-i18next'

export default function PhotoViewers({ data }: any) {
    const { t } = useTranslation()
    return (
        <div className="relative flex h-full w-full flex-col justify-between gap-10 text-white md:flex-row">
            <div className="flex w-full flex-col gap-5">
                <h3 className="text-center text-lg">{t('bigStage')}</h3>
                <div className="relative flex h-72 w-full cursor-zoom-in flex-col gap-5 overflow-hidden rounded-[4px]">
                    <BigStagePHotoViewer data={data} />
                </div>
            </div>
            <div className="flex w-full flex-col gap-5">
                <h3 className="text-center text-lg">{t('smallStage')}</h3>
                <div className="relative flex h-72 w-full cursor-zoom-in flex-col gap-5 overflow-hidden rounded-[4px]">
                    <SmallStagePhotoViewer data={data} />
                </div>
            </div>
        </div>
    )
}

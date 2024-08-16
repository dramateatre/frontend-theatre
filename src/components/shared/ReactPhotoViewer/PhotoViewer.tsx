import Image from 'next/image'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'

export default function PhovoViewer({ mainSrc, thumbnailSrc }: any) {
    return (
        <PhotoProvider>
            <PhotoView src={mainSrc}>
                <Image fill className="object-cover object-center" src={thumbnailSrc} alt="" />
            </PhotoView>
        </PhotoProvider>
    )
}

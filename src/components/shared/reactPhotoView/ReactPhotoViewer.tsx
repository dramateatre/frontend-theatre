import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'

export default function ReactPhotoViewer({ main }: any) {
    return (
        <PhotoProvider>
            <PhotoView src={main}>
                <img src={main} alt="" />
            </PhotoView>
        </PhotoProvider>
    )
}

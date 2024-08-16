import Image from 'next/image'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'

export default function GalleryViewer({ images }: { images: string[] }) {
    console.log('Images:', images)
    return (
        <PhotoProvider>
            <div className="grid h-full w-full grid-cols-2 gap-3 md:grid-cols-5 md:gap-10">
                {images.map((image, index) => (
                    <PhotoView key={index} src={image}>
                        <div className="h-[150px] w-auto transition-all duration-300 hover:scale-125">
                            <Image
                                width={400}
                                height={400}
                                className="h-full w-full cursor-pointer object-cover object-center"
                                src={image}
                                alt={`Gallery Image ${index + 1}`}
                            />
                        </div>
                    </PhotoView>
                ))}
            </div>
        </PhotoProvider>
    )
}

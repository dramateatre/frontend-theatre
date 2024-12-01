import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import YouTube from 'react-youtube'

interface ReactVideoPlayerProps {
    data: {
        attributes: {
            video: {
                videoLinks: string[]
            }
        }
    }
}

const VideoThumbnail: React.FC<{ videoId: string; onClick: () => void }> = ({
    videoId,
    onClick,
}) => (
    <div className="relative aspect-video w-full cursor-pointer" onClick={onClick}>
        <img
            src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
            alt="Video thumbnail"
            className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
            <svg
                className="h-20 w-20 text-white opacity-80"
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
        </div>
    </div>
)

const VideoPlayer: React.FC<{ url: string }> = ({ url }) => {
    const [isPlaying, setIsPlaying] = useState(false)

    const getYouTubeId = (url: string) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
        const match = url.match(regExp)
        return match && match[2].length === 11 ? match[2] : null
    }

    const videoId = getYouTubeId(url)

    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    }

    if (!videoId) {
        return <div>Invalid YouTube URL: {url}</div>
    }

    return (
        <div className="relative aspect-video w-full overflow-hidden rounded-[4px] border border-white">
            {isPlaying ? (
                <YouTube className="h-full w-full" videoId={videoId} opts={opts} />
            ) : (
                <VideoThumbnail videoId={videoId} onClick={() => setIsPlaying(true)} />
            )}
        </div>
    )
}

const ReactVideoPlayer: React.FC<ReactVideoPlayerProps> = ({ data }) => {
    const { t } = useTranslation()

    console.log(data)
    return (
        <>
            {data?.attributes?.video?.videoLinks?.length ? (
                <div className="relative mt-10 grid w-full grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-5">
                    {data.attributes.video.videoLinks.map((url: string, index: number) => (
                        <VideoPlayer key={index} url={url} />
                    ))}
                </div>
            ) : (
                <div className="flex justify-center py-10 text-white">{t('noVideo')}</div>
            )}
        </>
    )
}

export default ReactVideoPlayer

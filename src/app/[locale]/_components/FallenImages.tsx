import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import NoImage from '@images/NoImage.jpg'
import OldTheatre from '@images/OldTheatre.jpg'
import NewTheatre from '@images/New.webp'

const FallenImages = ({ images = [OldTheatre, NoImage, NewTheatre, NoImage, NoImage] }) => {
    const imagePositions = [
        { top: '2%', left: '5%', rotate: '-5deg', scale: 0.95, zIndex: 10 },
        { top: '10%', left: '22%', rotate: '3deg', scale: 1, zIndex: 20 },
        { top: '5%', left: '42%', rotate: '-2deg', scale: 0.98, zIndex: 30 },
        { top: '12%', left: '60%', rotate: '4deg', scale: 0.97, zIndex: 25 },
        { top: '1%', left: '75%', rotate: '-3deg', scale: 0.99, zIndex: 15 },
    ]

    return (
        <div className="flex w-full flex-col py-10">
            <h1 className="mb-16 text-center text-3xl text-white">თეატრის ისტორია</h1>
            <div className="overflow-hidde relative h-80 w-full p-4 sm:h-96 md:h-auto">
                {images.slice(0, 5).map((image, index) => (
                    <motion.div
                        key={index}
                        className="absolute"
                        style={{
                            top: imagePositions[index].top,
                            left: imagePositions[index].left,
                            zIndex: imagePositions[index].zIndex,
                        }}
                        initial={{ opacity: 0, y: 50, rotate: 0, scale: 0.5 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            rotate: imagePositions[index].rotate,
                            scale: imagePositions[index].scale,
                        }}
                        transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
                        whileHover={{ scale: 1.1, zIndex: 50, transition: { duration: 0.2 } }}
                    >
                        <div className="h-32 w-44 sm:h-40 sm:w-56 md:h-52 md:w-72">
                            <Image
                                src={image}
                                alt={`Image ${index + 1}`}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default FallenImages

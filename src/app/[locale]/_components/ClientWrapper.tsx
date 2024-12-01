'use client'

import { motion } from 'framer-motion'
import Cover from './Cover'
import Poster from './Poster'
import News from './News'
import Actors from './Actors'
import FallenImages from './FallenImages'

const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
}
const slideInLeftVariants = {
    hidden: { x: -150, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 80,
            damping: 20,
            duration: 0.5,
        },
    },
}

const actorsVariants = {
    hidden: { opacity: 0, rotateX: 90 },
    visible: {
        opacity: 1,
        rotateX: 0,
        transition: { duration: 0.5, ease: 'easeOut' },
    },
}

const slideInRightVariants = {
    hidden: { x: 150, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 80,
            damping: 20,
            duration: 0.5,
        },
    },
}

export default function ClientWrapper({ posterData, newsData, creativeGroupData }: any) {
    return (
        <main className="flex min-h-screen w-full flex-col items-center justify-between gap-10 overflow-hidden bg-[#1a1b2f] pb-10">
            <motion.div
                className="w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={fadeInVariants}
            >
                <Cover />
            </motion.div>
            <motion.div
                className="w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={slideInLeftVariants}
            >
                <Poster data={posterData} />
            </motion.div>
            <motion.div
                className="w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={slideInRightVariants}
            >
                <News data={newsData} />
            </motion.div>
            <motion.div
                className="w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={actorsVariants}
            >
                <Actors data={creativeGroupData} />
            </motion.div>
            <motion.div
                className="w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={fadeInVariants}
            >
                <FallenImages />
            </motion.div>
        </main>
    )
}

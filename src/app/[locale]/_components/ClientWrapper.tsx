'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Cover from './Cover'
import Poster from './Poster'
import News from './News'
import Actors from './Actors'
import History from './History'

// Updated fadeIn with a quicker and snappier spring transition
const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }, // smooth easing
    },
}

// Slide in left with spring effect for a snappier movement
const slideInLeftVariants = {
    hidden: { x: -150, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 80,
            damping: 20,
            duration: 0.7,
        },
    },
}

const actorsVariants = {
    hidden: { opacity: 0, rotateX: 90 },
    visible: {
        opacity: 1,
        rotateX: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

// Slide in right with similar spring effect
const slideInRightVariants = {
    hidden: { x: 150, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 80,
            damping: 20,
            duration: 0.7,
        },
    },
}

export default function ClientWrapper({ posterData, newsData, creativeGroupData }: any) {
    return (
        <main className="flex min-h-screen w-full flex-col items-center justify-between overflow-hidden bg-[#0f1017] pb-10">
            {/* Cover fadeIn */}
            <motion.div
                className="w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={fadeInVariants}
            >
                <Cover />
            </motion.div>

            {/* Poster slideIn from left */}
            <motion.div
                className="w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={slideInLeftVariants}
            >
                <Poster data={posterData} />
            </motion.div>

            {/* News slideIn from right */}
            <motion.div
                className="w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={slideInRightVariants}
            >
                <News data={newsData} />
            </motion.div>

            {/* Actors slideIn from left */}
            <motion.div
                className="w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={actorsVariants}
            >
                <Actors data={creativeGroupData} />
            </motion.div>

            {/* History fadeIn */}
            <motion.div
                className="w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={fadeInVariants}
            >
                <History />
            </motion.div>
        </main>
    )
}

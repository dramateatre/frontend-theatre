'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Cover from './Cover'
import Poster from './Poster'
import News from './News'
import Actors from './Actors'
import History from './History'

const fadeInVariants = {
    hidden: { opacity: 0.5 },
    visible: { opacity: 1 },
}

const slideInLeftVariants = {
    hidden: { x: -100, opacity: 0.5 },
    visible: { x: 0, opacity: 1 },
}

const slideInRightVariants = {
    hidden: { x: 100, opacity: 0.5 },
    visible: { x: 0, opacity: 1 },
}

export default function ClientWrapper({ posterData, newsData, creativeGroupData }: any) {
    return (
        <main className="flex min-h-screen w-full flex-col items-center justify-between overflow-hidden bg-[#0f1017] pb-10">
            <motion.div
                className="w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.3 }}
                variants={fadeInVariants}
            >
                <Cover />
            </motion.div>

            <motion.div
                className="w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
                variants={slideInLeftVariants}
            >
                <Poster data={posterData} />
            </motion.div>

            <motion.div
                className="w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
                variants={slideInRightVariants}
            >
                <News data={newsData} />
            </motion.div>

            <motion.div
                className="w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
                variants={slideInLeftVariants}
            >
                <Actors data={creativeGroupData} />
            </motion.div>

            <motion.div
                className="w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
                variants={fadeInVariants}
            >
                <History />
            </motion.div>
        </main>
    )
}

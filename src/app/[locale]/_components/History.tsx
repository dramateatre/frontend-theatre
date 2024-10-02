'use client'

import Image from 'next/image'
import Old from '@images/OldTheatre.jpg'
import New from '@images/New.webp'
import { useTranslation } from 'react-i18next'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import FallenImages from './FallenImages'

export default function History() {
    const { t } = useTranslation()
    const params = useParams()
    const locale = params.locale
    return (
        <div className={`relative flex h-auto w-full py-20 md:pb-44 md:pt-10`}>
            <FallenImages />
        </div>
    )
}

'use client'

import { BlocksRenderer } from '@strapi/blocks-react-renderer'

export default function Paragraph({ content }: any) {
    return (
        <div>
            <BlocksRenderer content={content} />
        </div>
    )
}

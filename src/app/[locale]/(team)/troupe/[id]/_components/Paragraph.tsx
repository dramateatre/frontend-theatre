'use client'

import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import React, { useEffect, useState } from 'react'

export default function Paragraph({ content }: any) {
    return (
        <div>
            {' '}
            <BlocksRenderer content={content} />{' '}
        </div>
    )
}

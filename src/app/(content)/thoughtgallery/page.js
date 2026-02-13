'use client'
import React from 'react'
import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import Image from 'next/image'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
// import GameTheory from '@/app/components/GameTheory'
import Pic from '@/app/components/Pic'
import GameTheory from '@/app/components/GameTheory'

let images = [
    { src: '/GT.1.png', alt: '', width: 1500, height: 1500 },
    { src: '/GT.2.png', alt: '', width: 1500, height: 1500 },
    { src: '/GT.3.png', alt: '', width: 1500, height: 1500 },
    { src: '/GT.4.png', alt: '', width: 1500, height: 1500 },
    { src: '/GT.5.png', alt: '', width: 1500, height: 1500 },
    { src: '/GT.6.png', alt: '', width: 1500, height: 1500 },
    { src: '/GT.7.png', alt: '', width: 1500, height: 1500 },
    { src: '/GT.8.png', alt: '', width: 1500, height: 1500 },
    { src: '/GT.9.jpg', alt: '', width: 1500, height: 1500 },
]

export default function ThoughtGallery() {
  return (
    <div className='tg-container'>
        <GameTheory />
    </div>
  )
}

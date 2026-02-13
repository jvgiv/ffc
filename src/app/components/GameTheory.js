'use client'
import React from 'react'
import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import Image from 'next/image'

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

export default function GameTheory() {
  const [index, setIndex] = useState(-1);
  
      const slides = images.map((img) => ({
          src: img.src,
          alt: img.alt,
          width: img.width,
          height: img.height
      }));


  return (
      <div className='gt-container'>
      <h2 className='tg-title'>Game Theory</h2>
      <div className='mapped-pictures'>
        {images.map(function (img, idx) {
            return (
                <div
                    key={idx}
                    className='group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 gt-photo'
                    onClick={function () {
                        setIndex(idx);
                    }}
                >
                    <Image
                        src={img.src}
                        alt={img.alt}
                        width={400} // thumbnail size
                        height={300}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
                        className="w-full h-auto object-cover aspect-square group-hover:scale-105 transition-transform duration-300"
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAErgH3Xv0Z3QAAAABJRU5ErkJggg=="
                    />
                </div>
                )})}
            {/* // (image, key) => (
            // <Pic 
            // image={image.src}
            // key={key}
            // alt={image.alt}
            // />
            // ))} */}
      </div>
    
      
      {/* <h1 className='tg-title'>Director's Cut</h1> */}

    <Lightbox
        open={index >= 0}
        close={function () {
          setIndex(-1);
        }}
        slides={slides}
        index={index}
        // plugins={[Zoom]} // remove if you don't want zoom
        // carousel={{ finite: false }} // infinite scrolling (default is true)
      />
    </div>
  )
}

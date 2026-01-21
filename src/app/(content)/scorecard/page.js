import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <div className="scorecard-container">
      <div className='scbg'>
      <Image
        src="/scf9.png"
        alt="Front 9"
        width={324}
        height={810}
        />
      </div>
      <div className='scbg'>
      <Image
        src="/scb9.png"
        alt="Back 9"
        width={324}
        height={810}
        />
      </div>
    </div>
  )
}

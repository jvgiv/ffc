import React from 'react'
import Image from 'next/image'
import instagram from '../../../../public/instagram.svg'
import facebook from '../../../../public/facebook.svg'

export default function Footer() {
  return (
    <div className="footer-container">
    <a className="footer-text" href="https://www.facebook.com/farflungchange/" target="_blank" rel="noopener noreferrer">
      <Image
            src={facebook}
            alt="fb"
            width={30}
            className="footer-child"
        />
    </a>
        <a className="footer-text" href="https://www.instagram.com/p/DTETA9pgLll/" target="_blank" rel="noopener noreferrer">
        <Image
            src={instagram}
            alt="fb"
            width={30}
            className="footer-child"
        />
        </a>
        <p className="footer-child">farflungchange@1stallied.com</p>
        <p className="footer-child">85 Beach Street, Westerly, RI 02891</p>
    </div>
  )
}

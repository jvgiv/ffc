import React from 'react'
import Image from 'next/image'
import facebook from '../../../../public/facebook.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhone, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons'

export default function TempFooter() {
  return (
    <div className="tempfooter-container">
      <div className="tempheader-left">
        <div className="temp-icon-labels">
          <a href="https://www.firstfinancialadvisory.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon
          icon={faGlobe}
          />
        <span>firstfinancialadvisory.com</span>
          </a>
        </div>
        <div className="temp-icon-labels">
        <FontAwesomeIcon
          icon={faMapMarkerAlt}
          />
        <span className="">85 Beach Street, Westerly, RI 02891</span>
        </div>
        <div className="temp-icon-labels">
          <a href="tel:4015960193">
        <FontAwesomeIcon
          icon={faPhone}
          />
        <span>401-596-0193</span>
          </a>
        </div>
        <div className="temp-icon-labels">
          <a href="mailto:farflungchange@1stallied.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon
          icon={faEnvelope}
          />
        <span className="">farflungchange@1stallied.com</span>
        </a>
        </div>
      </div>
      <div className='tempheader-right'>
        <a className="tempfooter-text" href="https://www.facebook.com/farflungchange/" target="_blank" rel="noopener noreferrer">
          <Image
            src={facebook}
            alt="fb"
            width={30}
            className="text-black"
            />
        </a>
            {/* <a className="footer-text" href="https://www.instagram.com/p/DTETA9pgLll/" target="_blank" rel="noopener noreferrer">
            <Image
            src={instagram}
            alt="fb"
            width={30}
            className="footer-child"
            />
            </a> */}
            </div>
            
    </div>
  )
}

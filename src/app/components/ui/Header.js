'use client'
import React from 'react'
import Link from 'next/link'
import {  usePathname } from 'next/navigation'

export default function Header() {
    const pathName = usePathname();

  return (
    <div className="header-container">
      <div className='header-links'>
            <ul className="navList">
            <Link 
                className={`link-header ${pathName === "/" ? "activeLink" : "" }`}
                // 'link-header'
                href='/' >
                    Home
            </Link>
            <Link 
                className={`link-header ${pathName === "/menuboard" ? "activeLink" : "" }`}
                href='/menuboard'>
                Menu Board
            </Link>
            <Link 
                className={`link-header ${pathName === "/scorecard" ? "activeLink" : "" }`}
                href='/scorecard' >
                ScoreCard
            </Link>
            </ul>
        </div>
    </div>
  )
}

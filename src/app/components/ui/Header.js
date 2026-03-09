'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathName = usePathname();
  const homeSectionLinks = [
    { href: '/#problem', label: 'The Problem' },
    { href: '/#solution', label: 'The Guide' },
    { href: '/#plan', label: 'The Plan' },
    { href: '/#pricing', label: 'MenuBoard' },
    { href: '/#scorecard', label: 'ScoreCard' },
  ]

  return (
    <nav className="ffc-nav">
      <ul className="ffc-nav-links">
        <li className="ffc-nav-item ffc-nav-item-home">
          <Link
            className={`ffc-nav-link ${pathName === "/" ? "active" : "" }`}
            href="/"
          >
            HOME
          </Link>
          <ul className="ffc-home-menu" aria-label="Home section links">
            {homeSectionLinks.map((item) => (
              <li key={item.href}>
                <Link className="ffc-home-menu-link" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li className="ffc-nav-item">
          <Link
            className={`ffc-nav-link ${pathName === "/menuboard" ? "active" : "" }`}
            href="/menuboard"
          >
            MENU BOARD
          </Link>
        </li>
        <li className="ffc-nav-item">
          <Link
            className={`ffc-nav-link ${pathName === "/scorecard" ? "active" : "" }`}
            href="/scorecard"
          >
            SCORECARD
          </Link>
        </li>
        <li className="ffc-nav-item">
          <Link
            className={`ffc-nav-link ${pathName === "/thoughtgallery" ? "active" : "" }`}
            href="/thoughtgallery"
          >
            THOUGHT GALLERY
          </Link>
        </li>
        <li className="ffc-nav-item">
          <Link
            className={`ffc-nav-link ${pathName === "/about" ? "active" : "" }`}
            href="/about"
          >
            ABOUT
          </Link>
        </li>
      </ul>

      <Link className="ffc-nav-brand" href="/">
        FAR FLUNG CHANGE
      </Link>
      <a
        className="ffc-nav-cta"
        href="https://calendly.com/its-about-time"
        target="_blank"
        rel="noopener noreferrer"
      >
        PUNCH THE CLOCK
      </a>
    </nav>
  )
}

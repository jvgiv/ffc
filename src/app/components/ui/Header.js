'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const homeSectionLinks = [
    { href: '/#problem', label: 'The Problem' },
    { href: '/#solution', label: 'The Guide' },
    { href: '/#plan', label: 'The Plan' },
    { href: '/#pricing', label: 'MenuBoard' },
    { href: '/#definitions-preview', label: 'Definitions' },
    { href: '/#scorecard', label: 'ScoreCard' },
    { href: '/#cta', label: 'Punch The Clock' },
  ]

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathName])

  const handleMenuToggle = () => {
    setIsMenuOpen((current) => !current)
  }

  const handleNavClose = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className={`ffc-nav ${isMenuOpen ? 'mobile-open' : ''}`}>
      <button
        type="button"
        className={`ffc-nav-toggle ${isMenuOpen ? 'active' : ''}`}
        aria-expanded={isMenuOpen}
        aria-controls="ffc-nav-links"
        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={handleMenuToggle}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className="ffc-nav-links">
        <li className="ffc-nav-item ffc-nav-item-home">
          <Link
            className={`ffc-nav-link ${pathName === "/" ? "active" : "" }`}
            href="/"
            onClick={handleNavClose}
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
        {/* <li className="ffc-nav-item">
          <Link
            className={`ffc-nav-link ${pathName === "/menuboard" ? "active" : "" }`}
            href="/menuboard"
            onClick={handleNavClose}
          >
            MENU BOARD
          </Link>
        </li>
        <li className="ffc-nav-item">
          <Link
            className={`ffc-nav-link ${pathName === "/scorecard" ? "active" : "" }`}
            href="/scorecard"
            onClick={handleNavClose}
          >
            SCORECARD
          </Link>
        </li> */}
        <li className="ffc-nav-item">
          <Link
            className={`ffc-nav-link ${pathName === "/caddybook" ? "active" : "" }`}
            href="/caddybook"
            onClick={handleNavClose}
          >
            CADDY BOOK
          </Link>
        </li>
        <li className="ffc-nav-item">
          <Link
            className={`ffc-nav-link ${pathName === "/thoughtgallery" ? "active" : "" }`}
            href="/thoughtgallery"
            onClick={handleNavClose}
          >
            THOUGHT GALLERY
          </Link>
        </li>
        <li className="ffc-nav-item">
          <Link
            className={`ffc-nav-link ${pathName === "/definitions" ? "active" : "" }`}
            href="/definitions"
            onClick={handleNavClose}
          >
            DOGSTAR DEFINITIONS
          </Link>
        </li>
        <li className="ffc-nav-item">
          <Link
            className={`ffc-nav-link ${pathName === "/about" ? "active" : "" }`}
            href="/about"
            onClick={handleNavClose}
          >
            ABOUT
          </Link>
        </li>
      </ul>

      <div id="ffc-nav-links" className={`ffc-nav-mobile-panel ${isMenuOpen ? 'open' : ''}`}>
        <ul className="ffc-nav-mobile-links">
          <li className="ffc-nav-mobile-item">
            <Link
              className={`ffc-nav-link ${pathName === "/" ? "active" : "" }`}
              href="/"
              onClick={handleNavClose}
            >
              HOME
            </Link>
            <ul className="ffc-home-mobile-menu" aria-label="Home section links">
              {homeSectionLinks.map((item) => (
                <li key={item.href}>
                  <Link className="ffc-home-menu-link" href={item.href} onClick={handleNavClose}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          {/* <li className="ffc-nav-mobile-item">
            <Link
              className={`ffc-nav-link ${pathName === "/menuboard" ? "active" : "" }`}
              href="/menuboard"
              onClick={handleNavClose}
            >
              MENU BOARD
            </Link>
          </li>
          <li className="ffc-nav-mobile-item">
            <Link
              className={`ffc-nav-link ${pathName === "/scorecard" ? "active" : "" }`}
              href="/scorecard"
              onClick={handleNavClose}
            >
              SCORECARD
            </Link>
          </li> */}
          <li className="ffc-nav-mobile-item">
            <Link
              className={`ffc-nav-link ${pathName === "/caddybook" ? "active" : "" }`}
              href="/caddybook"
              onClick={handleNavClose}
            >
              CADDY BOOK
            </Link>
          </li>
          <li className="ffc-nav-mobile-item">
            <Link
              className={`ffc-nav-link ${pathName === "/thoughtgallery" ? "active" : "" }`}
              href="/thoughtgallery"
              onClick={handleNavClose}
            >
              THOUGHT GALLERY
            </Link>
          </li>
          <li className="ffc-nav-mobile-item">
            <Link
              className={`ffc-nav-link ${pathName === "/definitions" ? "active" : "" }`}
              href="/definitions"
              onClick={handleNavClose}
            >
              DOGSTAR DEFINITIONS
            </Link>
          </li>
          <li className="ffc-nav-mobile-item">
            <Link
              className={`ffc-nav-link ${pathName === "/about" ? "active" : "" }`}
              href="/about"
              onClick={handleNavClose}
            >
              ABOUT
            </Link>
          </li>
          <li className="ffc-nav-mobile-item">
            <Link
              className="ffc-nav-cta ffc-nav-cta-mobile"
              href="/login"
              onClick={handleNavClose}
            >
              LOG IN
            </Link>
          </li>
        </ul>
      </div>

      <Link className="ffc-nav-brand" href="/">
        FAR FLUNG CHANGE
      </Link>
      <Link
        className="ffc-nav-cta"
        href="/login"
      >
        LOG IN
      </Link>
    </nav>
  )
}

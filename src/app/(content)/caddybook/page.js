'use client'
import React from 'react'
import { useState } from 'react'
import './caddybook.css'
import CaddyBookCover from '../../components/caddybook/CaddyBookCover'
import NavBar from '@/app/components/caddybook/CaddyNavBar'
import CaddyBookTOC from '@/app/components/caddybook/CaddyBookTOC'
import SummaryPage from '@/app/components/caddybook/SummaryPage'
import ClosingPage from '@/app/components/caddybook/ClosingPage'


const PAGES = [
  { id: 'cover',     title: 'Cover',      sub: 'far flung change' },
  { id: 'toc',       title: 'The Course', sub: 'seven elements' },
  { id: 'el-1',      title: 'Position',   sub: 'where you are' },
  { id: 'el-2',      title: 'Terrain',    sub: 'what surrounds you' },
  { id: 'el-3',      title: 'Forces',     sub: "what's acting on you" },
  { id: 'el-4',      title: 'Questions',  sub: 'what matters now' },
  { id: 'el-5',      title: 'Pace',       sub: 'where tempo ties in' },
  { id: 'el-6',      title: 'Options',    sub: 'how to scan for lines' },
  { id: 'el-7',      title: 'Readiness',  sub: 'when clarity compounds' },
  { id: 'notes',     title: 'Your Notes', sub: 'summary of all elements' },
  { id: 'scorecard', title: 'Scorecard',  sub: 'orientation scorecard' },
  { id: 'closing',   title: 'Next Steps', sub: 'momentum begins here' },
]

export default function CaddyBook() {
    const [current, setCurrent] = useState(0)

    function goTo(n) {
    setCurrent(n)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const page = PAGES[current]

  return (
    <div>
        {/* <CaddyBookCover /> */}
      {/* <CaddyBookTOC /> */}
      {/* <SummaryPage /> */}
      <ClosingPage />
      <NavBar 
        pages={PAGES}
        current={current}
        onPrev={() => goTo(current - 1)}
        onNext={() => goTo(current + 1)}
      />
    </div>
  )
}

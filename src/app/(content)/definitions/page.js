import React from 'react'
import chapters from '../../../data/def.js'
import Link from 'next/link.js'

export default function Definitions() {
  return (
    <div>
      <div>
        <div className="hdr-brand">DogStar <span>Definitions</span></div>
        <div className="hdr-sub">Financial Orientation Compendium · Far Flung Change</div>
    </div>
    <div className="hdr-right">
        {/* <input className="hdr-search" id="searchInput" type="text" placeholder="Search 360 terms..." oninput="doSearch(this.value)"> */}
        {/* <a className="hdr-home" onclick="showMaster()" href="#">◎ Home</a> */}
    </div>

    <div id="view-master" class="view active">
        <h1 className="master-title">DogStar <span>Definitions</span></h1>
        <p className="master-sub">A Financial Orientation Compendium</p>
        <p className="master-tag">18 Chapters · 20 Terms · 360° · ◷ 00:00 → 59:50</p>
        {/* <div className="clock-wrap" onclick="window.location.href=FFC_URL"> */}
      {/* IMAGE HERE */}
        </div>
        <p className="master-hint">Select a chapter below &nbsp;·&nbsp; <span>or search above</span></p>

        {/* <!-- Chapter grid --> */}
        <div id="chapterGrid" style={{maxWidth: '860px', margin: '2.5rem auto 0', display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))', gap:'0.6rem'}}>
            {chapters.map((chapter) => (
                // console.log(chapter),
                <Link
                    key={chapter.id}
                    href={`/definitions/${chapter.id}`}
                >
                <span>{chapter.num}</span>
                <span>{chapter.title}</span>
                </Link>
            ))}
        </div>

        {/* <!-- FFC footer area --> */}
       
    </div>
    
  )
}

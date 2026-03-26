import React from 'react'

export default function CurrentPage({ index, page }) {
    const elementIndex = index - 2;
    
    
    if (index === 0)  return <CaddyBookCover meta={data.meta} stats={data.coverStats} />
    if (index === 1)  return <CaddyBookTOC elements={data.elements} />
    if (index >= 2 && index <= 8) return <ElementPage element={data.elements[elementIndex]} />
    if (index === 9)  return <SummaryNotes elements={data.elements} />
    if (index === 10) return <ScorecardPage scorecard={data.scorecard} />
    if (index === 11) return <ClosingPage closing={data.closing} />
}


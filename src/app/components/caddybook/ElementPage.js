import Link from 'next/link'
import '../../(content)/caddybook/caddybook.css'
import { getDefinitionHref } from '@/lib/definitions'

export default function ElementPage({ element }) {
  const { id, title, subtitle, fraction, whatThisMeans,
          consider, scorecardNum,scorecardConnections, notesPrompt } = element
  return (
    <div className="element-page">
      <div className="element-hero">
        <div className="element-big-num">{id}</div>
        <div className="element-title-block">
          <h2>{title}</h2>
          <p className="el-sub">{subtitle}</p>
        </div>
        <div className="element-fraction-badge">{fraction}</div>
      </div>
      <div className="element-body">
        <div className="el-col">
        <h3><span className="element-num-title">1</span> What this means:</h3>
          {whatThisMeans.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <div className="el-col">
          <ul className="el-consider-list">
          <h3><span className="element-num-title">2</span> Consider:</h3>
            {consider.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      </div>
      <div className="element-footer">
        <div className="conn-tags">
          <h4><span className="element-num-title">3</span> Orientation Scorecard Connections:</h4>
          {scorecardConnections.map((c, i) => (
            <Link key={i} href={getDefinitionHref(c.title)} className="conn-tag" target="_blank" rel="noopener noreferrer">
              <span className="element-def-num">{c.num}</span>
              <span>{c.title}</span>
            </Link>
          ))}
        </div>
        <div className="el-notes">
          <h4><span className="element-num-title">4</span> Your Notes:</h4>
          <textarea
            className="notes-prompt"
            placeholder={notesPrompt}
            rows={4}
          />
        </div>
      </div>
    </div>
  )
}

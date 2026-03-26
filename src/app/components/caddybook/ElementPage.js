import '../../(content)/caddybook/caddybook.css'

export default function ElementPage({ element }) {
  const { id, title, subtitle, fraction, whatThisMeans,
          consider, scorecardConnections, notesPrompt } = element
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
          {whatThisMeans.map((p, i) => <p key={i}>{p}</p>)}
        </div>
        <div className="el-col">
          <ul className="el-consider-list">
            {consider.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      </div>
      <div className="element-footer">
        <div className="conn-tags">
          {scorecardConnections.map((c, i) => (
            <span key={i} className="conn-tag">{c}</span>
          ))}
        </div>
        <div className="el-notes">
          <p className="notes-prompt">{notesPrompt}</p>
        </div>
      </div>
    </div>
  )
}
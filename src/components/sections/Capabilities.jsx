import { useState } from 'react'

function Capabilities({ items }) {
	const [activeNumber, setActiveNumber] = useState(items[0]?.number)
	const activeItem = items.find((item) => item.number === activeNumber) || items[0]

	return <section className="section-pad capabilities"><div className="shell"><div className="section-heading"><p className="eyebrow">What I bring</p><h2>Technology with a practical point of view.</h2><p>I work at the intersection of digital products, operational systems, and the people who use them.</p></div><div className="capability-stage"><div className="capability-index" aria-label="Capability sections">{items.map((item) => <button className={activeNumber === item.number ? 'is-active' : ''} type="button" key={item.number} onClick={() => setActiveNumber(item.number)}><span>{item.number}</span><strong>{item.title}</strong></button>)}</div><div className="capability-focus" aria-live="polite"><span className="number">{activeItem.number}</span><h3>{activeItem.title}</h3><p>{activeItem.description}</p><span className="capability-arrow" aria-hidden="true">↗</span></div></div></div></section>
}
export default Capabilities

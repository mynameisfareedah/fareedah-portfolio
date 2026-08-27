function ExpertiseSequence({ items }) {
	return <div className="expertise-sequence" aria-hidden="true">{items.map((item, index) => <span key={`${item}-${index}`}><b>0{index + 1}</b>{item}<i>✦</i></span>)}</div>
}

function ExpertiseStrip({ items }) {
	return <div className="expertise-strip" aria-label="Areas of expertise"><div className="expertise-marquee"><ExpertiseSequence items={items} /><ExpertiseSequence items={items} /></div></div>
}
export default ExpertiseStrip

function ExpertiseStrip({ items }) { return <div className="expertise-strip"><div className="shell expertise-list">{items.map((item, index) => <span key={item}><b>0{index + 1}</b>{item}</span>)}</div></div> }
export default ExpertiseStrip

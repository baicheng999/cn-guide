export function DetailedItineraryDay({ day, index }) {
  const detail = day.detail;
  return <article id={'day-'+(index+1)}>
    <div><span>DAY</span><strong>{String(index+1).padStart(2,'0')}</strong></div>
    <section>
      <h3>{day.title}</h3>
      {detail ? <>
        <div className="itinerary-periods">
          {['morning','afternoon','evening'].map((key,i)=><div className="itinerary-period" key={key}>
            <h4><span>{['上午','下午','晚上'][i]}</span>{detail[key].title}</h4>
            {detail[key].text.split(/\n\n/).map((paragraph,n)=><p key={n}>{paragraph}</p>)}
          </div>)}
        </div>
        <dl className="itinerary-day-practical">
          <div><dt>餐饮建议</dt><dd>{detail.meals}</dd></div>
          <div><dt>交通衔接</dt><dd>{detail.transport}</dd></div>
          <div><dt>当晚住宿</dt><dd>{detail.stay}</dd></div>
          <div><dt>游览贴士</dt><dd>{detail.tip}</dd></div>
        </dl>
      </> : <p>{day.text}</p>}
    </section>
  </article>;
}

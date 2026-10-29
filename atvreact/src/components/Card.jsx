export default function Card({ number, title, description }) {
  return (
    <article className="card">
      <div className="card-top">
        <span className="card-label">CARTÃO</span>
        <span className="card-number">{number}</span>
      </div>
      <div className="card-icon" aria-hidden="true">
        {String(number).padStart(2, '0')}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

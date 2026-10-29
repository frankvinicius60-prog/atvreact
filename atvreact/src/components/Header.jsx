export default function Header({ title, subtitle }) {
  return (
    <header className="site-header">
      <div className="header-mark" aria-hidden="true">R</div>
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </header>
  );
}

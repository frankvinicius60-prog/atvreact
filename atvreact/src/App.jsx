import Header from './components/Header.jsx';
import Card from './components/Card.jsx';

const cards = [
  { number: 1, title: 'Primeiro cartão', description: 'Este é o primeiro exemplo do componente reutilizável.' },
  { number: 2, title: 'Segundo cartão', description: 'O mesmo componente recebe outros dados por meio de props.' },
  { number: 3, title: 'Terceiro cartão', description: 'Um único componente pode criar várias instâncias na página.' },
];

export default function App() {
  return (
    <div className="app">
      <Header title="Componentes Reutilizáveis" subtitle="Vite + React • Escreva uma vez, reutilize sempre" />

      <main className="main-content">
        <section className="intro">
          <span className="eyebrow">ATIVIDADE PRÁTICA</span>
          <h2>Um componente, três cartões</h2>
          <p>
            Os três cartões abaixo são criados a partir do mesmo componente <code>Card</code>.
            Cada um recebe informações diferentes por meio de propriedades (props).
          </p>
        </section>

        <section className="cards-grid" aria-label="Cartões numerados">
          {cards.map((card) => (
            <Card
              key={card.number}
              number={card.number}
              title={card.title}
              description={card.description}
            />
          ))}
        </section>

        <p className="note">
          <span aria-hidden="true">✓</span>
          Três instâncias renderizadas usando um único componente Card.
        </p>
      </main>

      <footer className="footer">
        Projeto desenvolvido para praticar a reutilização de componentes no React.
      </footer>
    </div>
  );
}

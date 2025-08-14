import { features } from "../data";

export default function Features() {
  return (
    <section className="section fade-in">
      <div className="container">
        <h2 style={{ textAlign: "center", marginBottom: 40 }}>Features</h2>
        <div className="cards">
          {features.map((f) => (
            <article key={f.title} className="card" aria-label={f.title}>
              <div style={{ fontSize: "36px", marginBottom: "10px" }}>{f.icon}</div>
              <h3>{f.title}</h3>
              <p className="lead" style={{ marginTop: 6 }}>{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

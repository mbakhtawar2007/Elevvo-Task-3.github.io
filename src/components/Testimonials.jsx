import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section className="section fade-in">
      <div className="container">
        <h2 style={{ textAlign: "center", marginBottom: 40 }}>What Our Users Say</h2>
        <div className="cards">
          {testimonials.map((t) => (
            <blockquote key={t.author} className="card">
              <p style={{ fontStyle: "italic", fontSize: "1.05rem" }}>“{t.quote}”</p>
              <footer style={{ marginTop: 8, fontWeight: "bold" }}>— {t.author}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

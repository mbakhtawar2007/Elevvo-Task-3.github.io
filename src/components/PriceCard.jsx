export default function PriceCard({ name, price, perks, highlight }) {
  return (
    <div
      className="card fade-in"
      style={
        highlight
          ? { outline: "2px solid var(--brand)", boxShadow: "0 0 25px rgba(37, 99, 235, 0.3)" }
          : {}
      }
    >
      {highlight && <span className="badge">Popular</span>}
      <h3 style={{ marginTop: 10 }}>{name}</h3>
      <div className="price">{price}/month</div>
      <ul style={{ paddingLeft: 18, marginTop: 10 }}>
        {perks.map((p) => (
          <li key={p} style={{ marginBottom: 4 }}>{p}</li>
        ))}
      </ul>
      <div style={{ marginTop: 14 }}>
        <button className="btn">Choose {name}</button>
      </div>
    </div>
  );
}

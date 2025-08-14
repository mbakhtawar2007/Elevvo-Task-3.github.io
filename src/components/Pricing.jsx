import { plans } from "../data";
import PriceCard from "./PriceCard";

export default function Pricing() {
  return (
    <section id="pricing" className="section fade-in">
      <div className="container">
        <h2 style={{ textAlign: "center", marginBottom: 40 }}>Pricing</h2>
        <div className="cards">
          {plans.map((p) => (
            <PriceCard key={p.name} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

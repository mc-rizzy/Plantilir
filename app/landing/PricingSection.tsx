"use client";

import { useRouter } from "next/navigation";

export default function PricingSection() {
  const router = useRouter();
  const plans = [
    {
      title: "Free",
      price: "$0 / month",
      features: ["Basic connectivity", "Limited daily usage", "Community support"],
    },
    {
      title: "Pro",
      price: "$19 / month",
      features: ["Unlimited connections", "Priority support", "Advanced analytics"],
      popular: true,
    },
    {
      title: "Enterprise",
      price: "Contact us",
      features: ["Custom solutions", "Dedicated support", "Advanced integration"],
    },
  ];

  return (
    <section className="pricing">
      <h2 className="sectionTitle hoverableText header2">Pricing</h2>
      <div className="pricingGrid">
        {plans.map((plan, i) => (
          <div key={i} className={`priceCard hoverableCard ${plan.popular ? "popular" : ""}`}>
            <h3 className="hoverableText header3">{plan.title}</h3>
            <p className="hoverableText price">{plan.price}</p>
            <ul>
              {plan.features.map((f, j) => (
                <li key={j} className="hoverableText">{f}</li>
              ))}
            </ul>
            <div style={{margin: '20px'}}></div>
            <button
              className="hoverableButton"
              onClick={() => router.push("/sign")}
            >
              {plan.popular ? "Get Pro" : plan.title === "Enterprise" ? "Contact" : "Sign Up"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

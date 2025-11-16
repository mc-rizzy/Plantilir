export default function FeaturesSection() {
  const features = [
    "Seamless Connectivity",
    "Privacy First",
    "Elegant Experience"
  ];

  const featureDescriptions = [
    "Instantly reach anyone alive with minimal effort across the globe.",
    "State-of-the-art encryption keeps your connections fully private.",
    "A clean, futuristic interface designed for clarity and speed."
  ];

  return (
    <section className="features">
      <h2 className="sectionTitle hoverableText header2">Why Plantilir?</h2>
      <div className="featureGrid">
        {features.map((title, i) => (
          <div className="featureCard hoverableCard" key={i}>
            <img src={`https://picsum.photos/400/250?random=${i + 1}`} alt={title} />
            <h3 className="hoverableText header3">{title}</h3>
            <p className="hoverableText">{featureDescriptions[i]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function TestimonialsSection() {
  const testimonials = [
    { text: "Plantilir connected me with colleagues across continents effortlessly.", author: "Alex P." },
    { text: "A sleek platform that just works. Minimalistic, futuristic, and fast.", author: "Samira K." },
    { text: "The Pro plan is worth every penny. Unlimited connections are a game-changer.", author: "Jordan M." },
  ];

  return (
    <section className="testimonials">
      <h2 className="sectionTitle hoverableText header2">What Users Say</h2>
      <div className="testimonialGrid">
        {testimonials.map((t, i) => (
          <div className="testimonialCard hoverableCard" key={i}>
            <p className="hoverableText">{t.text}</p>
            <span className="hoverableText">- {t.author}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

module.exports = [
"[project]/.next-internal/server/app/landing/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/landing/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

// "use client";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// export default function LandingPage() {
//   const router = useRouter();
//   const [scrollY, setScrollY] = useState(0);
//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   return (
//     <div className="landingPage">
//       {/* Hero Section */}
//       <section
//         className="hero"
//         style={{ backgroundPositionY: `${scrollY * 0.3}px` }}
//       >
//         <div className="heroContent">
//           <h1 className="hoverableText">Plantilir</h1>
//           <p className="hoverableText">Connect to anyone alive, instantly and securely.</p>
//           <button className="hoverableButton" onClick={() => router.push("/sign")}>
//             Sign On
//           </button>
//         </div>
//         <div className="heroOverlay"></div>
//       </section>
//       {/* Features Section */}
//       <section className="features">
//         <h2 className="sectionTitle hoverableText">Why Plantilir?</h2>
//         <div className="featureGrid">
//           {["Seamless Connectivity", "Privacy First", "Elegant Experience"].map((title, i) => (
//             <div className="featureCard hoverableCard" key={i}>
//               <img src={`https://picsum.photos/400/250?random=${i + 1}`} alt={title} />
//               <h3 className="hoverableText">{title}</h3>
//               <p className="hoverableText">
//                 {title === "Seamless Connectivity"
//                   ? "Instantly reach anyone alive with minimal effort across the globe."
//                   : title === "Privacy First"
//                   ? "State-of-the-art encryption keeps your connections fully private."
//                   : "A clean, futuristic interface designed for clarity and speed."}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>
//       {/* Cover Sections with Overlayed Info and Parallax */}
//       {["Explore Connections", "Next-Gen Interface", "Global Community"].map((title, i) => (
//         <section
//           key={i}
//           className={`coverSection cover${i + 1} hoverableCard`}
//           style={{ backgroundPositionY: `${scrollY * 0.2}px` }}
//         >
//           <div className="overlayInfo hoverableCard">
//             <h2 className="hoverableText">{title}</h2>
//             <p className="hoverableText">
//               {title === "Explore Connections"
//                 ? "Discover a universe of possibilities, instantly accessible."
//                 : title === "Next-Gen Interface"
//                 ? "Experience seamless navigation with our sleek minimalistic UI."
//                 : "Join a community spanning the entire planet, in real-time."}
//             </p>
//           </div>
//         </section>
//       ))}
//       {/* Pricing Section */}
//       <section className="pricing">
//         <h2 className="sectionTitle hoverableText">Pricing</h2>
//         <div className="pricingGrid">
//           {[
//             {
//               title: "Free",
//               price: "$0 / month",
//               features: ["Basic connectivity", "Limited daily usage", "Community support"],
//             },
//             {
//               title: "Pro",
//               price: "$19 / month",
//               features: ["Unlimited connections", "Priority support", "Advanced analytics"],
//               popular: true,
//             },
//             {
//               title: "Enterprise",
//               price: "Contact us",
//               features: ["Custom solutions", "Dedicated support", "Advanced integration"],
//             },
//           ].map((plan, i) => (
//             <div
//               key={i}
//               className={`priceCard hoverableCard ${plan.popular ? "popular" : ""}`}
//             >
//               <h3 className="hoverableText">{plan.title}</h3>
//               <p className="hoverableText">{plan.price}</p>
//               <ul>
//                 {plan.features.map((f, j) => (
//                   <li key={j} className="hoverableText">{f}</li>
//                 ))}
//               </ul>
//               <button className="hoverableButton" onClick={() => router.push("/sign")}>
//                 {plan.popular ? "Get Pro" : plan.title === "Enterprise" ? "Contact" : "Sign Up"}
//               </button>
//             </div>
//           ))}
//         </div>
//       </section>
//       {/* Testimonials Section */}
//       <section className="testimonials">
//         <h2 className="sectionTitle hoverableText">What Users Say</h2>
//         <div className="testimonialGrid">
//           {[
//             { text: `"Plantilir connected me with colleagues across continents effortlessly."`, author: "Alex P." },
//             { text: `"A sleek platform that just works. Minimalistic, futuristic, and fast."`, author: "Samira K." },
//             { text: `"The Pro plan is worth every penny. Unlimited connections are a game-changer."`, author: "Jordan M." },
//           ].map((t, i) => (
//             <div className="testimonialCard hoverableCard" key={i}>
//               <p className="hoverableText">{t.text}</p>
//               <span className="hoverableText">- {t.author}</span>
//             </div>
//           ))}
//         </div>
//       </section>
//       {/* CTA Footer */}
//       <section className="cta hoverableCard">
//         <p className="hoverableText">Ready to connect with the world?</p>
//         <button className="hoverableButton" onClick={() => router.push("/sign")}>
//           Sign On
//         </button>
//       </section>
//       <style jsx>{`
//         .landingPage {
//           font-family: "Inter", sans-serif;
//           color: #f0f0f0;
//           background: linear-gradient(180deg, #0a0a0a, #1a1a1a);
//           scroll-behavior: smooth;
//         }
//         /* Hoverable elements */
//         .hoverableCard:hover {
//           transform: translateY(-6px) scale(1.02);
//           box-shadow: 0 0 40px rgba(0, 255, 255, 0.35);
//         }
//         .hoverableButton:hover {
//           background: #00ffff1a;
//           transform: scale(1.08);
//         }
//         .hoverableText:hover {
//           color: #00ffff;
//           text-shadow: 0 0 8px #00ffff;
//           cursor: default;
//         }
//         /* Hero */
//         .hero {
//           position: relative;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           height: 100vh;
//           text-align: center;
//           overflow: hidden;
//           background-size: cover;
//           background-repeat: no-repeat;
//         }
//         .heroContent {
//           z-index: 2;
//           max-width: 800px;
//           padding: 0 20px;
//         }
//         .heroOverlay {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(0, 255, 255, 0.05));
//           animation: pulse 8s ease-in-out infinite;
//           z-index: 1;
//         }
//         @keyframes pulse {
//           0%, 100% { transform: scale(1); opacity: 0.1; }
//           50% { transform: scale(1.05); opacity: 0.15; }
//         }
//         .heroContent h1 {
//           font-size: 4rem;
//           font-weight: 700;
//           letter-spacing: 2px;
//           margin-bottom: 16px;
//           color: #00ffff;
//         }
//         .heroContent p {
//           font-size: 1.5rem;
//           margin-bottom: 32px;
//           color: #c0f7ff;
//         }
//         .heroContent button {
//           font-size: 1.25rem;
//           padding: 14px 48px;
//           border: 2px solid #00ffff;
//           border-radius: 12px;
//           background: transparent;
//           color: #00ffff;
//           cursor: pointer;
//           transition: all 0.3s ease;
//         }
//         /* Sections */
//         section {
//           position: relative;
//           width: 100%;
//         }
//         /* Feature Grid */
//         .featureGrid,
//         .pricingGrid,
//         .testimonialGrid {
//           display: flex;
//           flex-wrap: wrap;
//           justify-content: center;
//           gap: 32px;
//         }
//         /* Feature / Price / Testimonial Cards */
//         .featureCard,
//         .priceCard,
//         .testimonialCard {
//           flex: 1 1 280px;
//           max-width: 320px;
//           text-align: center;
//           padding: 24px;
//           border-radius: 16px;
//           background: rgba(0, 255, 255, 0.05);
//           backdrop-filter: blur(8px);
//           transition: all 0.3s ease;
//         }
//         .featureCard img {
//           width: 100%;
//           height: 150px;
//           object-fit: cover;
//           border-radius: 12px;
//           margin-bottom: 12px;
//         }
//         .priceCard.popular {
//           border: 2px solid #00ffff;
//         }
//         /* Overlay Info */
//         .coverSection {
//           position: relative;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           height: 60vh;
//           text-align: center;
//           overflow: hidden;
//           padding: 0 20px;
//           background-size: cover;
//           background-repeat: no-repeat;
//         }
//         .overlayInfo {
//           position: relative;
//           z-index: 2;
//           max-width: 600px;
//           background: rgba(0, 255, 255, 0.05);
//           backdrop-filter: blur(8px);
//           padding: 40px 24px;
//           border-radius: 16px;
//           animation: floatOverlay 6s ease-in-out infinite alternate;
//         }
//         @keyframes floatOverlay {
//           0% { transform: translateY(0px); }
//           100% { transform: translateY(-10px); }
//         }
//         .cover1 { background-image: url('https://picsum.photos/1200/600?random=10'); }
//         .cover2 { background-image: url('https://picsum.photos/1200/600?random=11'); }
//         .cover3 { background-image: url('https://picsum.photos/1200/600?random=12'); }
//         /* Responsive adjustments */
//         @media (max-width: 768px) {
//           .heroContent h1 { font-size: 3rem; }
//           .heroContent p { font-size: 1.25rem; }
//           .featureCard, .priceCard, .testimonialCard, .overlayInfo {
//             flex: 1 1 100%;
//             max-width: 100%;
//           }
//           .coverSection { height: auto; padding: 60px 20px; }
//         }
//       `}</style>
//     </div>
//   );
// }
}),
"[project]/app/landing/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/landing/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ded7b434._.js.map
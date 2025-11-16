"use client";

import { useRouter } from "next/navigation";

export default function CTASection() {
  const router = useRouter();

  return (
    <section className="cta hoverableCard">
      <p className="hoverableText header2">Ready to connect with the world?</p>
      <div className="heroContent">
        <button className="hoverableButton" onClick={() => window.location.href='./sign'}>
          Sign On
        </button>
      </div>
      
    </section>
  );
}

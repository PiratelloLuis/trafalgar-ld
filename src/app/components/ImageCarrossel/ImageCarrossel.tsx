"use client";

import Image from "next/image";
import React from "react";

// Static data belongs outside the component so it does not recreate on every render
const cards = [
  {
    image: "https://unsplash.com",
    title: "Card 1",
    description: "Info which directs to the other page.",
  },
  {
    image: "https://unsplash.com",
    title: "Card 2",
    description: "Info which directs to the other page.",
  },
];

export default function ImageCarrossel() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length,
    );
  };

  React.useEffect(() => {
    if (currentIndex > cards.length - 1) {
      console.log(currentIndex);
      setCurrentIndex(0);
      console.log("hi");
    }
  }, [currentIndex]);

  return (
    <div className="page-container">
      <section className="carrossel-section">
        <div
          className="carrossel-hero-container"
          style={{ position: "relative", width: 1120, height: 425 }}
        >
          <Image
            src="/rectangle.svg"
            width={1120}
            height={425}
            alt="Rectangle carrossel"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />

          <div
            className="carrossel-overlay-content"
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 className="carrossel-title">What our customers are saying</h1>
            <div className="underline">____</div>

            <section className="customer-section">
              <div className="customer-card">
                <h2>{cards[currentIndex].title}</h2>
                <p>{cards[currentIndex].description}</p>
              </div>
            </section>
          </div>
        </div>

        <div className="carrossel-controls">
          <button onClick={handlePrev} aria-label="Previous">
            Prev
          </button>
          <button onClick={handleNext} aria-label="Next">
            Next
          </button>
        </div>
      </section>
    </div>
  );
}

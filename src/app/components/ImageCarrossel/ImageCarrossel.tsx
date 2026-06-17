"use client";

import Image from "next/image";
import React from "react";

type Card = {
  currentIndex: number;
  image: string;
  title: string;
  description: string;
};

const cards: Card[] = [
  {
    currentIndex: 0,
    image: "/rectangle.svg",
    title: "Card 1",
    description: "Info which directs to the other page.",
  },
  {
    currentIndex: 1,
    image: "/rectangle.svg",
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
      setCurrentIndex(0);
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
            src={cards[currentIndex].image}
            width={1120}
            height={425}
            alt={`Rectangle carrossel ${currentIndex + 1}`}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />

          <div className="carrossel-overlay-content">
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

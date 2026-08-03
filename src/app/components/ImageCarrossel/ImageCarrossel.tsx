"use client";
import Image from "next/image";
import React from "react";

type Card = {
  avatar: string;
  name: string;
  role: string;
  description: string;
};

const cards: Card[] = [
  {
    avatar: "/edward.jpg",
    name: "Edward Newgate",
    role: "Founder Circle",
    description:
      "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
  },
  {
    avatar: "/gustavo.png",
    name: "Gustavo Coutinho",
    role: "Customer",
    description: "Thats the best website that I ever seen",
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

  const currentCard = cards[currentIndex];

  return (
    <div className="page-container">
      <section className="carrossel-section">
        <div className="carrossel-hero-container">
          <div className="carrossel-overlay-content">
            <h1 className="carrossel-title">What our customer are saying</h1>
            <div
              className="carrossel-underline modern-underline modern-underline--centered"
              aria-hidden="true"
            />

            <div className="carrossel-customer">
              <div className="carrossel-avatar">
                <Image
                  src={currentCard.avatar}
                  width={200}
                  height={200}
                  alt={currentCard.name}
                />
              </div>

              <div className="carrossel-info">
                <h2 className="carrossel-customer-name">{currentCard.name}</h2>
                <p className="carrossel-customer-role">{currentCard.role}</p>
              </div>

              <p className="carrossel-quote">"{currentCard.description}"</p>
            </div>
          </div>
        </div>

        <div className="carrossel-nav-row">
          <button
            type="button"
            className="carrossel-nav carrossel-nav--prev"
            onClick={handlePrev}
            aria-label="Previous"
          >
            <Image
              src="/arrow.svg"
              width={15}
              height={9}
              alt=""
              className="carrossel-nav-icon carrossel-nav-icon--prev"
            />
          </button>

          <div className="carrossel-dots">
            {cards.map((_, index) => (
              <span
                key={index}
                className={`carrossel-dot ${
                  index === currentIndex ? "carrossel-dot--active" : ""
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            className="carrossel-nav carrossel-nav--next"
            onClick={handleNext}
            aria-label="Next"
          >
            <Image
              src="/arrow.svg"
              width={15}
              height={9}
              alt=""
              className="carrossel-nav-icon"
            />
          </button>
        </div>
      </section>
    </div>
  );
}

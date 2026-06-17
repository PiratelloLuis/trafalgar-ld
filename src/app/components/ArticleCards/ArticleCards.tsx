import Image from "next/image";
import "../ArticleCards/ArticleCards.css";

interface CardProps {
  image: string;
  title: string;
  desc: string;
  button: string;
  icon: string;
}

export default function ArticleCards({
  image,
  title,
  desc,
  button,
  icon,
}: CardProps) {
  return (
    <div>
      <div className="card-container">
        <section className="image-section">
          <Image
            className="card-image"
            src={image}
            width={350}
            height={520}
            alt="Card Icon"
          />
        </section>
        <h2 className="card-title">{title}</h2>
        <p className="card-paragraph">{desc}</p>
        <div className="button-div">
          <button>{button}</button>
          <Image
          src={icon}
          width={15}
          height={15}
          alt="Icon"
          />
        </div>
      </div>
    </div>
  );
}

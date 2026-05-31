import Image from "next/image";

interface CardProps {
  icon: string;
  title: string;
  desc: string;
}

export default function ServicesCard({ icon, title, desc }: CardProps) {
  return (
    <div className="CardContainer">
      <section className="ImageSection">
        <Image
          className="CardIcon"
          src={icon}
          width={90}
          height={90}
          alt="Card Icon"
        />
      </section>
      <h2 className="CardTitle">{title}</h2>
      <p className="CardParagraph">{desc}</p>
    </div>
  );
}

import ArticleCards from "../ArticleCards/ArticleCards";
export default function LatestArticles() {
  return (
    <div className="page-container">
      <section className="latest-article">
        <section className="text-section">
          <h1 className="section-text-title">Check out our latest article</h1>
          <div className="latest-underline modern-underline modern-underline--centered" aria-hidden="true" />
        </section>
        <section className="card-section">
          <ArticleCards
            image="/disease.png"
            title="Disease detection, check 
up in the laboratory"
            desc="In this case, the role
             of the health laboratory is very important to do
            a disease detection..."
            button="Read more"
            icon="arrow.svg"
          />{" "}
          <ArticleCards
            image="/herbal.png"
            title="Herbal medicines that are 
safe for consumption"
            desc="Herbal medicine is very widely used at this time because of its very good for your health..."
            button="Read more"
            icon="arrow.svg"
          />{" "}
          <ArticleCards
            image="/skincare.png"
            title="Natural care for healthy 
face skin"
            desc="A healthy lifestyle should start from now and also for your skin health.
            There are some..."
            button="Read more"
            icon="arrow.svg"
          />
        </section>
        <button className="final-section-button">View all</button>
      </section>
    </div>
  );
}

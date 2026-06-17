import ArticleCards from "../ArticleCards/ArticleCards";
export default function LatestArticles() {
  return (
    <div className="page-container">
      <section className="latest-article">
        <section className="text-section">
          <h1 className="section-text-title">Check out our latest article</h1>
          <div className="latest-underline">________</div>
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
            icon="file.svg"
          />{" "}
          <ArticleCards
            image="globe.svg"
            title="Disease detection, check 
up in the laboratory"
            desc="In this case, the role
             of the health laboratory is very important to do
            a disease detection..."
            button="Read more"
            icon="file.svg"
          />{" "}
          <ArticleCards
            image="globe.svg"
            title="Disease detection, check 
up in the laboratory"
            desc="In this case, the role
             of the health laboratory is very important to do
            a disease detection..."
            button="Read more"
            icon="file.svg"
          />
        </section>
        <button className="final-section-button">View all</button>
      </section>
    </div>
  );
}

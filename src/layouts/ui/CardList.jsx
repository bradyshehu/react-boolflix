import Card from "./Card";

export default function CardList({ products }) {
  return (
    <section
      className="d-flex flex-wrap g-4 justify-content-between"
      id="product-section"
    >
      {products.map((product) => {
        return <Card key={product.id} product={product} />;
      })}
    </section>
  );
}

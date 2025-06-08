import Card from "./Card";

export default function CardList({ products }) {
  return (
    <section className="d-flex flex-wrap justify-content-between">
      {products.map((product) => {
        return <Card key={product.id} product={product} />;
      })}
    </section>
  );
}

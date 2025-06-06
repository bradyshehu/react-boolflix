import Card from "./Card";

export default function CardList({ products }) {
  return (
    <div className="container">
      <div className="row g-4">
        {products.map((product) => {
          return <Card key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}

export default function Card({ product }) {
  return (
    <div className="col-4" key={product.id}>
      <div className="card">
        <ul>
          <li>{product.title}</li>
          <li>{product.ogTitle}</li>
          <li>{product.ogLanguage}</li>
          <li>{product.rating}</li>
        </ul>
      </div>
    </div>
  );
}

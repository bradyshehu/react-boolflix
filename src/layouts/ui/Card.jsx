import StarRating from "./StarRating";

export default function Card({ product }) {
  return (
    <div className="product-card">
      <img src={product.poster} alt={`${product.ogTitle}`} />
      <div className="product-on-hover">
        <span>
          <b>Titolo: </b>
          {product.title}
        </span>
        <br />
        <span>
          <b>Titolo Originale: </b>
          {product.ogTitle}
        </span>
        <br />
        <span>
          <b>Voto: </b>
          <StarRating rating={product.rating} />
        </span>
        <br />
        <span>
          <b>Overview: </b>
          {product.overview}
        </span>
        <br />
      </div>
    </div>
  );
}

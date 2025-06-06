// import { fontAwesome } from "fontawesome";
// import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
// import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

export default function Card({ product }) {
  // const finalRating = Math.ceil(product.rating);

  // for (let i; i < 5; i++) {
  //   if (i <= finalRating) {
  //   } else {
  //   }
  // }

  return (
    <div className="col-4" key={product.id}>
      <div className="card">
        <ul>
          <li>{product.title}</li>
          <li>{product.ogTitle}</li>
          <li>{product.ogLanguage}</li>
          <li>{product.rating}</li>
          <li>
            <img src={product.poster} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
}

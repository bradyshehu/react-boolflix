import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

export default function StarRating({ rating }) {
  const ratingTo5 = Math.ceil(rating / 2);
  console.log(ratingTo5);
  const maxStars = 5;
  const stars = [];

  for (let i = 0; i < maxStars; i++) {
    if (ratingTo5 >= i + 1) {
      stars.push(<FontAwesomeIcon icon={solidStar} />);
    } else {
      stars.push(<FontAwesomeIcon icon={regularStar} />);
    }
  }

  return <div>{stars}</div>;
}

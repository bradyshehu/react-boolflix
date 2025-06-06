import { useMovies } from "../../contexts/SearchContext";

export default function CardList() {
  const movies = useMovies();
  return console.log(movies);
  // <div className="container">
  //   <div className="row">{}</div>
  // </div>
}

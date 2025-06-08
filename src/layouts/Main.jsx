import CardList from "./ui/CardList";
import { useSearch } from "../contexts/SearchContext";

export default function Main() {
  const { movies, series } = useSearch();

  return (
    <main>
      <div className="container">
        <h3>Film</h3>
        <CardList products={movies} />
        <h3>Serie TV</h3>
        <CardList products={series} />
      </div>
    </main>
  );
}

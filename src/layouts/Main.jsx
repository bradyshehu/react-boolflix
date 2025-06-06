import CardList from "./ui/CardList";
import { useSearch } from "../contexts/SearchContext";

export default function Main() {
  const { movies, series } = useSearch();

  return (
    <main>
      <CardList products={movies} />
      <hr></hr>
      <CardList products={series} />
    </main>
  );
}

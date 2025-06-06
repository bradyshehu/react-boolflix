import CardList from "./ui/CardList";
import { useSearch } from "../contexts/SearchContext";

export default function Main() {
  const { movies } = useSearch();

  return (
    <main>
      <CardList products={movies} />
      {/* <CardList /> */}
    </main>
  );
}

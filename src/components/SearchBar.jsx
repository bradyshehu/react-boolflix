import { useState } from "react";
import { useSearch } from "../contexts/SearchContext";

export default function SearchBar() {
  const [query, setQuery] = useState();
  const { search } = useSearch();

  function handleSubmit(e) {
    e.preventDefault();
    search(query);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter movie..."
        />

        <button className="btn btn-primary">cerca</button>
      </form>
    </div>
  );
}

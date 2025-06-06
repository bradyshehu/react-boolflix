import { useState } from "react";
import { useSearch } from "../contexts/SearchContext";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const { search } = useSearch();

  function handleChange(e) {
    setQuery(e.target.value);
  }
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
          onChange={handleChange}
          placeholder="Enter movie..."
        />
      </form>
    </div>
  );
}

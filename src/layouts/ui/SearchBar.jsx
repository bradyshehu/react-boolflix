import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function SearchBar() {
  const navigate = useNavigate();
  const [query, setQuerySrc] = useState("");

  function handleSubmit() {
    e.preventDefault();
    navigate(`/${query}`);
    setQuerySrc("");
  }

  return (
    <div>
      <form>
        <input
          type="text"
          className="form-control mb-3"
          value={query}
          onChange={(e) => setQuerySrc(e.target.value)}
          placeholder="Enter movie..."
        />

        <button className="btn btn-primary" onClick={handleSubmit}>
          cerca
        </button>
      </form>
    </div>
  );
}

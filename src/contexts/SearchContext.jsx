import { createContext, useContext, useState } from "react";
import axios from "axios";
// URL INFO

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const language = import.meta.env.VITE_APP_LANG;
// console.log(language);

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  const search = (query) => {
    const allParams = {
      api_key: apiKey,
      query,
      language: language,
    };

    const params = new URLSearchParams(allParams).toString();

    axios.get(`${apiUrl}movie?${params}`).then((res) => {
      const result = res.data.results.map((movie) => ({
        id: movie.id,
        title: movie.title,
        ogTitle: movie.original_title,
        ogLanguage: movie.original_language,
        rating: movie.vote_average,
      }));
      setMovies(result);
    });
  };

  const searched = {
    movies,
    search,
  };

  return (
    <SearchContext.Provider value={searched}>{children}</SearchContext.Provider>
  );
};

const useSearch = () => {
  const context = useContext(SearchContext);
  return context;
};

export { SearchProvider, useSearch };

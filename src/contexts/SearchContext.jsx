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
  const [series, setSeries] = useState([]);

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
        overview: movie.overview,

        poster: `http://image.tmdb.org/t/p/w342/${movie.poster_path}`,
      }));
      setMovies(result);
    });

    axios.get(`${apiUrl}tv?${params}`).then((res) => {
      const result = res.data.results.map((serie) => ({
        id: serie.id,
        title: serie.name,
        ogTitle: serie.original_name,
        ogLanguage: serie.original_language,
        rating: serie.vote_average,
        overview: serie.overview,
        poster: `http://image.tmdb.org/t/p/w342/${serie.poster_path}`,
      }));
      setSeries(result);
    });
  };

  const searched = {
    movies,
    series,
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

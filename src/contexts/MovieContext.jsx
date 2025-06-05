import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// URL INFO

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const MovieContext = createContext();

function MovieProvider({ children }) {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);

  const foundMovies = function () {
    axios.get(`${apiUrl}movie?api_key=${apiKey}&query=${query}`).then((res) => {
      setMovies(res);
    });
  };

  console.log(typeof query);

  useEffect(foundMovies, []);

  return (
    <MovieContext.Provider value={movies}>{children}</MovieContext.Provider>
  );
}

function useMovies() {
  const context = useContext(MovieContext);
  return context;
}

export { MovieProvider, useMovies };

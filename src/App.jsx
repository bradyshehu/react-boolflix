import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";
import SearchBar from "./layouts/ui/SearchBar";
// dopo
import CardList from "./layouts/ui/CardList";
import Card from "./components/Card";

export default function App() {
  return (
    <MovieProvider>
      <BrowserRouter>
        <Routes path="">
          <Route element={<SearchBar />}>
            <Route path=":query" element={<CardList />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </MovieProvider>
  );
}

import { SearchProvider } from "./contexts/SearchContext";
import Header from "./layouts/Header";
import Main from "./layouts/Main";
// import SearchBar from "./components/SearchBar";
// // dopo
// import CardList from "./layouts/ui/CardList";
// import Card from "./layouts/ui/Card";

export default function App() {
  return (
    <SearchProvider>
      <Header />
      <Main />
    </SearchProvider>
  );
}

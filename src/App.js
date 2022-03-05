import { Route, Routes } from "react-router";
import './App.css';
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AllBeers from './pages/AllBeers';
import SingleBeer from "./pages/SingleBeer";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeers />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        <Route path="/beers/:beerId" element={<SingleBeer />} />
        <Route path="/new-beer" element={<NewBeer />} />
      </Routes>
    </div>
  );
}

export default App;

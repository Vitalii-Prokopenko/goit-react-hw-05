import { Routes, Route } from "react-router-dom";

import "./App.css";

// Pages
import HomePage from "./pages/homepage/HomePage";
import MoviesPage from "./pages/moviespage/MoviesPage";
import MovieDetailsPage from "./pages/moviedetailspage/MovieDetailsPage";
import NotFoundPage from "./pages/notfoundpage/NotFoundPage";
// Components
import Navigation from "./components/navigation/Navigation";
import MovieCast from "./components/moviecast/MovieCast";
import MovieReviews from "./components/moviereviews/MovieReviews";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="credits" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;

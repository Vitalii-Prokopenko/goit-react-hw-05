import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// Styles
import "./App.css";

// Pages
const HomePage = lazy(() => import("./pages/homepage/HomePage"));
const MoviesPage = lazy(() => import("./pages/moviespage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./pages/moviedetailspage/MovieDetailsPage")
);
const NotFoundPage = lazy(() => import("./pages/notfoundpage/NotFoundPage"));

// Components
const MovieCast = lazy(() => import("./components/moviecast/MovieCast"));
const MovieReviews = lazy(() =>
  import("./components/moviereviews/MovieReviews")
);
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="credits" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

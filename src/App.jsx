import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { fetchTrendingMovies } from "./api/movies-api";
// Pages
import HomePage from "./pages/homepage/HomePage";
import MoviesPage from "./pages/moviespage/MobiesPage";
import MovieDetailsPage from "./pages/moviedetailspage/MovieDetailsPage";
import NotFoundPage from "./pages/notfoundpage/NotFoundPage";
// Components
import Navigation from "./components/navigation/Navigation";
import MovieList from "./components/movielist/MovieList";

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getTrendingMovies() {
      try {
        const data = await fetchTrendingMovies();
        console.log(data);
        setMovies(data);
      } catch (error) {
        console.error(error);
      } finally {
        console.log("fetch is done");
      }
    }
    getTrendingMovies();
  }, []);

  return (
    <>
      <Navigation />
      {/* {movies.length > 0 && <MovieList moviesToShow={movies} />} */}

      <Routes>
        <Route path="/" element={<HomePage moviesToShow={movies}/>} />
        <Route path="/movies" element={<MoviesPage moviesToShow={movies}/>} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

     
    </>
  );
}

export default App;

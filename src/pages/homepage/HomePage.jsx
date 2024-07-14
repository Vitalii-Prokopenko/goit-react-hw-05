import { useState, useEffect } from "react";
import MovieList from "../../components/movielist/MovieList";
import { fetchTrendingMovies } from "../../api/movies-api";
import css from "./homepage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getTrendingMovies() {
      try {
        const data = await fetchTrendingMovies();
        // console.log(data);
        setMovies(data);
      } catch (error) {
        // console.error(error);
      } finally {
        // console.log("fetch is done");
      }
    }
    getTrendingMovies();
  }, []);

  return (
    <section className={css.homePageSection}>
      <h1 className={css.homePageTitle}>Trending today</h1>
      {movies.length > 0 && <MovieList moviesToList={movies} />}
    </section>
  );
};

export default HomePage;

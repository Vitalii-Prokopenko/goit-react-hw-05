import {useState, useEffect} from 'react';
import MovieList from "../../components/movielist/MovieList";
import { fetchTrendingMovies } from "../../api/movies-api";

const MoviesPage = () => {
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

  return <MovieList moviesToList={movies}/>;
};

export default MoviesPage;

import { useState, useEffect } from "react";
import SearchBar from "../../components/searchbar/SearchBar";
import MovieList from "../../components/movielist/MovieList";
import { fetchMoviesByTag } from "../../api/moviesbytag-api";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [tag, setTag] = useState("");

  const handleSearch = async (newTag) => {
    setTag(newTag);
  };

  useEffect(() => {
    if (tag === "") {
      return;
    }

    async function getMoviesByTag() {
      try {
        const data = await fetchMoviesByTag(tag);
        setMovies(data);
      } catch (error) {
        console.log(error);
      } finally {
        console.log("movie by tag fetch is done");
      }
    }
    getMoviesByTag();
  }, [tag]);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {movies.length > 0 && (
        <MovieList moviesToList={movies} location={"/movies"} />
      )}
    </>
  );
};

export default MoviesPage;

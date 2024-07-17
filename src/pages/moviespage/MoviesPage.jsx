import { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import SearchBar from "../../components/searchbar/SearchBar";
import MovieList from "../../components/movielist/MovieList";
import { fetchMoviesByTag } from "../../api/moviesbytag-api";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]); 
  const [searchParams, setSearchParams] = useSearchParams();
  const tag = searchParams.get("tag") ?? "";  

  const changeTag = (newTag) => {
    searchParams.set("tag", newTag);
    setSearchParams(searchParams);
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
      <SearchBar onSearch={changeTag} />
      {movies.length > 0 && <MovieList moviesToList={movies} />}
    </>
  );
};

export default MoviesPage;

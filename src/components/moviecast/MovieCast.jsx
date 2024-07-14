import MovieCastInfo from "../moviecastinfo/MovieCastInfo";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../api/moviecast-api";

const MovieCast = () => {
  const { movieId } = useParams();

  const [movieCast, setMovieCast] = useState(null);

  useEffect(() => {
    async function getMovieCast() {
      try {
        const data = await fetchMovieCast(movieId);
        console.log(data);
        setMovieCast(data);
      } catch (error) {
        console.error(error);
      } finally {
        console.log("fetch is done cast");
      }
    }
    getMovieCast();
  }, [movieId]);

  return <>{movieCast && <MovieCastInfo movieCastDetails={movieCast} />}</>;
};

export default MovieCast;

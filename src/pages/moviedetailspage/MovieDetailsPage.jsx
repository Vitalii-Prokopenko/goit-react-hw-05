import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../api/moviedetails-api";
import MovieInfo from "../../components/movieinfo/MovieInfo";

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const data = await fetchMovieDetails(movieId);       
        setMovieDetails(data);
      } catch (error) {
        console.error(error);
      } finally {
        console.log("movie details fetch is done");
      }
    }
    getMovieDetails();
  }, [movieId]);

  return <>{movieDetails && <MovieInfo movieDetails={movieDetails} />}</>;
};

export default MovieDetailsPage;

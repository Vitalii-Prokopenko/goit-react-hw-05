import MovieReviewsInfo from "../moviereviewsinfo/MovieReviewsInfo";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../api/moviereviews-api";

const MovieReviews = () => {
  const { movieId } = useParams();

  const [movieReviews, setMovieReviews] = useState(null);

  useEffect(() => {
    async function getMovieReviews() {
      try {
        const data = await fetchMovieReviews(movieId);
        console.log(data);
        setMovieReviews(data);
      } catch (error) {
        console.error(error);
      } finally {
        console.log("fetch is done reviews");
      }
    }
    getMovieReviews();
  }, [movieId]);

  return <>{movieReviews && <MovieReviewsInfo movieReviewsDetails={movieReviews} />}</>;
};

export default MovieReviews;
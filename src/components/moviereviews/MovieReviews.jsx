import MovieReviewsInfo from "../moviereviewsinfo/MovieReviewsInfo";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../api/moviereviews-api";
import css from "./moviereviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();

  const [movieReviews, setMovieReviews] = useState(null);

  useEffect(() => {
    async function getMovieReviews() {
      try {
        const data = await fetchMovieReviews(movieId);       
        setMovieReviews(data);
      } catch (error) {
        console.error(error);
      } finally {
        console.log("reviews fetch is done");
      }
    }
    getMovieReviews();
  }, [movieId]);

  return (
    <>
      {movieReviews ? (
        <MovieReviewsInfo movieReviewsDetails={movieReviews} />
      ) : (
        <p className={css.notification}>We don't have any reviews for this movie</p>
      )}
    </>
  );
};

export default MovieReviews;

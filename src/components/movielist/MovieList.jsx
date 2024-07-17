import { Link, useLocation } from "react-router-dom";
import css from "./movielist.module.css";

const MovieList = ({ moviesToList }) => {  
  const location = useLocation();
  
  return (
    <ul className={css.movieList}>
      {moviesToList.map((movie) => {
        return (
          <li key={movie.id} className={css.movieItem}>
            <Link to={`/movies/${movie.id}`} className={css.movieLink} state={location}>
              {movie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;

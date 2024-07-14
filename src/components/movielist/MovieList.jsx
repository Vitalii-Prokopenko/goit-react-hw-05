import { Link } from "react-router-dom";
import css from "./movielist.module.css";

const MovieList = ({ moviesToList }) => {  
  
  return (
    <ul className={css.movieList}>
      {moviesToList.map((movie) => {
        return (
          <li key={movie.id} className={css.movieItem}>
            <Link to={`/movies/${movie.id}`} className={css.movieLink} >
              {movie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;

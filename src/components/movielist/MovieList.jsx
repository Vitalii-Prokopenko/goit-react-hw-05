import { NavLink } from "react-router-dom";
import css from "./movielist.module.css";

const MovieList = ({ moviesToShow }) => {
  console.log(moviesToShow);
  return (
    <ul className={css.movieList}>
      {moviesToShow.map((movie) => {
        return (
          <li key={movie.id} className={css.movieItem}>
            <NavLink to="/movies/:movieId" className={css.movieLink}>
              {movie.title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;

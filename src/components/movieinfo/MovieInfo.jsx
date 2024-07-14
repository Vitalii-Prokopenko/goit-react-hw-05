import { Link, Outlet } from "react-router-dom";
import { TbArrowLeft } from "react-icons/tb";
import css from "./movieinfo.module.css";

const MovieInfo = ({ movieDetails }) => {
  const {
    title,
    release_date,
    vote_average,
    overview,
    genres,
    poster_path,
    id,
  } = movieDetails;
  const releaseYear = release_date.slice(0, 4);
  const userScore = Math.round(vote_average * 10);
  const imgPath = "https://image.tmdb.org/t/p/w300/" + poster_path;

  return (
    <section className={css.movieInfo}>
      <button type="button" className={css.goBackBtn}>
        <TbArrowLeft style={{ marginRight: "10px" }} /> Go back
      </button>
      <div className={css.movieWrap}>
        <div className={css.posterInfoWrap}>
          <img src={imgPath} className={css.moviePoster} />
          <div className={css.infoWrap}>
            <h2 className={css.movieTitle}>
              {title} ({releaseYear})
            </h2>
            <p className={css.movieUserScore}>User Score: {userScore}%</p>
            <h3 className={css.infoTitle}>Overview</h3>
            <p className={css.movieOverview}>{overview}</p>
            <h3 className={css.infoTitle}>Genres</h3>
            <ul className={css.movieGenresList}>
              {genres.map((genre) => {
                return (
                  <li key={genre.id} className={css.movieGenresItem}>
                    <p className={css.movieGenresName}>{genre.name}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className={css.addInfoWrap}>
          <h4 className={css.movieAddInfoTitle}>Additional information</h4>
          <Link to={`credits`}>Cast</Link>
          <Link to={`reviews`}>Reviews</Link>
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default MovieInfo;

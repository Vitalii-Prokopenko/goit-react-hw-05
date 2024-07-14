import css from "./moviecastinfo.module.css";

const MovieCastInfo = ({ movieCastDetails }) => {
  return (
    <section>
      <ul className={css.castList}>
        {movieCastDetails.map((cast) => {
          const imgCastPath =
            "https://image.tmdb.org/t/p/w200/" + cast.profile_path;

          return (
            <li key={cast.id} className={css.castItem}>
              <img
                src={imgCastPath}
                alt="No photo available"
                className={css.castImg}
              />
              <div className={css.castWrap}>
                <p className={css.castName}>{cast.name}</p>
                <p className={css.castCharacter}>Character: {cast.character}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default MovieCastInfo;

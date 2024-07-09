import MovieList from "../../components/movielist/MovieList";
import css from './homepage.module.css';

const HomePage = ({ moviesToShow }) => {
    console.log(moviesToShow)
  return (
    <section className={css.homePageSection}>
    <h1 className={css.homePageTitle}>Trending today</h1>
    {moviesToShow.length > 0 && <MovieList moviesToShow={moviesToShow} />}</section>
  );
};

export default HomePage;

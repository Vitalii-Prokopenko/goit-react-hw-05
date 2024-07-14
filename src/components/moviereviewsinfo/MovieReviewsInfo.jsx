import css from "./moviereviewsinfo.module.css";

const MovieReviewsInfo = ({ movieReviewsDetails }) => {
  return (
    <section>
      <ul className={css.reviewsList}>
        {movieReviewsDetails.map((review) => {
          return (
            <li key={review.id} className={css.reviewItem}>
              <p className={css.reviewAuthor}>{review.author}</p>
              <p className={css.reviewContent}>{review.content}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default MovieReviewsInfo;

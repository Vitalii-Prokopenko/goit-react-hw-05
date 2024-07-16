import { Formik, Form, Field } from "formik";
import toast, { Toaster } from "react-hot-toast";
import css from "./searchbar.module.css";

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (values, actions) => {
    if (values.tag === "") {
      toast.error("Type something to search!");
      return;
    }
    onSearch(values.tag);
    actions.resetForm();
  };
  return (
    <div className={css.searchBar}>
      <Formik
        initialValues={{
          tag: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form className={css.searchForm}>
          <Field
            className={css.searchInput}
            type="text"
            autoComplete="off"
            autoFocus
            name="tag"
          />
          <button type="submit" className={css.searchBtn}>
            Search
          </button>
        </Form>
      </Formik>
      <Toaster position="top-right" />
    </div>
  );
};

export default SearchBar;

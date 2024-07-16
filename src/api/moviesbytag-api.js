import axios from "axios";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODkxYmFhNTYyODgwNjQyNTMxOTIxZTFkZmZkY2MxMSIsIm5iZiI6MTcyMDM0ODAyOC41MDc5OCwic3ViIjoiNjY4YTZhMmNkZTFhNDhjZjZiYTNiMTIwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.AuuA-usQANg6zBycYtwEBShR7U2XEdvYjei8SGGKotE",
  },
};

export const fetchMoviesByTag = async (tag) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${tag}&include_adult=false&language=en-US&page=1`;
  const response = await axios.get(url, options);
  return response.data.results;
};

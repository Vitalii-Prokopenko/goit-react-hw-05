import axios from "axios";

const url = "https://api.themoviedb.org/3/trending/movie/week?language=en-US";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODkxYmFhNTYyODgwNjQyNTMxOTIxZTFkZmZkY2MxMSIsIm5iZiI6MTcyMDM0ODAyOC41MDc5OCwic3ViIjoiNjY4YTZhMmNkZTFhNDhjZjZiYTNiMTIwIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.AuuA-usQANg6zBycYtwEBShR7U2XEdvYjei8SGGKotE",
  },
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get(url, options);
  console.log(response);
  return response.data.results;
};

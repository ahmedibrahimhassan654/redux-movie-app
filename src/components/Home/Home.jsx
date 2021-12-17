import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import MovieApi from "../../common/apis/movieApi";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";
const Home = () => {
  const movieText = "Harry";
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await MovieApi.get(
        `?i=tt3896198&apikey=ddb706cb&s=${movieText}&type=movie`
        // `?apiKey=${APIKey}&s=${movieText}&type=movie`
      ).catch((err) => {
        console.log(err);
      });
      // console.log(response);
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  }, [dispatch]);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;

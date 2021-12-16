import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import MovieApi from "../../common/apis/movieApi";


const Home = () => {
  useEffect(() => {
    const movieText = "Harry";
    const fetchMovies = async () => {
      const response = await MovieApi.get(
        `?i=tt3896198&apikey=ddb706cb&s=${movieText}&type=movie`
        // `?apiKey=${APIKey}&s=${movieText}&type=movie`
      ).catch((err) => {
        console.log(err);
      });
      console.log(response);
    };
    fetchMovies();
  }, []);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;

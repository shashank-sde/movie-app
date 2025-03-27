import React, { useState, useEffect } from "react";
import "./Body.css";
import MovieCard from "./MovieCard";
import { BASE_URL, API_KEY } from "../utility/Api";

function Body() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/movie/popular?api_key=${API_KEY}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        const data = await response.json();
        setMovies(data.results); // Update the state with fetched data
      } catch (error) {
        console.error("Error fetching data:", error); // Log the error in case of failure
      }
    };

    fetchMovies(); // Call the async function
  }, []);

  return (
    <div className="body">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          posterPath={movie.poster_path}
          releaseDate={movie.release_date}
          overview={movie.overview}
        />
      ))}
    </div>
  );
}

export default Body;

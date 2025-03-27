import React from "react";
import "./MovieCard.css";

function MovieCard({ title, posterPath, releaseDate, overview }) {
  const truncateOverview = (text, limit) => {
    if (text.length <= limit) {
      return text;
    }
    return text.substring(0, limit) + "...";
  };

  return (
    <div className="movie-card">
      <div className="overlay">
        <img src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={title} />
        {/* <div className="heart-icon">❤️</div> */}
      </div>
      <div className="movie-info">
        <h3>{title}</h3>
        <span className="green">9.5</span>
      </div>
      <div className="overview">
        <p>{truncateOverview(overview, 100)}</p>
      </div>
      <p className="rls-date">{releaseDate}</p>
    </div>
  );
}

export default MovieCard;

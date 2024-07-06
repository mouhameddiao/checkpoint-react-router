// src/MovieCard.js
import React from 'react';
import { useHistory } from 'react-router-dom';
import './MovieCard.css';
import { FaStar } from 'react-icons/fa';

const MovieCard = ({ movie, index }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/movies/${index}`);
  };

  return (
    <div className="movie-card" onClick={handleClick}>
      <img className="movie-img" src={movie.posterURL} alt={movie.title} />
      <div className="movie-details">
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <div className="rating">
          {[...Array(5)].map((star, i) => (
            <FaStar key={i} color={i < movie.rating ? 'gold' : 'gray'} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

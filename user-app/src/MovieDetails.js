import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const movies = [
    { id: 1, title: 'DRONE | Sean Bean ', description: 'Un pilote de drone chevronné réalise des missions secrètes pour la CIA tout en menant une vie de famille discrète dans une banlieue sans histoire...', posterURL: 'https://youtu.be/LjLcgcuELxw?si=Wpb4jQxIhXinKPvG', rating: 8.8, trailer: 'https://media.gqmagazine.fr/photos/5d8a17341c594a0008b58678/16:9/w_1600,c_limit/unnamed-5.jpg' },
    { id: 2, title: 'Les Tricheurs', description: 'Les Tricheurs | Film Complet en Français | Famille', posterURL: 'https://youtu.be/QVa_4Y8Tuao?si=B-sBcUBzfjyq0xPK', rating: 8.7, trailer: 'https://www.marcel-carne.com/wp-content/uploads/le-dossier-de-presse-promotionnel/dp-lestricheurs-recto.jpg' },
    // Add more movies here
  ];
  
function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <img src={movie.posterURL} alt={movie.title} />
      <p>Rating: {movie.rating}</p>
      <iframe src={movie.trailer} title={movie.title}></iframe>
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
}

export default MovieDetails;

import { useState } from 'react';
import { FaPlay, FaInfoCircle, FaStar, FaHeart } from 'react-icons/fa';
import './Home.css';

function Home() {
  const [favorites, setFavorites] = useState([1, 3]);

  const trendingMovies = [
    { id: 1, title: "Avengers: Endgame", rating: 4.8, year: 2019 },
    { id: 2, title: "Spider-Man: No Way Home", rating: 4.7, year: 2021 },
    { id: 3, title: "The Batman", rating: 4.5, year: 2022 },
    { id: 4, title: "Dune", rating: 4.3, year: 2021 },
    { id: 5, title: "Top Gun: Maverick", rating: 4.9, year: 2022 }
  ];

  return (
    <div className="flix-app">
      {/* Hero Section */}
      <div className="hero-fullscreen">
        <div className="hero-content">
          <h1>WELCOME TO IFLIX</h1>
          <p>Streaming film & series terbaik hanya di sini!</p>
          <div className="hero-buttons">
            <button className="play-button">
              <FaPlay /> MULAI NONTON
            </button>
            <button className="info-button">
              <FaInfoCircle /> INFO
            </button>
          </div>
        </div>
      </div>

      {/* Movie List */}
      <div className="movie-section">
        <h2><FaStar className="fire-icon" /> TRENDING NOW</h2>
        <div className="movie-scroller">
          {trendingMovies.map(movie => (
           <div key={movie.id} className="movie-card">
  <div className="movie-poster">
    <img 
      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
      alt={movie.title}
      onError={(e) => { 
        e.target.src = `https://via.placeholder.com/300x450?text=${movie.title.replace(/\s+/g, '+')}`
      }} 
    />
    <div className="movie-overlay">
      <button className="icon-button play-icon">
        <FaPlay />
      </button>
      <button 
        className={`icon-button heart-icon ${favorites.includes(movie.id) ? 'active' : ''}`}
        onClick={() => setFavorites(prev =>
          prev.includes(movie.id)
            ? prev.filter(id => id !== movie.id)
            : [...prev, movie.id]
        )}
      >
        <FaHeart />
      </button>
      <div className="movie-meta">
        <span className="rating"><FaStar /> {movie.rating}</span>
        <span className="year">{movie.year}</span>
      </div>
    </div>
  </div>
  <h3>{movie.title}</h3>
</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
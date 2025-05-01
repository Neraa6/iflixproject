import { FaPlay } from 'react-icons/fa';
import './Dashboard.css';

function Dashboard() {
  // Data contoh
  const continueWatching = [
    { id: 1, title: "Avengers: Endgame" },
    { id: 2, title: "Stranger Things" }
  ];

  const recommendations = [
    { id: 3, title: "The Witcher", type: "Series" },
    { id: 4, title: "Dune", type: "Movie" },
    { id: 5, title: "Money Heist", type: "Series" }
  ];

  return (
    <div className="flix-app">
      {/* HEADER MINIMAL */}
      <header className="flix-header">
        <h1>IFLIX</h1>
      </header>

      {/* MAIN CONTENT */}
      <main className="flix-content">
        {/* CONTINUE WATCHING */}
        <section className="continue-section">
          <h2>Continue Watching</h2>
          <div className="continue-list">
            {continueWatching.map(item => (
              <div key={item.id} className="continue-item">
                <h3>{item.title}</h3>
                <button className="play-button">
                  <FaPlay /> Continue
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* RECOMMENDATIONS */}
        <section className="recommendation-section">
          <h2>Recommended For You</h2>
          <div className="recommendation-grid">
            {recommendations.map(item => (
              <div key={item.id} className="recommendation-item">
                <h3>{item.title}</h3>
                <p>{item.type}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
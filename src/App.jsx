import Navbar from "../components/navbar.jsx";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">

          <span className="hero-tag">🎬 Your next favorite movie is here</span>

          <h1>
            Find <span className="text-gradient">Movies</span>
            <br />
            You'll Enjoy
            <br />
            Without the Hassle
          </h1>

          <p>
            Discover movies you'll love based on your mood, taste,
            and what you've watched before.
          </p>

          <div className="hero-search">
            <input
              type="text"
              placeholder="What do you want to watch?"
            />
            <button>Search Movies</button>
          </div>

          <div className="hero-stats">
            <div>
              <strong>10K+</strong>
              <span>Movies</span>
            </div>

            <div>
              <strong>500K+</strong>
              <span>Users</span>
            </div>

            <div>
              <strong>95%</strong>
              <span>Match Rate</span>
            </div>
          </div>

        </div>

        {/* Decorative movie cards */}
        <div className="hero-posters">
          <div className="poster poster-1">
            <span>INTERSTELLAR</span>
          </div>

          <div className="poster poster-2">
            <span>INCEPTION</span>
          </div>

          <div className="poster poster-3">
            <span>THE BATMAN</span>
          </div>
        </div>
      </section>


      {/* Trending Section */}
      <section className="trending">

        <div className="section-heading">
          <div>
            <span>WHAT'S POPULAR</span>
            <h2>Trending Movies</h2>
          </div>

          <button className="view-all">View all →</button>
        </div>

        <div className="movie-grid">

          <div className="movie-card">
            <div className="movie-poster poster-a">
              <span>01</span>
            </div>

            <h3>Interstellar</h3>
            <p>⭐ 8.7 &nbsp; • &nbsp; Sci-Fi</p>
          </div>

          <div className="movie-card">
            <div className="movie-poster poster-b">
              <span>02</span>
            </div>

            <h3>Inception</h3>
            <p>⭐ 8.8 &nbsp; • &nbsp; Thriller</p>
          </div>

          <div className="movie-card">
            <div className="movie-poster poster-c">
              <span>03</span>
            </div>

            <h3>The Batman</h3>
            <p>⭐ 7.8 &nbsp; • &nbsp; Action</p>
          </div>

          <div className="movie-card">
            <div className="movie-poster poster-d">
              <span>04</span>
            </div>

            <h3>Avatar</h3>
            <p>⭐ 7.8 &nbsp; • &nbsp; Fantasy</p>
          </div>

        </div>
      </section>


      {/* Features */}
      <section className="features">

        <div className="section-heading center">
          <span>WHY MOVIESUGGEST?</span>
          <h2>Made for Movie Lovers</h2>
        </div>

        <div className="feature-grid">

          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Personalized</h3>
            <p>
              Get movie recommendations based on your personal taste.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔎</div>
            <h3>Easy Discovery</h3>
            <p>
              Find something amazing to watch without endless searching.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">❤️</div>
            <h3>Save Favorites</h3>
            <p>
              Keep track of movies you love and want to watch later.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default App;
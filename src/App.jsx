import Navbar from "../components/navbar.jsx";
import "./App.css";
import About from "../components/about.jsx";

function App() {

  const trendingMovies = [
    {
      title: "Interstellar",
      rating: "8.7",
      genre: "Sci-Fi",
      director: "Christopher Nolan",
      cast: "Matthew McConaughey, Anne Hathaway",
      description:
        "A team of explorers travel through a wormhole in space in search of a new home for humanity.",
      trailer: "/trailers/interstellar.mp4",
      poster: "poster-a",
    },

    {
      title: "Inception",
      rating: "8.8",
      genre: "Thriller",
      director: "Christopher Nolan",
      cast: "Leonardo DiCaprio, Joseph Gordon-Levitt",
      description:
        "A skilled thief who steals secrets through dreams is given a chance to erase his past.",
      trailer: "/trailers/inception.mp4",
      poster: "poster-b",
    },

    {
      title: "The Batman",
      rating: "7.8",
      genre: "Action",
      director: "Matt Reeves",
      cast: "Robert Pattinson, Zoë Kravitz",
      description:
        "Batman investigates a series of crimes that reveal a dark conspiracy within Gotham City.",
      trailer: "/trailers/batman.mp4",
      poster: "poster-c",
    },

    {
      title: "Avatar",
      rating: "7.8",
      genre: "Fantasy",
      director: "James Cameron",
      cast: "Sam Worthington, Zoe Saldana",
      description:
        "A marine joins an extraordinary world on Pandora and becomes caught between two worlds.",
      trailer: "/trailers/avatar.mp4",
      poster: "poster-d",
    },
  ];

  return (
    <div className="app">

      <Navbar />


      {/* =========================
          HERO SECTION
      ========================= */}

      <section className="hero">

        <div className="hero-content">

          <span className="hero-tag">
            🎬 Your next favorite movie is here
          </span>

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


          {/* Search */}

          <div className="hero-search">

            <input
              type="text"
              placeholder="What do you want to watch?"
            />

            <button>
              Search Movies
            </button>

          </div>


          {/* Stats */}

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



      {/* =========================
          TRENDING SECTION
      ========================= */}

      <section className="trending">

        <div className="section-heading">

          <div>

            <span>
              WHAT'S POPULAR
            </span>

            <h2>
              Trending Movies
            </h2>

          </div>

          <button className="view-all">
            View all →
          </button>

        </div>



        {/* Movie Grid */}

        <div className="movie-grid">

          {trendingMovies.map((movie, index) => (

            <div
              className="movie-card"
              key={movie.title}
            >

              {/* Normal Movie Poster */}

              <div
                className={`movie-poster ${movie.poster}`}
              >

                <span>
                  0{index + 1}
                </span>

              </div>


              {/* Movie title */}

              <h3>
                {movie.title}
              </h3>


              {/* Movie rating */}

              <p>
                ⭐ {movie.rating}
                &nbsp; • &nbsp;
                {movie.genre}
              </p>



              {/* =========================
                  HOVER MOVIE PREVIEW
              ========================= */}

              <div className="movie-hover">


                {/* 75% TRAILER */}

                <div className="trailer-section">

                  <video
                    src={movie.trailer}
                    muted
                    loop
                    playsInline
                    autoPlay
                  />


                  {/* Trailer label */}

                  <div className="trailer-overlay">

                    <span>
                      ▶ Trailer
                    </span>

                  </div>

                </div>



                {/* 25% MOVIE INFORMATION */}

                <div className="movie-info">


                  <h2>
                    {movie.title}
                  </h2>


                  {/* Rating + Genre */}

                  <div className="movie-meta">

                    ⭐ {movie.rating}

                    <span>
                      •
                    </span>

                    {movie.genre}

                  </div>


                  {/* Description */}

                  <p className="description">
                    {movie.description}
                  </p>


                  {/* Director + Cast */}

                  <div className="movie-details">

                    <p>

                      <strong>
                        Director
                      </strong>

                      {movie.director}

                    </p>


                    <p>

                      <strong>
                        Cast
                      </strong>

                      {movie.cast}

                    </p>

                  </div>


                  {/* Watch Button */}

                  <button className="watch-btn">

                    ▶ Watch Now

                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>



      {/* =========================
          FEATURES SECTION
      ========================= */}

      <section className="features">


        <div className="section-heading center">

          <span>
            WHY MOVIESUGGEST?
          </span>

          <h2>
            Made for Movie Lovers
          </h2>

        </div>



        <div className="feature-grid">


          {/* Feature 1 */}

          <div className="feature-card">

            <div className="feature-icon">
              🎯
            </div>

            <h3>
              Personalized
            </h3>

            <p>
              Get movie recommendations based on your personal taste.
            </p>

          </div>



          {/* Feature 2 */}

          <div className="feature-card">

            <div className="feature-icon">
              🔎
            </div>

            <h3>
              Easy Discovery
            </h3>

            <p>
              Find something amazing to watch without endless searching.
            </p>

          </div>



          {/* Feature 3 */}

          <div className="feature-card">

            <div className="feature-icon">
              ❤️
            </div>

            <h3>
              Save Favorites
            </h3>

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
import "./About.css";

function About() {
  return (
    <div className="about-page">

      {/* Hero */}
      <section className="about-hero">
        <span className="about-tag">🎬 ABOUT MOVIESUGGEST</span>

        <h1>
          Stop Searching.
          <br />
          Start <span className="text-gradient">Watching.</span>
        </h1>

        <p>
          MovieSuggest helps you discover movies you'll actually enjoy.
          No endless scrolling, no wondering what to watch next —
          just simple and personalized movie recommendations.
        </p>
      </section>


      {/* Mission */}
      <section className="about-section">

        <div className="about-section-title">
          <span>OUR MISSION</span>
          <h2>Making movie discovery simple.</h2>
        </div>

        <div className="about-content">
          <p>
            We've all been there — spending more time searching for a movie
            than actually watching one.
          </p>

          <p>
            MovieSuggest was created to make that experience easier.
            Our goal is to help you discover movies based on your interests,
            favorite genres, and the kind of experience you're looking for.
          </p>

          <p>
            Whether you're looking for an action-packed adventure, a
            mind-bending thriller, a relaxing comedy, or something completely
            new, MovieSuggest helps you find your next movie faster.
          </p>
        </div>

      </section>


      {/* Features */}
      <section className="about-features">

        <div className="about-feature">
          <div className="about-icon">🎯</div>

          <h3>Personalized</h3>

          <p>
            Recommendations designed around your movie preferences.
          </p>
        </div>


        <div className="about-feature">
          <div className="about-icon">⚡</div>

          <h3>Simple</h3>

          <p>
            Spend less time searching and more time enjoying movies.
          </p>
        </div>


        <div className="about-feature">
          <div className="about-icon">❤️</div>

          <h3>For Movie Lovers</h3>

          <p>
            Built for people who are always looking for something great to watch.
          </p>
        </div>

      </section>


      {/* CTA */}
      <section className="about-cta">

        <h2>
          Ready to find your next
          <span className="text-gradient"> favorite movie?</span>
        </h2>

        <p>
          Explore thousands of movies and discover something worth watching.
        </p>

        <button>Explore Movies →</button>

      </section>

    </div>
  );
}

export default About;
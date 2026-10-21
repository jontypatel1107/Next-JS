
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <section className="page-heading">
        <div className="container">
          <span className="eyebrow">GET TO KNOW US</span>
          <h1>About Wanderly</h1>
          <p>
            Discover new places, experience different cultures,
            and make every journey unforgettable.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-content">
          <img
            className="about-image"
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80"
            alt="Beautiful mountains and natural landscape"
          />

          <div className="about-text">
            <span className="eyebrow">OUR STORY</span>

            <h2>Explore the world, one destination at a time.</h2>

            <p>
              Wanderly is a travel destination explorer created
              for people who love discovering beautiful places
              around the world.
            </p>

            <p>
              From tropical beaches and historic cities to
              peaceful mountains, we help you explore destinations
              and discover what makes each place special.
            </p>

            <p>
              Find useful information about popular attractions,
              the best time to visit, suggested trip duration,
              and estimated travel budgets.
            </p>

            <Link
              href="/destinations"
              className="secondary-button"
            >
              Explore Destinations →
            </Link>
          </div>
        </div>
      </section>

      <section className="section why-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">WHAT WE BELIEVE</span>
            <h2>Travel Should Inspire Everyone</h2>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">🌍</div>
              <h3>Discover the World</h3>
              <p>
                Explore destinations, cultures, and landscapes
                from around the globe.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🧭</div>
              <h3>Plan with Confidence</h3>
              <p>
                Learn about attractions, travel seasons, and
                estimated budgets before your trip.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">✨</div>
              <h3>Create Memories</h3>
              <p>
                Find inspiration for adventures and experiences
                that stay with you forever.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container section-heading">
          <span className="eyebrow">YOUR NEXT ADVENTURE</span>
          <h2>Somewhere Amazing Is Waiting</h2>
          <p>
            Start exploring and find the destination that
            matches your travel dreams.
          </p>

          <div style={{ marginTop: "25px" }}>
            <Link
              href="/destinations"
              className="primary-button"
            >
              Start Exploring →
            </Link>
          </div>
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} Wanderly. Explore more,
        worry less.
      </footer>
    </>
  );
}

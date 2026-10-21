
import Link from "next/link";
import { destinations } from "../app/data/destination";

export default function Home() {
  const featuredDestinations = destinations.slice(0, 3);

  return (
    <>
      <section className="hero">
        <img
          className="hero-image"
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=85"
          alt="Beautiful mountain landscape"
        />

        <div className="hero-overlay" />

        <div className="hero-content">
          <span className="eyebrow">
            DISCOVER YOUR NEXT ADVENTURE
          </span>

          <h1>
            The world is wide.
            <br />
            Go explore it.
          </h1>

          <p>
            Discover breathtaking destinations, explore new
            cultures, and find inspiration for your next
            unforgettable journey.
          </p>

          <Link href="/destinations" className="primary-button">
            Explore Destinations →
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">HANDPICKED FOR YOU</span>
            <h2>Popular Destinations</h2>
            <p>
              Find inspiration for your next great adventure.
            </p>
          </div>

          <div className="destination-grid">
            {featuredDestinations.map((destination) => (
              <article
                className="destination-card"
                key={destination.id}
              >
                <div className="destination-image-wrap">
                  <img
                    className="destination-image"
                    src={destination.image}
                    alt={destination.name}
                  />

                  <span className="rating">
                    ★ {destination.rating}
                  </span>
                </div>

                <div className="destination-info">
                  <span className="destination-location">
                    {destination.country}
                  </span>

                  <h3>{destination.name}</h3>
                  <p>{destination.description}</p>

                  <div className="card-footer">
                    <span>{destination.duration}</span>

                    <Link
                      href={`/destinations/${destination.id}`}
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "35px" }}>
            <Link
              href="/destinations"
              className="secondary-button"
            >
              View All Destinations
            </Link>
          </div>
        </div>
      </section>

      <section className="section why-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">WHY WANDERLY?</span>
            <h2>Travel Made Inspiring</h2>
            <p>
              Everything you need to start planning your next trip.
            </p>
          </div>

          <div className="feature-grid">
            <article className="feature-card">
              <div className="feature-icon">🌍</div>
              <h3>A World of Choices</h3>
              <p>
                Discover destinations across different countries,
                cultures, and landscapes.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">🧭</div>
              <h3>Useful Travel Details</h3>
              <p>
                Find suggested travel durations, budgets,
                attractions, and visiting seasons.
              </p>
            </article>

            <article className="feature-card">
              <div className="feature-icon">✨</div>
              <h3>Find Your Inspiration</h3>
              <p>
                Explore beautiful places and discover ideas
                for your next adventure.
              </p>
            </article>
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

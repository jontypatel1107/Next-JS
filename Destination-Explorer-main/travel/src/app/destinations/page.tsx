
import Link from "next/link";
import { destinations } from "../data/destination";

export default function DestinationsPage() {
  return (
    <>
      <section className="page-heading">
        <div className="container">
          <span className="eyebrow">EXPLORE THE WORLD</span>
          <h1>Find Your Next Destination</h1>
          <p>
            From tropical beaches to mountain escapes, discover
            places that inspire your next adventure.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="destination-grid">
            {destinations.map((destination) => (
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
                      Explore →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
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

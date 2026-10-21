
import Link from "next/link";
import { notFound } from "next/navigation";
import { destinations } from "../../data/destination";

type DestinationDetailsProps = {
  params: Promise<{ id: string }>;
};

export default async function DestinationDetails({
  params,
}: DestinationDetailsProps) {
  const { id } = await params;

  const destination = destinations.find(
    (item) => item.id === Number(id)
  );

  if (!destination) {
    notFound();
  }

  return (
    <section className="detail-section">
      <div className="container">
        <Link href="/destinations" className="back-link">
          ← Back to Destinations
        </Link>

        <img
          className="detail-image"
          src={destination.image}
          alt={destination.name}
        />

        <span className="eyebrow">
          {destination.country}
        </span>

        <h1 className="detail-title">
          Discover {destination.name}
        </h1>

        <p className="detail-description">
          {destination.longDescription}
        </p>

        <div className="detail-facts">
          <div className="fact-card">
            <span>Best Time to Visit</span>
            <strong>{destination.bestTime}</strong>
          </div>

          <div className="fact-card">
            <span>Estimated Budget</span>
            <strong>{destination.budget}</strong>
          </div>

          <div className="fact-card">
            <span>Suggested Duration</span>
            <strong>{destination.duration}</strong>
          </div>
        </div>

        <h2 className="attractions-title">
          Top Attractions
        </h2>

        <ul className="attraction-list">
          {destination.attractions.map((attraction) => (
            <li key={attraction}>
              ✦ {attraction}
            </li>
          ))}
        </ul>

        <div style={{ marginTop: "35px" }}>
          <Link
            href="/destinations"
            className="secondary-button"
          >
            Explore Other Destinations
          </Link>
        </div>
      </div>
    </section>
  );
}

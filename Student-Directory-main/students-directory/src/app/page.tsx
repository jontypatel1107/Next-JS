import Image from "next/image";
import Navbar from "../../components/Navbar";
import studentImage from "../../assets/image.png";
import "./home.css";

export default function Home() {
  return (
    <div>
      <Navbar />

      <div className="hero">
        <Image
          src={studentImage}
          alt="Students"
          fill
          priority
          className="hero-img"
        />

        <div className="hero-content">
          <h1>Welcome to Student Directory</h1>
          <p>Discover students, explore profiles, and connect with your community.</p>
          <button>Explore Students</button>
        </div>
      </div>

      <div className="features">
        <div className="feature-box yellow">
          <h3>Browse Profiles</h3>
          <p>Explore student profiles and learn about their skills.</p>
        </div>

        <div className="feature-box blue">
          <h3>Search Easily</h3>
          <p>Find students by name, course or year.</p>
        </div>

        <div className="feature-box green">
          <h3>Connect</h3>
          <p>Be part of our growing student community.</p>
        </div>
      </div>
    </div>
  );
}
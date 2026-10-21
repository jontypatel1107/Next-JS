
import Link from "next/link";
import Navbar from "../../../components/Navbar";
import "./about.css";

export default function AboutPage() {
  return (
    <div className="about-page">
      <Navbar />

      <section className="about-hero">
        <span className="about-label">ABOUT US</span>
        <h1>
          Connecting Students,
          <br />
          <span>Building Community.</span>
        </h1>
        <p>
          Student Directory helps you discover students, explore their
          skills, and learn about their projects in one simple place.
        </p>

        <Link href="/students" className="about-button">
          Explore Students →
        </Link>
      </section>

      <section className="about-features">
        <div className="about-card">
          <div className="feature-icon pink">01</div>
          <h2>Browse Profiles</h2>
          <p>
            Discover student profiles and learn about their courses,
            skills, and interests.
          </p>
        </div>

        <div className="about-card">
          <div className="feature-icon blue">02</div>
          <h2>Find Skills</h2>
          <p>
            Explore the technologies and abilities students are
            learning and using in their projects.
          </p>
        </div>

        <div className="about-card">
          <div className="feature-icon green">03</div>
          <h2>Explore Projects</h2>
          <p>
            Get inspired by student projects and discover what
            students are building.
          </p>
        </div>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to make student information easy to discover
          and explore. We provide a simple directory where students'
          profiles, skills, and projects can be viewed in one place.
        </p>
      </section>

      <footer className="about-footer">
        <p>© 2026 Student Directory. Built for students.</p>
      </footer>
    </div>
  );
}

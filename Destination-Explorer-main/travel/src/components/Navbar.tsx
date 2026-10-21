
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="brand">
        <span className="brand-icon">✦</span>
        Wanderly
      </Link>

      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/destinations">Destinations</Link>
        <Link href="/about">About</Link>
      </div>

      <Link href="/destinations" className="nav-button">
        Explore Now
      </Link>
    </nav>
  );
}
    
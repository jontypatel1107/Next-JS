import Link from "next/link";
import "./Navbar.css";

export default function Nav() {
  return (
    <nav>
      <div>Student Directory</div>

      <div>
        <Link href="/">Home</Link>
        <Link href="/students">Students</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
}
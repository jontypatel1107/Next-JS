
import Image from "next/image";
import { students } from "@/data/students";
import Navbar from "../../../components/Navbar"
import "./students.css";

export default function StudentPage() {
    return (
        <div>
            <Navbar />
            <main className="students-page">
                
                <h1>All Students</h1>
                <p className="page-description">
                    Browse through our list of students. You can search by name
                    or filter by course.
                </p>

                <div className="student-grid">
                    {students.map((item) => (
                        <div className="student-card" key={item.id}>
                            {/* <Image
              src={item.image}
              alt={item.name}
              width={80}
              height={80}
              className="student-image"
            /> */}

                            <h3>{item.name}</h3>
                            <p>{item.course}</p>
                            <p>{item.year}</p>

                            <a href={`/students/${item.id}`} className="profile-link">
                                View Profile →
                            </a>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

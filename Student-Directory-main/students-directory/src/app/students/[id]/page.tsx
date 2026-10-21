
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { students } from "@/data/students";
import "../../../../components/Navbar.css";
import Navbar from "../../../../components/Navbar";
import "./profile.css";

export default async function StudentProfile({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const student = students.find(
        (item) => item.id === Number(id)
    );

    if (!student) {
        notFound();
    }

    return (
        <div>
            <Navbar/>
            <main className="profile-page">
                <Link href="/students" className="back-link">
                    ← Back to Students
                </Link>

                <section className="profile-card">
                    <Image
                        src={student.image}
                        alt={student.name}
                        width={180}
                        height={220}
                        className="profile-image"
                    />

                    <div className="profile-info">
                        <h1>{student.name}</h1>
                        <p className="profile-course">{student.course}</p>
                        <p className="profile-year">{student.year}</p>

                        <div className="contact-info">
                            <p>✉ {student.email}</p>
                            <p>⌕ {student.phone}</p>
                            <p>⌖ {student.location}</p>
                        </div>

                        <p className="profile-bio">{student.bio}</p>
                    </div>
                </section>

                <section className="details-card">
                    <h2>Skills</h2>
                    <div className="skills-list">
                        {student.skills.map((skill) => (
                            <span key={skill} className="skill-tag">
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>

                <section className="details-card">
                    <h2>Projects</h2>
                    <ul className="projects-list">
                        {student.projects.map((project) => (
                            <li key={project}>{project}</li>
                        ))}
                    </ul>
                </section>
            </main>
        </div>
    );
}

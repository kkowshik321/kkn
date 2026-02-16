export default function PropsDemo1() {
    const students = {
        name: "Arun Kumar",
        regNo: "24CS1001",
        dept: "CSE",
        year: "II Year",
        email: "arun.kumar@klu.edu.in",
        cgpa: "8.6"
    };
    return (
        <div>
            <h1>Student Name:{students.name}</h1>
            <h6>Email: {students.email}</h6>
        </div>
    );
}
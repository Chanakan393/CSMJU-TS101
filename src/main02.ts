import { Student } from "./student";

const students: Student[] = [
    new Student(101, "Jane"),
    new Student(102, "Noon"),
    new Student(103, "Bow")
];

students[0].addCourse("Math", 3.5);
students[0].addCourse("Science", 3.0);
students[0].addCourse("English", 4.0);
students[0].addCourse("History", 2.5);

students[1].addCourse("Math", 2.8);
students[1].addCourse("Science", 3.2);
students[1].addCourse("English", 3.5);
students[1].addCourse("History", 3.0);

students[2].addCourse("Math", 3.8);
students[2].addCourse("Science", 4.0);
students[2].addCourse("English", 3.9);
students[2].addCourse("History", 3.7);

function showStudentsData(): void {
    console.log("\n=== ข้อมูลนักศึกษา ===");
    students.forEach(s => {
        console.log(`ID: ${s.studentID}, ชื่อ: ${s.name}`);
        s.courses.forEach(c => console.log(`  วิชา: ${c.subject}, เกรด: ${c.grade}`));
        console.log(`เกรดเฉลี่ย: ${s.getAverage().toFixed(2)}\n`);
    });
}


showStudentsData();

students[0].addCourse("Art", 3.7);
students[1].addCourse("Art", 3.3);
students[2].addCourse("Art", 4.0);

showStudentsData();
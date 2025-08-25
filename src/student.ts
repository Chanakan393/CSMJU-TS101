class Course {
    subject: string;
    grade: number;

    constructor(subject: string, grade: number) {
        this.subject = subject;
        this.grade = grade;
    }
}

class Student {
    studentID: number;
    name: string;
    courses: Course[];

    constructor(studentID: number, name: string) {
        this.studentID = studentID;
        this.name = name;
        this.courses = [];
    }

    addCourse(subject: string, grade: number): void {
        this.courses.push(new Course(subject, grade));
    }

    getAverage(): number {
        const sum = this.courses.reduce((total, c) => total + c.grade, 0);
        return this.courses.length > 0 ? sum / this.courses.length : 0;
    }
}

const students: Student[] = [
    new Student(101, "Somchai"),
    new Student(102, "Suda"),
    new Student(103, "Anan")
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

function showStudentsData() {
    console.log("\nข้อมูลนักศึกษา");
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
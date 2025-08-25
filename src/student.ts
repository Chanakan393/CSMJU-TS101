import { Course } from "./course";

export class Student {
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
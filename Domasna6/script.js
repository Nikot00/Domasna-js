class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
        this.subjects = [];
    }

    addSubject(subject) {
        this.subjects.push(subject);
    }

    showInfo() {
        return `
            <div class="studentsInfo">
                <h3>${this.name}</h3>
                <p>Age: ${this.age}</p>
                <p>Grade: ${this.grade}</p>
                <p>Subjects: ${this.subjects.join(", ")}</p>
            </div>
        `;
    }
}

class School {
    constructor(name) {
        this.name = name;
        this.students = [];
    }

    addStudent(student) {
        this.students.push(student);
    }

    showAllStudents() {
        const container = document.getElementById("students");

        this.students.forEach(student => {
            container.innerHTML += student.showInfo();
        });
    }

    findStudent(name) {
        return this.students.find(student => student.name === name);
    }
}

const student1 = new Student("Nikola", 13, 8);
student1.addSubject("JavaScript");
student1.addSubject("HTML");

const student2 = new Student("Ana", 14, 9);
student2.addSubject("CSS");
student2.addSubject("React");

const student3 = new Student("Pavel", 12, 7)
student3.addSubject("Hemija")
student3.addSubject("Matematika")
student3.addSubject("Sport")


const school = new School("Code Academy");


school.addStudent(student1);
school.addStudent(student2);
school.addStudent(student3)

school.showAllStudents();

console.log(school.findStudent("Ana"));
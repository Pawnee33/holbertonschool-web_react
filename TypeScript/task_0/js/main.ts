interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Pawnee',
    lastName: 'Defize',
    age: 31,
    location: 'Bordeaux',
};

const student2: Student = {
    firstName: 'Pauline',
    lastName: 'Martos',
    age: 33,
    location: 'Bordeaux',
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');

studentsList.forEach((student: Student) => {
    const row = table.insertRow();
    const name = row.insertCell(0);
    const location = row.insertCell(1);
    name.innerHTML = student.firstName;
    location.innerHTML = student.location;
});

document.body.appendChild(table);

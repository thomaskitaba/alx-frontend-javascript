interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'thomas',
    lastName: 'kitaba',
    age: 23,
    location: 'Addis Ababa'
};

const student2: Student = {
    firstName: 'estifanos',
    lastName: 'kitaba',
    age: 23,
    location: 'Ethiopia'
};

const studentsList = [student1, student2];

const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');

// add header data
table.appendChild(thead);
const headerRow = thead.insertRow();
const headerCell1 = headerRow.insertCell();
const headerCell2 = headerRow.insertCell();
const headerCell3 = headerRow.insertCell();
const headerCell4 = headerRow.insertCell();

headerCell1.textContent = 'firstName';
headerCell2.textContent = 'lastName';
headerCell3.textContent = 'age';
headerCell4.textContent = 'location';

studentsList.forEach((student) => {
    const row = tbody.insertRow();
    const dataCell1 = row.insertCell();
    const dataCell2 = row.insertCell();
    const dataCell3 = row.insertCell();
    const dataCell4 = row.insertCell();

    // fill the cells with data
    dataCell1.textContent = student.firstName;
    dataCell2.textContent = student.lastName;
    dataCell3.innerText = (student.age).toString();
    dataCell4.textContent = student.location;

});

document.body.appendChild(table);

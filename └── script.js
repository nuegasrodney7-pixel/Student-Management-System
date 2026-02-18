
let students = JSON.parse(localStorage.getItem("students")) || [];

displayStudents();

function addStudent() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let course = document.getElementById("course").value;

    if (name === "" || age === "" || course === "") {
        alert("Please fill all fields");
        return;
    }

    let student = { name, age, course };
    students.push(student);

    localStorage.setItem("students", JSON.stringify(students));

    clearFields();
    displayStudents();
}

function displayStudents() {
    let table = document.getElementById("studentList");
    table.innerHTML = "";

    students.forEach((student, index) => {
        let row = table.insertRow();

        row.insertCell(0).innerText = student.name;
        row.insertCell(1).innerText = student.age;
        row.insertCell(2).innerText = student.course;

        row.insertCell(3).innerHTML =
            `<button class="edit-btn" onclick="editStudent(${index})">Edit</button>
             <button class="delete-btn" onclick="deleteStudent(${index})">Delete</button>`;
    });
}

function deleteStudent(index) {
    students.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();
}

function editStudent(index) {
    let student = students[index];

    document.getElementById("name").value = student.name;
    document.getElementById("age").value = student.age;
    document.getElementById("course").value = student.course;

    students.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();
}

function clearFields() {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("course").value = "";
}
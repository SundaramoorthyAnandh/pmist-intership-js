const form = document.getElementById("myForm");
function getFormValues(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const mark = document.getElementById('mp').value;
    const [tbody, ...rest] = document.getElementsByTagName('tbody');
    console.log(tbody);
    
    let error = false;

    if (name.trim() === '') {
        const nameErr = document.getElementById('nameError');

        nameErr.innerHTML = 'Name Cannot be Empty';

        nameErr.style.color = 'red';
        error = true;
    }
        const rows = tbody.getElementsByTagName("tr");


let nameExists = false;

for (let row of rows) {
    const existingName = row.cells[0].textContent.trim();

    if (existingName.toLowerCase() === name.trim().toLowerCase()) {
        nameExists = true;
        break;
    }
}

if (nameExists) {
    document.getElementById("nameError").innerHTML = "This name already exists!";
    document.getElementById("nameError").style.color = "red";
    return;
}

    if (!mark || (mark < 0 || mark > 100)) {
        document.getElementById('mpError').innerHTML = 'Invalid Mark. Mark should be within 0 to 100';

        error = true;
    }

    if (!error && name.trim() && mark >= 0 && mark <= 100) {
        // document.getElementById('studentName').innerHTML = name;

        // document.getElementById('studentMP').innerHTML = mark;
        tbody.insertAdjacentHTML('beforeend', `
        <tr>
            <td>${name}</td>
            <td>${mark}<td>
        </tr>
        ` ) 
    }
    if (!error) {
        form.reset();
 }   
}

function clearTable() {
    const [tbody, ...rest] = document.getElementsByTagName('tbody');
    tbody.innerHTML = "";
}
fetch("https://dummyjson.com/users")
.then(response => response.json())
.then(data => {
    const users = data.users[0].firstName;
    console.log(users);
    document.getElementById("userId").innerHTML = users;
})
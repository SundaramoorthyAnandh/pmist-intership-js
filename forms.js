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
}
function clearTable() {
    const [tbody, ...rest] = document.getElementsByTagName('tbody');
    tbody.innerHTML = "";
}
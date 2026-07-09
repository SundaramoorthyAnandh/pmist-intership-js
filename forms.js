function getFormValues(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const mark = document.getElementById('mp').value;

    document.getElementById('studentName').innerHTML = name;
    document.getElementById('studentMP').innerHTML = mark;

}
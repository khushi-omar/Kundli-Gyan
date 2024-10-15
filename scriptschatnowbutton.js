function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const pob = document.getElementById('pob').value;
    const gender = document.getElementById('gender').value;
    const concern = document.getElementById('concern').value;

    alert(`Details submitted:\nName: ${name}\nDOB: ${dob}\nPlace of Birth: ${pob}\nGender: ${gender}\nConcern: ${concern}`);
    // Additional logic for sending form data to the server can be added here
}

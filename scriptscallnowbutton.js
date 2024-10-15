// scriptscallnowbutton.js
function handleSubmit(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const pob = document.getElementById('pob').value;
    const gender = document.getElementById('gender').value;
    const concern = document.getElementById('concern').value;

    alert(`Details submitted:\nName: ${name}\nDOB: ${dob}\nPlace of Birth: ${pob}\nGender: ${gender}\nConcern: ${concern}`);
    // Replace alert with actual submission logic if needed
}

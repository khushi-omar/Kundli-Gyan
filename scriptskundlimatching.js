document.getElementById('matchmaking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name1 = document.getElementById('name1').value;
    const dob1 = document.getElementById('dob1').value;
    const place1 = document.getElementById('place1').value;

    const name2 = document.getElementById('name2').value;
    const dob2 = document.getElementById('dob2').value;
    const place2 = document.getElementById('place2').value;

    alert(`Kundli Matching for:\nMale: ${name1}, DOB: ${dob1}, Place: ${place1}\nFemale: ${name2}, DOB: ${dob2}, Place: ${place2}`);
});

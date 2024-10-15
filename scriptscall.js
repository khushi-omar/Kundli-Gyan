// scriptscall.js
function applyFilters() {
    const language = document.getElementById('language').value;
    const expertise = document.getElementById('expertise').value;
    alert(`Filter applied: Language - ${language}, Expertise - ${expertise}`);
    // Add code to filter astrologer list based on selected criteria
}

function startCall(astrologerName) {
    window.location.href = 'callnowbutton.html';
}

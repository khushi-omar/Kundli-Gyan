
// scriptschat.js
function applyFilters() {
    const language = document.getElementById('language').value;
    const expertise = document.getElementById('expertise').value;
    alert(`Filter applied: Language - ${language}, Expertise - ${expertise}`);
    // Add code to filter astrologer list based on selected criteria
}

function startChat(astrologerName) {
    window.location.href = 'chatnowbutton.html';
}

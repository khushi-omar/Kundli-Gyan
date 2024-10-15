document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.faq-question');

    questions.forEach((question) => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;

            // Toggle the display of the answer
            if (answer.style.display === 'block') {
                answer.style.display = 'none'; // Hide answer
            } else {
                answer.style.display = 'block'; // Show answer
            }
        });
    });
});
<button class="visit-button" onclick="redirectToKundliPage()">Visit Here</button>

<script>
function redirectToKundliPage() {
    window.location.href = 'file:///C:/Users/Chelse/Desktop/Archivee/visithere%20freekundli.html';
}
</script>



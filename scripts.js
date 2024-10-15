
    // Get all dropdown buttons
    const dropdownButtons = document.querySelectorAll('nav ul li > a');

    dropdownButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent the default link behavior
            const dropdown = this.nextElementSibling; // Get the dropdown element
            
            // Toggle display of the dropdown
            if (dropdown.style.display === "block") {
                dropdown.style.display = "none";
            } else {
                // Hide other dropdowns
                document.querySelectorAll('.dropdown').forEach(d => d.style.display = "none");
                dropdown.style.display = "block";
            }
        });
    });

    // Close dropdowns if clicked outside
    window.addEventListener('click', function (e) {
        if (!e.target.matches('nav ul li > a')) {
            document.querySelectorAll('.dropdown').forEach(d => d.style.display = "none");
        }
    });


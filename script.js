document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Construct URL parameters
    const formData = new FormData(this);
    const params = new URLSearchParams(formData).toString();

    // Redirect to main.html with form data as URL parameters
    window.location.href = "main.html?" + params;
});
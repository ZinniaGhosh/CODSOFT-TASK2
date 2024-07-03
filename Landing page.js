// Example form submission handling
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    // You can add your form validation and submission logic here
    // For example, send data to a server or display a confirmation message
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    
    // For demo purposes, just log the values
    console.log(`Name: ${name}, Email: ${email}`);
    alert('Sign up successful!'); // Alert for demo purposes
});

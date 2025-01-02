r// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form Validation
document.querySelector('form').addEventListener('submit', function (e) {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    let isValid = true;

    if (name.value.trim() === '') {
        alert('Name is required');
        isValid = false;
    }

    if (email.value.trim() === '' || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)) {
        alert('Please enter a valid email');
        isValid = false;
    }

    if (message.value.trim() === '') {
        alert('Message cannot be empty');
        isValid = false;
    }

    if (!isValid) {
        e.preventDefault();
    }
});

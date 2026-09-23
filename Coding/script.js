window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const heroElements = document.querySelectorAll('.animate-up');
    heroElements.forEach(el => el.classList.add('active'));
    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Animates once
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    revealElements.forEach(el => observer.observe(el));
});

const bookingModal = document.getElementById('bookingModal');

function openBookingModal() {
    bookingModal.style.display = 'flex';
}

function closeBookingModal() {
    bookingModal.style.display = 'none';
}

window.addEventListener('click', (event) => {
    if (event.target === bookingModal) {
        closeBookingModal();
    }
});

function selectRoom(roomName, price) {
    const modalRoomSelect = document.getElementById('modalRoomType');
    if (modalRoomSelect) {
        modalRoomSelect.value = roomName;
    }
    openBookingModal();
}

function handleBookingSubmit(event) {
    event.preventDefault();
    alert("Thank you for choosing Vacation Hotel! Your reservation inquiry has been sent successfully.");
    closeBookingModal();
}
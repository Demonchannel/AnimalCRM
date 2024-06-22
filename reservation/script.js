document.addEventListener('DOMContentLoaded', () => {
    const roomButtons = document.querySelectorAll('.room');
    const modalOverlay = document.getElementById('modal-overlay');
    const closeButton = document.getElementById('close-button');

    roomButtons.forEach(button => {
        button.addEventListener('click', () => {
            const roomNumber = button.getAttribute('data-room');
            document.getElementById('room-number').value = `№ ${roomNumber}`;
            modalOverlay.style.display = 'flex';
        });
    });

    closeButton.addEventListener('click', () => {
        modalOverlay.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            modalOverlay.style.display = 'none';
        }
    });
});

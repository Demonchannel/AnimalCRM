document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.querySelectorAll('.add-button');
    const modalOverlay = document.getElementById('modal-overlay');
    const closeButton = document.getElementById('close-button');

    addButton.forEach(button => {
        button.addEventListener('click', () => {
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

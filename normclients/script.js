document.addEventListener('DOMContentLoaded', () => {
    const clientNames = document.querySelectorAll('.client-name');
    const petNames = document.querySelectorAll('.pet-name');
    const modalOverlayClient = document.getElementById('modal-overlay-client');
    const modalOverlayPet = document.getElementById('modal-overlay-pet');
    const closeButtonClient = document.getElementById('close-button-client');
    const closeButtonPet = document.getElementById('close-button-pet');

    clientNames.forEach(name => {
        name.addEventListener('click', () => {
            modalOverlayClient.style.display = 'flex';
        });
    });

    petNames.forEach(name => {
        name.addEventListener('click', () => {
            modalOverlayPet.style.display = 'flex';
        });
    });

    closeButtonClient.addEventListener('click', () => {
        modalOverlayClient.style.display = 'none';
    });

    closeButtonPet.addEventListener('click', () => {
        modalOverlayPet.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modalOverlayClient) {
            modalOverlayClient.style.display = 'none';
        }
        if (event.target === modalOverlayPet) {
            modalOverlayPet.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.querySelector('.add-button');
    const editBtn = document.querySelector('.edit-button');
    const modalOverlayTariff = document.getElementById('modal-overlay-tariff');
    const modalTariff = document.getElementById('modal-tariff');
    const closeBtnTariff = document.getElementById('close-button-tariff');
    const saveTariffBtn = document.getElementById('save-tariff-button');
    const modalOverlayConfirmation = document.getElementById('modal-overlay-confirmation');
    const confirmBtn = document.getElementById('confirm-button');
    const serviceButtons = document.querySelectorAll('.service-button');
    const serviceDetails = document.getElementById('service-details');
    const tariffNameElement = document.getElementById('tariff-name');
    const tariffAreaElement = document.getElementById('tariff-area');
    const tariffWalksElement = document.getElementById('tariff-walks');
    const tariffPriceElement = document.getElementById('tariff-price');

    let editingTariff = null;

    addBtn.addEventListener('click', () => {
        editingTariff = null;
        modalTariff.querySelector('#modal-title').textContent = 'Добавить тариф';
        document.getElementById('tariff-name-input').value = '';
        document.getElementById('tariff-area-input').value = '';
        document.getElementById('tariff-walks-input').value = '';
        document.getElementById('tariff-price-input').value = '';
        modalOverlayTariff.style.display = 'flex';
    });

    editBtn.addEventListener('click', () => {
        editingTariff = tariffNameElement.textContent;
        modalTariff.querySelector('#modal-title').textContent = 'Редактировать тариф';
        document.getElementById('tariff-name-input').value = tariffNameElement.textContent;
        document.getElementById('tariff-area-input').value = tariffAreaElement.textContent;
        document.getElementById('tariff-walks-input').value = tariffWalksElement.textContent;
        document.getElementById('tariff-price-input').value = tariffPriceElement.textContent;
        modalOverlayTariff.style.display = 'flex';
    });

    closeBtnTariff.addEventListener('click', () => {
        modalOverlayTariff.style.display = 'none';
    });

    saveTariffBtn.addEventListener('click', () => {
        const name = document.getElementById('tariff-name-input').value;
        const area = document.getElementById('tariff-area-input').value;
        const walks = document.getElementById('tariff-walks-input').value;
        const price = document.getElementById('tariff-price-input').value;

        if (editingTariff) {
            tariffNameElement.textContent = name;
            tariffAreaElement.textContent = area;
            tariffWalksElement.textContent = walks;
            tariffPriceElement.textContent = price;
        } else {
            const newButton = document.createElement('button');
            newButton.classList.add('service-button');
            newButton.setAttribute('data-tariff', name);
            newButton.textContent = `Тариф “${name}”`;
            newButton.addEventListener('click', () => {
                tariffNameElement.textContent = name;
                tariffAreaElement.textContent = area;
                tariffWalksElement.textContent = walks;
                tariffPriceElement.textContent = price;
            });
            document.querySelector('.service-list').insertBefore(newButton, addBtn);
        }

        modalOverlayTariff.style.display = 'none';
        modalOverlayConfirmation.style.display = 'flex';
    });

    confirmBtn.addEventListener('click', () => {
        modalOverlayConfirmation.style.display = 'none';
    });

    serviceButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tariff = button.getAttribute('data-tariff');
            tariffNameElement.textContent = tariff;
            // Update the rest of the details based on the tariff selection
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target === modalOverlayTariff) {
            modalOverlayTariff.style.display = 'none';
        }
        if (event.target === modalOverlayConfirmation) {
            modalOverlayConfirmation.style.display = 'none';
        }
    });
});

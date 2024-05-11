const form = document.getElementById('booking-form');
const bookingChoiceSelect = document.getElementById('booking-choice');
const dateContainer = document.querySelector('.date-container');
const timeContainer = document.querySelector('.time-container');
const slotContainer = document.querySelector('.slot-container');

bookingChoiceSelect.addEventListener('change', (e) => {
    const selectedOption = e.target.value;
    switch (selectedOption) {
        case 'full-day':
            dateContainer.classList.remove('hide');
            timeContainer.classList.add('hide');
            slotContainer.classList.add('hide');
            break;
        case 'half-day':
            dateContainer.classList.remove('hide');
            timeContainer.classList.add('hide'); 
            slotContainer.classList.remove('hide');
            break;
        case 'hourly':
            dateContainer.classList.remove('hide');
            timeContainer.classList.remove('hide');
            slotContainer.classList.add('hide');
            break;
        default:
            dateContainer.classList.add('hide');
            timeContainer.classList.add('hide');
            slotContainer.classList.add('hide');
    }
});

form.addEventListener('submit'), (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = {};
    for (const [key, value] of formData.entries()) {
        data[key] = value;
    }
    console.log(data);}


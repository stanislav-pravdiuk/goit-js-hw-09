import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
    datetimePicker: document.querySelector('#datetime-picker'),
    startButton: document.querySelector('[data-start]'),
    daysValue: document.querySelector('[data-days]'),
    hoursValue: document.querySelector('[data-hours]'),
    minutesValue: document.querySelector('[data-minutes]'),
    secondsValue: document.querySelector('[data-seconds]'),
};

flatpickr(refs.datetimePicker, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
    const selectedDate = selectedDates[0];


    if (selectedDate < new Date()) {
        Notiflix.Notify.failure('Please choose a date in the future');
        refs.startButton.disabled = true;
    } else {
        refs.startButton.disabled = false;

        refs.startButton.addEventListener('click', () => {
        startCountdown(selectedDate);
        });
    }
    },
});


function startCountdown(selectedDate) {

    const countdownInterval = setInterval(() => {
        const currentDate = new Date();
        const differenceInMs = Math.floor(selectedDate - currentDate);
        const formatedDifferenceInMs = convertMs(differenceInMs);

        if (differenceInMs <= 0) {
            clearInterval(countdownInterval);
            refs.daysValue.textContent = '00';
            refs.hoursValue.textContent = '00';
            refs.minutesValue.textContent = '00';
            refs.secondsValue.textContent = '00';
        } else {
            refs.secondsValue.textContent = formatedDifferenceInMs.seconds.toString().padStart(2, '0');
            refs.minutesValue.textContent = formatedDifferenceInMs.minutes.toString().padStart(2, '0');
            refs.hoursValue.textContent = formatedDifferenceInMs.hours.toString().padStart(2, '0');
            refs.daysValue.textContent = formatedDifferenceInMs.days.toString().padStart(2, '0');
        }
    }, 1000);
};

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);

    const hours = Math.floor((ms % day) / hour);

    const minutes = Math.floor(((ms % day) % hour) / minute);

    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
};
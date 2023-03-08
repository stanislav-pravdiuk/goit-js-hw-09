import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    datetimePicker = document.querySelector('#datetime-picker'),
    startButton = document.querySelector('[data-start]'),
    daysValue = document.querySelector('[data-days]'),
    hoursValue = document.querySelector('[data-hours]'),
    minutesValue = document.querySelector('[data-minutes]'),
    secondsValue = document.querySelector('[data-seconds]'),
};



flatpickr(refs.datetimePicker, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
    const selectedDate = selectedDates[0];


    if (selectedDate < new Date()) {
        window.alert('Please choose a date in the future');
        refs.startButton.disabled = true;
    } else {
        refs.startButton.disabled = false;

        refs.startButton.addEventListener('click', () => {
        startCountdown(selectedDate);
        });
    }
    },
});




// // Запускаємо відлік часу до обраної дати
// function startCountdown(selectedDate) {
//     // Оновлюємо значення таймера кожну секунду
//     const countdownInterval = setInterval(() => {
//         const currentDate = new Date();
//         const differenceInSeconds = Math.floor((selectedDate - currentDate) / 1000);
//         // Перевіряємо, чи досягнуто кінцевої дати
//         if (differenceInSeconds <= 0) {
//             clearInterval(countdownInterval);
//             refs.daysValue.textContent = '00';
//             refs.hoursValue.textContent = '00';
//             refs.minutesValue.textContent = '00';
//             refs.secondsValue.textContent = '00';
//         } else {
//             const days = Math.floor(differenceInSeconds / 86400);
//             const hours = Math.floor((differenceInSeconds % 86400) / 3600);
//             const minutes = Math.floor((differenceInSeconds % 3600) / 60);
//             const seconds = convertMs(differenceInSeconds)
//             console.log(seconds, minutes)
//             // Оновлюємо значення таймера
//             daysValue.textContent = days.toString().padStart(2, '0');
//             hoursValue.textContent = hours.toString().padStart(2, '0');
//             minutesValue.textContent = minutes.toString().padStart(2, '0');
//             secondsValue.textContent = seconds.toString().padStart(2, '0');
//         }
//     }, 1000);
// };

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// };
/* Date data */
const date = new Date(); // Date object

const year = date.getFullYear(); // Get the year as a four digit number (yyyy)
const month = date.getMonth() + 1; // Get the month as a number (1-12()
const day = date.getDate(); // Get the day as a number (1-31)

/* Html Elements */
//Get the labels
const yearLabel = document.getElementById("label-year");
const monthLabel = document.getElementById("label-month");
const dayLabel = document.getElementById("label-day");

const year_p = document.querySelector(".year-p");
const month_p = document.querySelector(".month-p");
const day_p = document.querySelector(".day-p");

//Get the inputs
const yearInput = document.getElementById("year");
const monthInput = document.getElementById("month");
const dayInput = document.getElementById("day");

const button = document.querySelector(".icon-container");

//Get the outputs
const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");

/* Event Listeners */
yearInput.addEventListener("input", calculateAge);
monthInput.addEventListener("input", checkMonths);
dayInput.addEventListener("input", checkDays);
button.addEventListener("click", calculateAge);

/* Functions */
function checkMonths() {
    const selectedMonth = monthInput.value;
    const selectedDay = dayInput.value;
    const selectedYear = yearInput.value;
    let validatedDay = checkDaysOfMonth(
        parseInt(selectedMonth, 10),
        parseInt(selectedYear, 10)
    );

    //Check if the month is greater than 12 or less than 0
    if (selectedMonth > 12 || selectedMonth < 1) {
        monthInput.classList.add("alert-input");
        monthLabel.classList.add("alert-label");
        month_p.classList.remove("inactive");
    } else {
        monthInput.classList.remove("alert-input");
        monthLabel.classList.remove("alert-label");
        month_p.classList.add("inactive");
    }

    if (selectedMonth < 10 && selectedMonth[0] !== "0") {
        monthInput.value = "0" + selectedMonth;
    }
    if (selectedMonth > 10 && selectedMonth[0] === "0") {
        monthInput.value = monthInput.value.substring(1);
    }
}

function checkDays() {
    const selectedMonth = monthInput.value;
    const selectedDay = dayInput.value;

    //Check if the day is greater than 31 or less than 0
    if (selectedDay > 31 || selectedDay < 1) {
        dayInput.classList.add("alert-input");
        dayLabel.classList.add("alert-label");
        day_p.classList.remove("inactive");
    } else {
        dayInput.classList.remove("alert-input");
        dayLabel.classList.remove("alert-label");
        day_p.classList.add("inactive");
    }

    if (selectedDay < 10 && selectedDay[0] !== "0") {
        dayInput.value = "0" + selectedDay;
    }
    if (selectedDay > 10 && selectedDay[0] === "0") {
        dayInput.value = dayInput.value.substring(1);
    }
}

function calculateAge() {
    const selectedYear = yearInput.value;
    const selectedMonth = monthInput.value;
    const selectedDay = dayInput.value;

    let validatedDay = checkDaysOfMonth(
        parseInt(selectedMonth, 10),
        parseInt(selectedYear, 10)
    );

    //Check if the year is greater than the current year
    if (selectedYear > year) {
        yearInput.classList.add("alert-input");
        yearLabel.classList.add("alert-label");
        year_p.classList.remove("inactive");
    } else {
        yearInput.classList.remove("alert-input");
        yearLabel.classList.remove("alert-label");
        year_p.classList.add("inactive");
    }

    //Check how many days the month have
    if (selectedMonth.trim() !== "") {
        if (selectedDay > validatedDay || selectedDay < 1) {
            dayInput.classList.add("alert-input");
            dayLabel.classList.add("alert-label");
            day_p.classList.remove("inactive");
        } else {
            dayInput.classList.remove("alert-input");
            dayLabel.classList.remove("alert-label");
            day_p.classList.add("inactive");
        }
    }

    let ageYear = year - selectedYear;

    let ageMonth;
    if (selectedMonth < 12) {
        ageMonth = month - selectedMonth;
    } else {
        ageMonth = month;
    }

    let ageDay; /*  = day - selectedDay; */

    if (day < selectedDay) {
        ageDay = day + validatedDay - selectedDay;
        if (validatedDay === 29) {
            ageDay = ageDay + 2;
        }
        if (validatedDay === 28) {
            ageDay = ageDay + 3;
        }
        ageMonth = ageMonth - 1;
    } else {
        ageDay = day - selectedDay;
    }

    years.innerText = ageYear;
    months.innerText = ageMonth;
    days.innerText = ageDay;
}

function checkDaysOfMonth(month, year) {
    //Check if the month is February
    if (month === 2) {
        //check if the year is a leap year or not
        if (year % 4 === 0) {
            return 29;
        } else {
            return 28;
        }
    }
    //Check if the month have 30 days or 31 days
    if ([4, 6, 9, 11].includes(month)) {
        return 30;
    } else {
        return 31;
    }
}

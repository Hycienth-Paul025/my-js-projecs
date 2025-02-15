// for the clock

const sec = document.getElementById("seconds");
const min = document.getElementById("minutes");
const hrs = document.getElementById("hours");
const ampm = document.getElementById("amPm");

setInterval(() => {
  const currentTime = new Date();
  const hour = currentTime.getHours();

  hrs.innerHTML = (hour < 10 ? "0" : "") + hour;

  min.innerHTML =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();

  sec.innerHTML =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();

  ampm.innerHTML = hour >= 12 ? "PM" : "AM";
}, 1000);

// for the date

const mnth = document.getElementById("month");
const day = document.getElementById("day");
const dayNum = document.getElementById("date");
const year = document.getElementById("year");
const date = new Date();

year.textContent = date.getFullYear();
dayNum.textContent = date.getDate();
day.textContent = date.toLocaleString("en", {
  weekday: "long",
});

mnth.textContent = date.toLocaleString("en", {
  month: "long",
});

console.log(date.getDate());

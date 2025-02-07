// for the clock

const sec = document.getElementById("seconds");
const min = document.getElementById("minutes");
const hrs = document.getElementById("hours");

setInterval(() => {

    const currentTime = new Date();

    hrs.innerHTML= (currentTime.getHours() < 10?'0' : '') + currentTime.getHours();

    min.innerHTML= (currentTime.getMinutes() < 10?'0':'') + currentTime.getMinutes();

    sec.innerHTML= (currentTime.getSeconds() < 10?'0':'') + currentTime.getSeconds();

}, 1000);

// for the date 

const mnth = document.getElementById("month");
const day = document.getElementById("day");
const dayNum = document.getElementById("date");
const year = document.getElementById("year");
const date = new Date();

year.textContent = date.getFullYear();
dayNum.textContent = date.getDate();
day.textContent = date.toLocaleString("en",{
     weekday: "long"
})

mnth.textContent = date.toLocaleString("en",{
    month: "long"
})

console.log(date.getDate());

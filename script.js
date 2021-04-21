const checker = document.getElementById("checker");
const birthday = document.getElementById("birthday");
const years = document.getElementById("years");
const bdate = document.getElementById("bdate");
const age = document.getElementById("age");

let bday;
let year;
let newYear;
let newAge;

birthday.addEventListener("change", ageChecker);
bdate.addEventListener("change", yearChecker);

function ageChecker() {
    bday = new Date(birthday.value);
    if(bday < Date.now()) {
        year = Math.floor((Date.now() - bday)/31557600000);
        years.innerText = `You are ${year} years old`;
    }else {
        years.innerText = `You are 0 years old`;
    }
}

function yearChecker() {
    let yearDate = new Date(bdate.value);

    if(yearDate < bday) {
        age.innerText = `You were not born by then`;
        // console.log();
    }else if(yearDate < Date.now()) {
        newAge = Math.floor((yearDate - bday)/31557600000);
        age.innerText = `You were ${newAge} years old as at ${yearDate.toISOString().substring(0, 10)}`;
    }else {
        newAge = Math.floor((yearDate - bday)/31557600000);
        age.innerText = `You will be ${newAge} years old on ${yearDate.toISOString().substring(0, 10)}`;
    }

}
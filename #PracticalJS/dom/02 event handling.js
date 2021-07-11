alert("Hello World1");

function showAlert() {
    alert("Howdy World!");
}

const clickMeBtn = document.querySelector("#btn-click-me");
clickMeBtn.onclick = () => {
    console.log("Button Clicked!");
}

clickMeBtn.onmouseover = () => {
    console.log("Mouse Over");
}

const box1 = document.querySelector("#box1")
box1.addEventListener("click", function() {
    console.log("Clicked");
});

clickMeBtn.onclick = (event) => {
    event.stopPropagation();
    console.log("Button Clicked!");
}

clickMeBtn.addEventListener("click", function() {
    console.log("Another Message");
})

clickMeBtn.onclick = (event) => {
    event.stopPropagation();
    event.stopImmediatePropagation();
    console.log("Button Clicked!");
}

const link = document.querySelector("#link");
link.addEventListener("click", function(event) {
    event.preventDefault();
})

const box4 = document.querySelector("#box4");
box4.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        console.log("LI element clicked");
    }
})

const inputs = document.querySelectorAll("input");
const submitBtn = document.querySelector("button[type='submit']");

inputs[0].addEventListener('change', (event) => {
    console.log(event.target.value);
})

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if ((inputs[0].value === '') || (inputs[1].value === '')) {
        alert("Input Field Can't be Empty");
    }
    else {
        let input0Data = inputs[0].value;
        let input1Data = inputs[1].value;
        console.log(`Your name: ${input0Data}\nYour Email: ${input1Data}`);
    }
})

document.addEventListener("keydown", (event) => {
    console.log("Key down event");
    console.log(event.key);
    console.dir(event);
})

document.addEventListener("keypress", () => {
    console.log("Key press event");
})

document.addEventListener("keyup", () => {
    console.log("Key up event");
})

submitBtn.addEventListener("mouseover", () => {
    console.log("Mouse Over Event");
})

submitBtn.addEventListener("mouseout", () => {
    console.log("Mouse Out Event");
})

window.addEventListener("load", () => {
    console.log("Entire Page is Loaded");
})

window.addEventListener("DOMContentLoaded", () => {
    console.log("HTML is Loaded");
})


var img1 = document.querySelector("img[alt='valid-img']");
var img2 = document.querySelector("img[alt='invalid-img']");

img1.addEventListener("load", () => {
    console.log("Image one is successfully loaded");
})

img2.addEventListener("error", () => {
    console.log("Image two cannot be found");
})
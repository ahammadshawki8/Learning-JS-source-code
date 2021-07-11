let start_btn = document.querySelector("#start");
let count_btn = document.querySelector("#count");
let score = document.querySelector("#score");

count_btn.disabled = true;
start_btn.addEventListener("click", () => {
    count_btn.disabled = false;
    startCounting();
})

count_btn.addEventListener("click", () => {
    let current_point = Number(score.innerHTML);
    let new_point = current_point + 1;
    score.innerHTML = new_point;
})


function startCounting() {
    setTimeout(() => {
        if (score.innerHTML >= 10) {
            alert("You Won :)");
        } else {
            alert("You Lost :(");
        }
        score.innerHTML = "0";
        count_btn.disabled = true;
    }, 2000)
}
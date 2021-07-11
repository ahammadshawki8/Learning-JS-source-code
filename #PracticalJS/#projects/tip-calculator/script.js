let calcForm = document.querySelector(".calc");

calcForm.addEventListener("change", () => {
    let billValue = document.querySelector("#billValue").value;
    let tipValue = document.querySelector("#tipValue").value;
    let personValue = document.querySelector("#personValue").value;

    let validatation = ([billValue, tipValue, personValue].map(e => validateInput(e))).every(e => e === true);
    if (validatation) {
        let billValueNum = parseFloat(billValue);
        let tipValueNum = parseFloat(tipValue);
        let personValueNum = parseInt(personValue);
    
        let ansTip = document.querySelector("#ansTip");
        let ansTotal = document.querySelector("#ansTotal");
    
        let calc_tip = (billValueNum * (tipValueNum/100))/personValueNum;
        let calc_total = billValueNum/personValueNum + calc_tip;

        ansTip.innerHTML = "BDT " + calc_tip.toFixed(2);
        ansTotal.innerHTML = "BDT " + calc_total.toFixed(2);
    }
})

function validateInput(e) {
    return (/^\d+$/).test(e);
}
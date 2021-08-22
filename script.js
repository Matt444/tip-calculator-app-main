const billInput = document.getElementById("input_bill");
const peopleInput = document.getElementById("input_people");
const customInput = document.getElementById("input_custom");
const btns = document.getElementsByClassName("calculator__button");
const resetBtn = document.getElementById("calculator__results_reset");
const tipOutput = document.getElementById("output_tip");
const totalOutput = document.getElementById("output_total");

// input
let bill = 0;
let numberOfPeople = 0;
let tip = 0;

billInput.oninput = () => {
    bill = billInput.value;
    refreshResults();
};

peopleInput.oninput = () => {
    numberOfPeople = peopleInput.value;
    if (numberOfPeople > 0) {
        peopleInput.classList.remove("calculator__input--error");
        document
            .getElementsByClassName("calculator__input_people_error")[0]
            .classList.remove("calculator__input_people_error--show");
    }
    refreshResults();
};

customInput.oninput = () => {
    tip = customInput.value;
    resetButtons();
    refreshResults();
};

resetBtn.addEventListener("click", () => {
    resetAll();
});

resetButtons = () => {
    for (let m = 0; m < btns.length; m++) {
        btns[m].classList.remove("calculator__button--active");
    }
};

btnsValues = [5, 10, 15, 25, 50];
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", () => {
        resetButtons();
        btns[i].classList.add("calculator__button--active");
        tip = btnsValues[i];
        refreshResults();
    });
}

refreshResults = () => {
    if (numberOfPeople > 0) {
        const tipAmountPerPerson = ((tip / 100.0) * bill) / numberOfPeople;
        const totalPerPerson = bill / numberOfPeople + tipAmountPerPerson;
        tipOutput.innerText = Math.round(tipAmountPerPerson * 100) / 100;
        totalOutput.innerText = Math.round(totalPerPerson * 100) / 100;
    } else {
        peopleInput.classList.add("calculator__input--error");
        document
            .getElementsByClassName("calculator__input_people_error")[0]
            .classList.add("calculator__input_people_error--show");
    }
};

resetAll = () => {
    resetButtons();
    billInput.value = "";
    customInput.value = "";
    peopleInput.value = "";
    tipOutput.innerText = "0.00";
    totalOutput.innerText = "0.00";
    bill = 0;
    numberOfPeople = 0;
    tip = 0;
};

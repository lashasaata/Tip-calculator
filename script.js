//code to get input divs and inputs for set active borders and focus.
const billDiv = document.getElementById("bill");
const billInput = document.getElementById("billInput");

const peopleInput = document.getElementById("peopleInput");
const peopleAmount = document.getElementById("peopleAmount");

const costumPercentage = document.getElementById("percentage");
const percentInput = document.getElementById("percentInput");

const errorP = document.getElementById("error");

const tipButtons = document.getElementsByClassName("tipBut");

const resultPs = document.getElementsByClassName("resultPs");

const resetButton = document.getElementById("reset");
// variables to open and close input divs
let percentInput_dor = "closed";
let peopleInput_dor = "closed";
let billDiv_dor = "closed";

percentInput.addEventListener("click", () => {
  percentInput.style = "border: 2px solid #26C2AE;";
  costumPercentage.focus();
  percentInput_dor = "opened";
  if (billDiv_dor !== "closed" || peopleInput_dor !== "closed") {
    billDiv.style.border = "none";
    peopleInput.style.border = "none";
    billDiv_dor = "closed";
    peopleInput_dor = "closed";
  }
});

peopleInput.addEventListener("click", () => {
  peopleAmount.focus();
  peopleInput.style = "border: 2px solid #26C2AE;";
  peopleInput_dor = "opened";
  if (billDiv_dor !== "closed" || percentInput_dor !== "closed") {
    billDiv.style.border = "none";
    percentInput.style.border = "none";
    billDiv_dor = "closed";
    percentInput_dor = "closed";
  }
});

billDiv.addEventListener("click", () => {
  billInput.focus();
  billDiv.style = "border: 2px solid #26C2AE;";
  billDiv_dor = "opened";
  if (peopleInput_dor !== "closed" || peopleInput_dor !== "closed") {
    peopleInput.style.border = "none";
    percentInput.style.border = "none";
    percentInput_dor = "closed";
    peopleInput_dor = "closed";
  }
});
// setting active inputs and placeholder
billInput.addEventListener("input", (event) => {
  let input = event.target.value;
  let inputNum = Number(input);
  let inputArr = Array.from(input);
  if (inputArr.length > 0) {
    billInput.style.opacity = "1";
  }
  if (event.target.value == "") {
    billAmount = 0;
  } else {
    billAmount = parseFloat(event.target.value);
  }
  // if inut is negative sets red color
  if (billAmount < 0) {
    billDiv.style.border = "2px solid #E17052";
  } else {
    billDiv.style.border = "2px solid #26C2AE";
  }
  // checks if inputs are negative
  if (billAmount >= 0 && tipAmount >= 0 && peoplesAmount >= 0) {
    calculation();
  }
});

costumPercentage.addEventListener("input", (event) => {
  let inputPercent = event.target.value;
  let inputNum = inputPercent;
  let inputPercentArr = Array.from(inputPercent);
  if (inputPercentArr.length > 0) {
    costumPercentage.style.color = "#00474B";
  }
  costumTip = inputNum;

  // if inut is negative sets red color
  if (tipAmount < 0) {
    percentInput.style.border = "2px solid #E17052";
  } else {
    percentInput.style.border = "2px solid #26C2AE";
  }

  tipAmount = parseFloat(costumPercentage.value);
  if (billAmount >= 0 && tipAmount >= 0 && peoplesAmount >= 0) {
    calculation();
  }
});
costumPercentage.addEventListener("focus", (event) => {
  costumPercentage.placeholder = "";
  costumPercentage.style.opacity = "1";
  if (!event.target.value == "") {
    tipAmount = parseFloat(event.target.value);
  }
  buttonsArr[index].style.backgroundColor = "#00474B";
  buttonsArr[index].style.color = "#FFF";
});
costumPercentage.addEventListener("blur", () => {
  costumPercentage.placeholder = "Costum";
});

peopleAmount.addEventListener("input", (event) => {
  let input = event.target.value;
  let inputNum = Number(input);
  let inputArr = Array.from(input);
  if (inputArr.length > 0) {
    peopleAmount.style.color = "#00474B";
    peopleAmount.style.opacity = "1";
  }
  // if inut is negative sets red color
  if (peoplesAmount < 0) {
    peopleInput.style.border = "2px solid #E17052";
  } else {
    peopleInput.style.border = "2px solid #26C2AE";
  }

  if (inputNum == 0) {
    peopleInput.style.border = "2px solid #E17052";
    errorP.style.display = "block";
  } else {
    peopleInput.style.border = "2px solid #26C2AE";
    errorP.style.display = "none";
  }
  peoplesAmount = parseInt(event.target.value);
  if (billAmount >= 0 && tipAmount >= 0 && peoplesAmount >= 0) {
    calculation();
  }
});
// activate buttons
let buttonsArr = Array.from(tipButtons);
let index = 5;
buttonsArr.forEach((element) => {
  element.addEventListener("click", (event) => {
    let exactElement = event.target;
    let activeIndex = buttonsArr.indexOf(exactElement);
    activateButton(activeIndex, exactElement);
    percentInput.style.border = "none";
    costumPercentage.style.opacity = "0.5";

    tipAmount = parseFloat(event.target.innerText);
    calculation();
  });
});
function activateButton(activeIndex, exactElement) {
  if (index !== activeIndex) {
    exactElement.style.backgroundColor = "#9FE8DF";
    exactElement.style.color = "#00474B";
    if (index >= 0 && index <= 4) {
      buttonsArr[index].style.backgroundColor = "#00474B";
      buttonsArr[index].style.color = "#FFF";
    }
    index = activeIndex;
  } else {
    exactElement.style.backgroundColor = "#00474B";
    exactElement.style.color = "#FFF";
    index = 5;
  }
}
// find result
let psArr = Array.from(resultPs);

let billAmount = 0;
let tipAmount = 0;
let peoplesAmount = 0;

let tipPerPerson = 0;
let totalPerPerson = 0;

function calculation() {
  if (!peoplesAmount || !tipAmount) {
    psArr[0].innerText = "$0.00";
    psArr[1].innerText = "$0.00";
  } else {
    tipPerPerson = (billAmount * tipAmount) / 100 / peoplesAmount;
    totalPerPerson = billAmount / peoplesAmount + tipPerPerson;

    psArr[0].innerText = `$${tipPerPerson.toFixed(2)}`;
    psArr[1].innerText = `$${totalPerPerson.toFixed(2)}`;
  }
  //for active hover on reset button
  if (billAmount > 0 || tipAmount > 0 || peoplesAmount > 0) {
    resetButton.style.backgroundColor = "#26C2AE";
    resetButton.style.opacity = "1";
  } else {
    resetButton.style.backgroundColor = "#0D686D";
    resetButton.style.opacity = "0.35";
  }
  // console.log(tipAmount);
  // console.log(billAmount);
  // console.log(peoplesAmount);
}
// reset button

function reset() {
  billDiv.style.border = "none";
  billInput.style.opacity = 0.35;

  billInput.value = "";
  costumPercentage.value = "";
  peopleAmount.value = "";

  percentInput.style.border = "none";
  costumPercentage.style.color = "#547878";

  peopleInput.style.border = "none";
  peopleAmount.style.opacity = "0.35";

  errorP.style.display = "none";

  psArr[0].textContent = "$0.00";
  psArr[1].textContent = "$0.00";

  resetButton.style.backgroundColor = "#0D686D";
  resetButton.style.opacity = "0.35";

  buttonsArr[index].style.backgroundColor = "#00474B";
  buttonsArr[index].style.color = "#FFF";
}

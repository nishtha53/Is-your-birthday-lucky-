const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumber = document.querySelector("#check-number");
const outputBox = document.querySelector("#outputArea");

function compareValues(sum, luckyNumber) {
    // console.log(sum,luckyNumber);
    if (sum % luckyNumber === 0) {
        outputBox.innerText = "Your Birthday is lucky 🚀";
    }
    else {
       outputBox.innerText = "Your birthday is  not lucky 🤒" ;
    }
}

function checkNumberIsLucky() {
    const birthDate = dateOfBirth.value;
    const sum = calculateSum(birthDate);
    if(sum&&birthDate)
    compareValues(sum, luckyNumber.value);
    else
    outputBox.innerText = "Please Enter both the fields";
}

function calculateSum(birthDate) {
    birthDate = birthDate.replaceAll("-", "");
    let sum = 0;
    for (let index = 0; index < birthDate.length; index++) {
        sum = sum + Number(birthDate.charAt(index));
    }
    return sum;
}


checkNumber.addEventListener("click", checkNumberIsLucky);
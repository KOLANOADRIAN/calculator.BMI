console.log("Cześć miło że zaglądasz");

let form__field_hight = document.querySelector(".form__fieldJshight");
let form__field_weight = document.querySelector(".form__fieldJsweight");
let form = document.querySelector(".form")
let text = document.querySelector(".form__text");

// console.log(text);
form__field_hight.focus();

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let hight = form__field_hight.value;
    let weight = form__field_weight.value;

    // console.log(hight, weight);
    let BMI = weight / ((hight / 100) ** 2);

    text.innerText = (`Wartość: ${BMI.toFixed(2)}`);

    let text__BMI = document.querySelector(".form__textBMI");
   

    console.log();

    if (BMI > 18 && BMI < 25) {
        text__BMI.innerText = " WARTOŚĆ PRAWIDŁOWA ";
    }

});




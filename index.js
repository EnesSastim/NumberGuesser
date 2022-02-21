let submit = document.querySelector("button[type=submit]");
let num = Math.floor(Math.random()*100)+1;
let arr = [1,100];
let count = 0;

submit.addEventListener("click", () => {
    let h1 = document.getElementById("h1");
    let h1a = document.getElementById("h1a");
    let h1b = document.getElementById("h1b");
    let oor = document.getElementById("oor");
    let p = document.getElementById("p");
    let number = document.querySelector("#number");
    number = parseInt(number.value);
    oor.innerHTML = "";
    numberguess(number);
    h1a.innerHTML = arr[0];
    h1b.innerHTML = arr[1];
    p.innerHTML = count;
});

const numberguess = (guess) => {
    if (guess > arr[1] || guess < arr[0]) {
        oor.innerHTML = "Out Of Range! ";
    } else if (guess > num) {
        arr[1] = guess - 1;
        count++;
    } else if (guess < num) {
        arr[0] = guess + 1;
        count++;
    } else if (guess == num) {
        count++;
        h1.innerHTML = `You Found it! The Number was ${num}`;
    }
};
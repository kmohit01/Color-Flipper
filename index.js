const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "#F1f5f8"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const div = document.querySelector("main")

btn.addEventListener("click", function () {
    console.log(document.body.main);
    const randomNumber = getRandomNumber();
    // console.log(randomNumber);

    div.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length); 
}

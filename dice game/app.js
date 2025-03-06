const randNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randNumber1);

const diceNumber ="dice${randNumber1}.jpg";
console.log(diceNumber);

const diceImage = "images/${diceNumber}";
console.log(diceImage);

const image = document.querySelector(".img1");

image.setAttribute("src", diceImage);


const randNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randNumber2);

const diceNumber2 ="dice${randNumber2}.jpg";
console.log(diceNumber);

const diceImage2 = "images/${diceNumber2}";
console.log(diceImage);

const image2 = document.querySelector(".img2");

image2.setAttribute("src", diceImage2);

if (randNumber1 > randNumber2) {
    document.querySelector("h1").innerHTML = "player 1 won!!";
} else if (randNumber2 > randNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Won!!\
    ";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}
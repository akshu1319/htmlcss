const randNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randNumber1);

const diceNumber1 =`dice${randNumber1}.jpg`;
console.log(diceNumber1);

const diceImage1 = `images/${diceNumber1}`;
console.log(diceImage1);

const image1 = document.querySelector(".img1");

image1.setAttribute("src", diceImage1);


const randNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randNumber2);

const diceNumber2 =`dice${randNumber2}.jpg`;
console.log(diceNumber2);

const diceImage2 = `images/${diceNumber2}`;
console.log(diceImage2);

const image2 = document.querySelector(".img2");

image2.setAttribute("src", diceImage2);

if (randNumber1 > randNumber2) {
    document.querySelector("h1").innerHTML = "player 1 won!!";
} else if (randNumber2 > randNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Won!!";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function Roll(){

    var randomNumber1 = getRandomIntInclusive(1, 6);
    var randomNumber2 = getRandomIntInclusive(1, 6);


    var src1 = String("assets/dice" + randomNumber1 + ".png");
    var src2 = String("assets/dice" + randomNumber2 + ".png");


    document.querySelectorAll("img")[0].setAttribute("src", src1);
    document.querySelectorAll("img")[1].setAttribute("src", src2);


    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩 Player1 Wins!"
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "Player2 Wins! 🚩"
    } else {
        document.querySelector("h1").innerHTML = "🚩 Draw! 🚩"
    }

}

document.querySelector("button").addEventListener("click", Roll);


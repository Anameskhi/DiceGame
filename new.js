var randomNum1 = Math.floor(Math.random() * 6) + 1
var randomNum2 = Math.floor(Math.random() * 6) + 1



if(randomNum1 > randomNum2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 is winner"
}else if(randomNum1 < randomNum2){
  document.querySelector("h1").innerHTML = " Player 2 is winner 🚩"

}else{
  document.querySelector("h1").innerHTML = "Draw!"
}

var randomDiceImage1 = "images/" + "dice" + randomNum1 + ".png"
 var image1 = document.querySelectorAll("img")[0]
 image1.setAttribute("src", randomDiceImage1)

var randomDiceImage2 = "images/" + "dice" + randomNum2 + ".png"
var image2 = document.querySelectorAll("img")[1]
 image2.setAttribute("src", randomDiceImage2)
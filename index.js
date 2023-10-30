function alertFun() {
  this.style.color = "white";
  setTimeout(() => {
    this.style.color="red"
  }, 100);
  var buttonInnerHTML = this.innerHTML;
  switch (buttonInnerHTML) {
    case "w":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;
    case "s":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var music3 = new Audio("./sounds/tom-2.mp3");
      music3.play();
      break;
    case "k":
      var music4 = new Audio("./sounds/tom-3.mp3");
      music4.play();
      break;
    case "l":
      var music5 = new Audio("./sounds/tom-4.mp3");
      music5.play();
      break;
    default:
      break;
  }
  animation(buttonInnerHTML);
  setTimeout(removeAnimation, 100, buttonInnerHTML);
}


function onkey(e) {
  var keyPress = e.key;
  document.querySelector("." + keyPress).style.color = "white";
  setTimeout(() => {
    document.querySelector("." + keyPress).style.color="red"
  }, 100);
  animation(keyPress);
  setTimeout(removeAnimation, 100, keyPress);
  switch (keyPress) {
    case "w":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;
    case "s":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var music3 = new Audio("./sounds/tom-2.mp3");
      music3.play();
      break;
    case "k":
      var music4 = new Audio("./sounds/tom-3.mp3");
      music4.play();
      break;
    case "l":
      var music5 = new Audio("./sounds/tom-4.mp3");
      music5.play();
      break;

    default:
      break;
  }
}



function animation(key) {
  document.querySelector("." + key).classList.add("pressed");
}


function removeAnimation(key) {
  document.querySelector("." + key).classList.remove("pressed");
}
for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", alertFun);
}
document.addEventListener("keypress", onkey);

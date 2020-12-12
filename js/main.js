"use strict";

function spin() {
  var spinResult;
  var intRandom = Math.floor(Math.random() * 4 + 1);
  //console.log(intRandom);

  switch (intRandom) {
    case 1:
      spinResult = "נ - Nun - Nothing happens!";
      break;
    case 2:
      spinResult = "ג - Gimel - You win everything!";
      break;
    case 3:
      spinResult = "ה - Hei - You win half the pot!";
      break;
    case 4:
      spinResult = "ש - Shin - You lose! Put 1 in the pot!";
      break;
    default:
      spinResult = "error";
      break;
  } // end switch

  //console.log(spinResult);

  return spinResult;
} // end func

function spinDreidel() {
  var spinResult = spin();
  //console.log(spinResult);

  var feedback = "";
  feedback = "<p>Spinning...</p>";
  document.getElementById("spinResult").innerHTML = feedback;

  setTimeout(function () {
    //console.log("Delay...");
    feedback = "<p>" + spinResult + "</p>";
    document.getElementById("spinResult").innerHTML = feedback;
  }, 2000);
} // end func

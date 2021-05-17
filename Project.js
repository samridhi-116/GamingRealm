$("#prePhase").hide();
$("#gameWindow").hide();
$("#forest").hide();
$("#setting").hide();
$("#chatbot").hide();
$("#saved").hide();
$(".RegPage").hide();
settingsHider();
$("#aboutDev").show();
$("#log1").click(function () {
  $(".LoginPage").show();
  $(".RegPage").hide();
});
function hider() {
  $("#prePhase").hide();
  $("#profile").hide();
  $("#chatbot").hide();
  $("#setting").hide();
  $("#saved").hide();
}
function settingsHider() {
  $("#Themes").hide();
  $("#Fonts").hide();
  $("#aboutDev").hide();
}
$("#sett1").click(function () {
  settingsHider();
  $("#Themes").show();
});
$("#sett2").click(function () {
  settingsHider();
  $("#Fonts").show();
});
$("#sett3").click(function () {
  settingsHider();
  $("#aboutDev").show();
});
$("#clean").click(function () {
  hider();
  $("#prePhase").show();
});
$("#clean1").click(function () {
  hider();
  $("#saved").show();
});
$("#clean2").click(function () {
  hider();
  $("#chatbot").show();
});
$("#clean3").click(function () {
  hider();
  $("#profile").show();
});
$("#clean4").click(function () {
  hider();
  $("#setting").show();
});

$("#reg1").click(function () {
  $(".LoginPage").hide();
  $(".RegPage").show();
});

//SlideShow js
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 4000);
}
//Games next previous
di = 0;
divarr = ["show1", "show2", "show3"];
function hide() {
  document.getElementById(divarr[0]).style.display = "none";
  document.getElementById(divarr[1]).style.display = "none";
  document.getElementById(divarr[2]).style.display = "none";
}
document.getElementById("gamePrev").addEventListener("click", function () {
  if (di > 0) {
    di = di - 1;
    console.log(di);
    hide();
    document.getElementById(divarr[di]).style.display = "flex";
  } else {
    alert("no more clicks possible");
  }
});
document.getElementById("gameNxt").addEventListener("click", function () {
  if (di < 2) {
    di = di + 1;
    console.log(di);
    hide();
    document.getElementById(divarr[di]).style.display = "flex";
  } else {
    alert("no more clicks possible");
  }
});
//Info about the games
$("document").ready(function () {
  GameInfoGo();
  $("#about").show();
  $("#dino").click(function () {
    GameInfoGo();
    $("#dino1").show();
  });
  $("#tictac").click(function () {
    GameInfoGo();
    $("#tic1").show();
  });
  $("#cricket").click(function () {
    GameInfoGo();
    $("#cricket1").show();
  });
  $("#dice").click(function () {
    GameInfoGo();
    $("#dice1").show();
  });
  $("#guessNumber").click(function () {
    GameInfoGo();
    $("#guess1").show();
  });
  $("#sumo").click(function () {
    GameInfoGo();
    $("#sumo1").show();
  });
  $("#keybreak").click(function () {
    GameInfoGo();
    $("#keyboard1").show();
  });

  $("#dice").click(function () {
    GameInfoGo();
    $("#dice1").show();
  });
  $("#ScrambleWords").click(function () {
    GameInfoGo();
    $("#hangman1").show();
  });
  $("#story").click(function () {
    GameInfoGo();
    $("#story1").show();
  });
});
$("#closeWin").click(function () {
  if (confirm("Do you want to Quit this Game ?")) {
    $("#gameWindow").hide();
    $("#maindiv").show();
    $("#gameFrame").attr("src", "");
  }
});
//This function is used to hide all the divs in th document;
function GameInfoGo() {
  $("#about").hide();
  $("#tic1").hide();
  $("#dino1").hide();
  $("#dice1").hide();
  $("#cricket1").hide();
  $("#guess1").hide();
  $("#sumo1").hide();
  $("#keyboard1").hide();
  $("#hangman1").hide();
  $("#story1").hide();
  $("#kidsquiz1").hide();
  $("#stack1").hide();
}
//genre clicks
GenHide();
$("#KidsG").show();
$("#olive1").click(function () {
  GenHide();
  $("#KidsG").show();
});
$("#olive2").click(function () {
  GenHide();
  $("#SingleP").show();
});
$("#olive3").click(function () {
  GenHide();
  $("#MultiP").show();
});
$("#olive4").click(function () {
  GenHide();
  $("#MindG").show();
});
function GenHide() {
  $("#KidsG").hide();
  $("#SingleP").hide();
  $("#MindG").hide();
  $("#MultiP").hide();
}

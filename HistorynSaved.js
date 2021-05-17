//History Tab
// click and turn the apps onto work on the apps
hist = 0;
$("#dinobtn").click(function () {
  $("#gameWindow").show();
  $("#maindiv").hide();
  $("#gameFrame").attr("src", "Games/Dino game/one.html");
  if (hist < 5) {
    var teft = $("<div id='clover' class='row'></div>").html(
      "<img id='ico' src='imgs/icons/dino.png' alt=''><p id='histtile'>Dino Run</p>"
    );
    $("#history").prepend(teft);
    hist = hist + 1;
  } else {
    $("#history").find("div").last().remove();
    var teft = $("<div id='clover' class='row'></div>").html(
      "<img id='ico' src='imgs/icons/dino.png' alt=''><p id='histtile'>Dino Run</p>"
    );
    $("#history").prepend(teft);
    hist = hist + 1;
  }
});
$("#rtdbtn").click(function () {
  $("#gameWindow").show();
  $("#maindiv").hide();
  $("#gameFrame").attr("src", "Games/Roll The Dice/index.html");
  if (hist < 5) {
    var teft = $("<div id='clover' class='row'></div>").html(
      "<img id='ico' src='imgs/icons/rolldice.png' alt=''/><p id='histtile'>Roll The Dice</p>"
    );
    $("#history").prepend(teft);
    hist = hist + 1;
  } else {
    $("#history").find("div").last().remove();
    var teft = $("<div id='clover' class='row'></div>").html(
      "<img id='ico' src='imgs/icons/rolldice.png' alt=''/><p id='histtile'>Roll The Dice</p>"
    );
    $("#history").prepend(teft);
    hist = hist + 1;
  }
});
$("#cricketbtn").click(function () {
  $("#gameWindow").show();
  $("#maindiv").hide();
  $("#gameFrame").attr("src", "Games/HandCricket/index.html");
  if (hist < 5) {
    var teft = $("<div id='clover' class='row'></div>").html(
      "<img id='ico' src='imgs/icons/cricket.jpeg' alt=''/><p id='histtile'>Hand Cricket</p>"
    );
    $("#history").prepend(teft);
    hist = hist + 1;
  } else {
    $("#history").find("div").last().remove();
    var teft = $("<div id='clover' class='row'></div>").html(
      "<img id='ico' src='imgs/icons/cricket.jpeg' alt=''/><p id='histtile'>Hand Cricket</p>"
    );
    $("#history").prepend(teft);
    hist = hist + 1;
  }
});
$("#Gtnbtn").click(function () {
  $("#gameWindow").show();
  $("#maindiv").hide();
  $("#gameFrame").attr("src", "Games/GuessTheNumber/index.html");
  if (hist < 5) {
    var teft = $("<div id='clover' class='row'></div>").html(
      "<img id='ico' src='imgs/icons/num.jpg' alt=''/><p id='histtile'>Guess Number</p>"
    );
    $("#history").prepend(teft);
    hist = hist + 1;
  } else {
    $("#history").find("div").last().remove();
    var teft = $("<div id='clover' class='row'></div>").html(
      "<img id='ico' src='imgs/icons/num.jpg' alt=''/><p id='histtile'>Guess Number</p>"
    );
    $("#history").prepend(teft);
    hist = hist + 1;
  }
});
$("#sumobtn").click(function () {
  $("#gameWindow").show();
  $("#maindiv").hide();
  $("#gameFrame").attr("src", "Games/SumoGame/Sumo/Compete.html");
  if (hist < 5) {
    var teft = $("<div id='clover' class='row'></div>").html(
      "<img id='ico' src='imgs/icons/sumo.png' alt=''/><p id='histtile'>Sumo</p>"
    );
    $("#history").prepend(teft);
    hist = hist + 1;
  } else {
    $("#history").find("div").last().remove();
    var teft = $("<div id='clover' class='row'></div>").html(
      "<img id='ico' src='imgs/icons/sumo.png' alt=''/><p id='histtile'>Sumo</p>"
    );
    $("#history").prepend(teft);
    hist = hist + 1;
  }
});
$("#tacticbtn").click(function () {
  $("#gameWindow").show();
  $("#maindiv").hide();
  $("#gameFrame").attr("src", "Games/TicTacToe/index.html");
  if (hist < 5) {
    var teft = $("<div id='clover' class='row'></div>").html(
      "<img id='ico' src='imgs/icons/TicTacToe.png' alt=''><p id='histtile'>Tic Tac Toe</p>"
    );
    $("#history").prepend(teft);
    hist = hist + 1;
  } else {
    $("#history").find("div").last().remove();
    var teft = $("<div id='clover' class='row'></div>").html(
      "<img id='ico' src='imgs/icons/TicTacToe.png' alt=''><p id='histtile'>Tic Tac Toe</p>"
    );
    $("#history").prepend(teft);
    hist = hist + 1;
  }
});
$("#kbbtn").click(function () {
  $("#gameWindow").show();
  $("#maindiv").hide();
  $("#gameFrame").attr("src", "Games/Kids garden/index.html");
  if (hist < 5) {
    var teft = $("<div id='clover' class='row'></div>").html(
      "<img id='ico' src='imgs/icons/kidsgarden.png' alt=''><p id='histtile'>Kids Garden</p>"
    );
    $("#history").prepend(teft);
    hist = hist + 1;
  } else {
    $("#history").find("div").last().remove();
    var teft = $("<div id='clover' class='row'></div>").html(
      "<img id='ico' src='imgs/icons/kidsgarden.png' alt=''><p id='histtile'>Kids Garden</p>"
    );
    $("#history").prepend(teft);
    hist = hist + 1;
  }
});
$("#wsbtn").click(function () {
  $("#gameWindow").show();
  $("#maindiv").hide();
  $("#gameFrame").attr("src", "Games/Word Scramble/wordScramble.html");
  if (hist < 5) {
    var teft = $("<div id='clover' class='row'></div>").html(
      "<img id='ico' src='imgs/icons/words.png' alt=''><p id='histtile'>Scrambled Words</p>"
    );
    $("#history").prepend(teft);
    hist = hist + 1;
  } else {
    $("#history").find("div").last().remove();
    var teft = $("<div id='clover' class='row'></div>").html(
      "<img id='ico' src='imgs/icons/words.png' alt=''><p id='histtile'>Scrambled Words</p>"
    );
    $("#history").prepend(teft);
    hist = hist + 1;
  }
});
$("#storybtn").click(function () {
  $("#gameWindow").show();
  $("#maindiv").hide();
  $("#gameFrame").attr("src", "Games/Story/index.html");
  if (hist < 5) {
    var teft = $("<div id='clover' class='row'></div>").html(
      "<img id='ico' src='imgs/icons/storyboard.jpg' alt=''><p id='histtile'>Scrambled Words</p>"
    );
    $("#history").prepend(teft);
    hist = hist + 1;
  } else {
    $("#history").find("div").last().remove();
    var teft = $("<div id='clover' class='row'></div>").html(
      "<img id='ico' src='imgs/icons/storyboard.jpg' alt=''><p id='histtile'>Scrambled Words</p>"
    );
    $("#history").prepend(teft);
    hist = hist + 1;
  }
});
$("#quizbtn").click(function () {
  $("#gameWindow").show();
  $("#maindiv").hide();
  $("#gameFrame").attr("src", "Games/Kid's Quiz/index.html");
  if (hist < 5) {
    var teft = $("<div id='clover' class='row'></div>").html(
      "<img id='ico' src='imgs/icons/download.jpg' alt=''/><p id='histtile'>Kids Quiz</p>"
    );
    $("#history").prepend(teft);
    hist = hist + 1;
  } else {
    $("#history").find("div").last().remove();
    var teft = $("<div id='clover' class='row'></div>").html(
      "<img id='ico' src='imgs/icons/download.jpg' alt=''/><p id='histtile'>Kids Quiz</p>"
    );
    $("#history").prepend(teft);
    hist = hist + 1;
  }
});
$("#stackbtn").click(function () {
  $("#gameWindow").show();
  $("#maindiv").hide();
  $("#gameFrame").attr("src", "Games/Stack/index.html");
  if (hist < 5) {
    var teft = $("<div id='clover' class='row'></div>").html(
      "<img id='ico' src='imgs/icons/tower.jpg' alt=''/><p id='histtile'>Stack Tower</p>"
    );
    $("#history").prepend(teft);
    hist = hist + 1;
  } else {
    $("#history").find("div").last().remove();
    var teft = $("<div id='clover' class='row'></div>").html(
      "<img id='ico' src='imgs/icons/tower.jpg' alt=''/><p id='histtile'>Stack Tower</p>"
    );
    $("#history").prepend(teft);
    hist = hist + 1;
  }
});

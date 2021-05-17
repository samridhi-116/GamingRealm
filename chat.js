let ques = ["....", "Hey", "I'm the Guide Bot"];
let genre = ["Multi Player", "Kids Section", "Single Player", "Mind Games"];
let len = ques.length;
let gen = genre.length;
let j = 0;
let multi = false;
let single = false;
let kids = false;
let mind = false;
counti(0, len, gen, genre);
$("document").ready(function () {
  $("#senttext").keypress(function (event) {
    if (event.keyCode == 13) {
      input = this.value;
      input = check(input);
      var txt2 = $("<div class='human'></div>").html(input);
      $("#chatwindow").append(txt2);
      if (j == 0) {
        if (isLetter(input)) {
          input = input.split(" ");
          input = input[0];
          input = input.toUpperCase();
          disablechat();
          setTimeout(function () {
            enablechat();
          }, 1200);
          if (input == "MULTI") {
            var txt2 = $("<div class='bot'></div>").html(
              "<ol>Here are Some of Our Multi Player games  <li>Sumo</li> <li>Roll A Dice</li> <li>Keyboard Breaker</li>Enter '0' or 'Back' To Go back to Genre Selection</ol> "
            );
            $("#chatwindow").append(txt2);
            multi = true;
            single = false;
            kids = false;
            mind = false;
            j = j + 1;
          } else if (input == "SINGLE") {
            var txt2 = $("<div class='bot'></div>").html(
              "<ol>Here are Some of Our Single Player games <li>Dino Game</li> <li>Tic Tac Toe</li> <li>Hand Cricket</li> <li>Stack A Building</li>Enter '0' or 'Back' To Go back to Genre Selection</ol>"
            );
            $("#chatwindow").append(txt2);
            j = j + 1;
            single = true;
            multi = false;
            kids = false;
            mind = false;
            console.log(i);
          } else if (input == "MIND") {
            var txt2 = $("<div class='bot'></div>").html(
              "<ol>Here are Some of Our Mind Puzzle games <li>Guess The Number</li> <li>Guess The Word</li> Enter '0' or 'Back' To Go back to Genre Selection</ol>"
            );
            $("#chatwindow").append(txt2);
            j = j + 1;
            multi = false;
            single = false;
            kids = false;
            mind = true;
          } else if (input == "KIDS") {
            var txt2 = $("<div class='bot'></div>").html(
              " <ol> Here are Some of Our Kids Section games <li>Choose The Word </li> <li> Kids Quiz </li> <li>Story Board </li>Enter '0' or 'Back' To Go back to Genre Selection </ol> "
            );
            $("#chatwindow").append(txt2);
            j = j + 1;
            multi = false;

            single = false;
            kids = true;
            mind = false;
          } else {
            var txt2 = $("<div class='bot'></div>").html(
              "I don't Understand what you are trying to say.<br> Please Choose from one of the options mentioned above and Reply"
            );
            $("#chatwindow").append(txt2);
          }
        } else if ($.isNumeric(input)) {
          disablechat();
          setTimeout(function () {
            enablechat();
          }, 1200);
          if (input == 1) {
            var txt2 = $("<div class='bot'></div>").html(
              "<ol>Here are Some of Our Multi Player games  <li>Sumo</li> <li>Roll A Dice</li>Enter '0' or 'Back' To Go back to Genre Selection</ol> "
            );
            $("#chatwindow").append(txt2);
            j = j + 1;
            multi = true;
            single = false;
            kids = false;
            mind = false;
          } else if (input == 3) {
            var txt2 = $("<div class='bot'></div>").html(
              "<ol>Here are Some of Our Single Player games <li>Dino Game</li> <li>Tic Tac Toe</li> <li>Hand Cricket</li> <li>Stack A Building</li>Enter '0' or 'Back' To Go back to Genre Selection</ol>"
            );
            $("#chatwindow").append(txt2);
            j = j + 1;
            multi = false;
            single = true;
            kids = false;
            mind = false;
          } else if (input == 4) {
            var txt2 = $("<div class='bot'></div>").html(
              "<ol>Here are Some of Our Mind Puzzle games <li>Guess The Number</li> <li>Guess The Word</li>Enter '0' or 'Back' To Go back to Genre Selection </ol>"
            );
            $("#chatwindow").append(txt2);
            j = j + 1;
            multi = false;
            single = false;
            kids = false;
            mind = true;
          } else if (input == 2) {
            var txt2 = $("<div class='bot'></div>").html(
              " <ol> Here are Some of Our Kids Section games <li>Kids Garden </li> <li> Kids Quiz </li> <li>Story Board </li>Enter '0' or 'Back' To Go back to Genre Selection </ol> "
            );
            $("#chatwindow").append(txt2);
            j = j + 1;
            multi = false;
            single = false;
            mind = false;
            kids = true;
          } else {
            var txt2 = $("<div class='bot'></div>").html(
              "I don't Understand what you are trying to say.<br> Please Choose from one of the options mentioned above and Reply"
            );
            $("#chatwindow").append(txt2);
          }
        }
      } else if (j == 1) {
        if (multi) {
          //Multi Player Game Info
          if (isLetter(input)) {
            input = input.split(" ");
            input = input[0];
            input = input.toUpperCase();
            disablechat();
            setTimeout(function () {
              enablechat();
            }, 1200);
            if (input == "SUMO") {
              var txt2 = $("<div class='bot'></div>").html(
                "<H2>SUMO</H2><P>It is a Two player game in which both the players have to press the assigned keys (Player1 - S and Player2 - L) continuously. Player movement is controlled by the number of key press. Player who throws the opponant out of the ring wins!</P> <button class='chatbutton' id='chatsumo' onclick='showSumo()'>Play</button> "
              );
              $("#chatwindow").append(txt2);
              j = j + 0;
            } else if (input == "ROLL") {
              var txt2 = $("<div class='bot'></div>").html(
                "<h2>Roll a Dice</h2> <p>The player has to roll the dice and the numbers appearing on each roll will be added as it's score and if in case 1 appears, you will loose that score, but you can save your score after every roll, and in both cases the turn is passed on to second player.</p> <button class='chatbutton' id='chatrtd' onclick='showDice()'>Play</button>"
              );
              $("#chatwindow").append(txt2);
              j = j + 0;
            } else if (input == "BACK") {
              var txt2 = $("<div class='bot'></div>").html(
                "<ol id='lol'><h4>What will you like to play</h4>Reply the Number or Text<li>Multi Player</li><li>Kids Section</li><li>Single Player</li><li>Mind Games</li></ol>"
              );
              $("#chatwindow").append(txt2);
              j = j - 1;
            } else {
              var txt2 = $("<div class='bot'></div>").html(
                "I don't Understand what you are trying to say.<br> Please Choose from one of the options mentioned above and Reply"
              );
              $("#chatwindow").append(txt2);
            }
          } else if ($.isNumeric(input)) {
            disablechat();
            setTimeout(function () {
              enablechat();
            }, 1200);
            if (input == 1) {
              var txt2 = $("<div class='bot'></div>").html(
                "<H2>SUMO</H2><P>It is a Two player game in which both the players have to press the assigned keys (Player1 - S and Player2 - L) continuously. Player movement is controlled by the number of key press. Player who throws the opponant out of the ring wins!</P> <button class='chatbutton' id='chatsumo' onclick='showSumo()'>Play</button>"
              );
              $("#chatwindow").append(txt2);
            } else if (input == 2) {
              var txt2 = $("<div class='bot'></div>").html(
                "<h2>Roll a Dice</h2> <p>The player has to roll the dice and the numbers appearing on each roll will be added as it's score and if in case 1 appears, you will loose that score, but you can save your score after every roll, and in both cases the turn is passed on to second player. </p> <button class='chatbutton' id='chatrtd' onclick='showDice()'>Play</button>"
              );
              $("#chatwindow").append(txt2);
            } else if (input == 0) {
              var txt2 = $("<div class='bot'></div>").html(
                "<ol id='lol'><h4>What will you like to play</h4>Reply the Number or Text<li>Multi Player</li><li>Kids Section</li><li>Single Player</li><li>Mind Games</li></ol>"
              );
              $("#chatwindow").append(txt2);
              j = j - 1;
            } else {
              var txt2 = $("<div class='bot'></div>").html(
                "I don't Understand what you are trying to say.<br> Please Choose from one of the options mentioned above and Reply"
              );
              $("#chatwindow").append(txt2);
            }
          }
        } else if (single) {
          //Single Player Game Info
          if (isLetter(input)) {
            input = input.split(" ");
            input = input[0];
            input = input.toUpperCase();
            disablechat();
            setTimeout(function () {
              enablechat();
            }, 1200);
            if (input == "DINO") {
              var txt2 = $("<div class='bot'></div>").html(
                "<H2>Dino Run</H2><P>Simply press the space bar (or up arrow) and the dino will start running. Press the up arrow to jump over the obstacles (like cacti) in your path. The longer you hold the up arrow, the higher dino will  jump. If you need to duck under something, press the down arrow.</P> <button class='chatbutton' id='chatdino' onclick='showDino()'>Play</button> "
              );
              $("#chatwindow").append(txt2);
            } else if (input == "TIC") {
              var txt2 = $("<div class='bot'></div>").html(
                "<h2>Tic Tac Toe</h2> <p>First of all you decide your symbol and then mark your posistion the first one to land three symbols in one straight line wins.</p> <button class='chatbutton' id='chattactic' onclick='showTacTic()'>Play</button>"
              );
              $("#chatwindow").append(txt2);
            } else if (input == "HAND") {
              var txt2 = $("<div class='bot'></div>").html(
                "<h2>Hand Cricket</h2> <p>First of all you decide to bat or bowl first. Then to score Runs, click on the Runs you wish to score and the Device will select a random number. Show of same hands results in a wicket otherwise will be added as a score. Each side has 5 wickets.</p> <button class='chatbutton' id='chatcricket' onclick='showCricket()'>Play</button> "
              );
              $("#chatwindow").append(txt2);
            } else if (input == "STACK") {
              var txt2 = $("<div class='bot'></div>").html(
                "<h2>Stack A Building</h2> <p> It is a Game in which you have to stack block of building on top of each other so as to finish and complete the building. If you stack it perfectly no parts would be removed but a wrong stack will result in cutting off the extra width and when no width is left You lose the game.</p><button class='chatbutton' id='chatstack' onclick='showStack()'>Play</button> "
              );
              $("#chatwindow").append(txt2);
            } else if (input == "BACK") {
              var txt2 = $("<div class='bot'></div>").html(
                "<ol id='lol'><h4>What will you like to play</h4>Reply the Number or Text<li>Multi Player</li><li>Kids Section</li><li>Single Player</li><li>Mind Games</li></ol>"
              );
              $("#chatwindow").append(txt2);
              j = j - 1;
            } else {
              var txt2 = $("<div class='bot'></div>").html(
                "I don't Understand what you are trying to say.<br> Please Choose from one of the options mentioned above and Reply"
              );
              $("#chatwindow").append(txt2);
            }
          } else if ($.isNumeric(input)) {
            disablechat();
            setTimeout(function () {
              enablechat();
            }, 1200);
            if (input == 1) {
              var txt2 = $("<div class='bot'></div>").html(
                "<H2>Dino Run</H2><P>Simply press the space bar (or up arrow) and the dino will start running. Press the up arrow to jump over the obstacles (like cacti) in your path. The longer you hold the up arrow, the higher dino will  jump. If you need to duck under something, press the down arrow.</P><button class='chatbutton' id='chatdino'  onclick='showDino()'>Play</button> "
              );
              $("#chatwindow").append(txt2);
            } else if (input == 2) {
              var txt2 = $("<div class='bot'></div>").html(
                "<h2>Tic Tac Toe</h2> <p>First of all you decide your symbol and then mark your posistion the first one to land three symbols in one straight line wins.</p><button class='chatbutton' id='chattactic' onclick='showTacTic()'>Play</button>"
              );
              $("#chatwindow").append(txt2);
            } else if (input == 3) {
              var txt2 = $("<div class='bot'></div>").html(
                "<h2>Hand Cricket</h2> <p>First of all you decide to bat or bowl first. Then to score Runs, click on the Runs you wish to score and the Device will select a random number. Show of same hands results in a wicket otherwise will be added as a score. Each side has 5 wickets.</p> <button class='chatbutton' id='chatcricket' onclick='showCricket()'>Play</button>"
              );
              $("#chatwindow").append(txt2);
            } else if (input == 4) {
              var txt2 = $("<div class='bot'></div>").html(
                "<h2>Stack A Building</h2> <p> It is a Game in which you have to stack block of building on top of each other so as to finish and complete the building. If you stack it perfectly no parts would be removed but a wrong stack will result in cutting off the extra width and when no width is left You lose the game.</p><button class='chatbutton' id='chatstack' onclick='showStack()'>Play</button>"
              );
              $("#chatwindow").append(txt2);
            } else if (input == 0) {
              var txt2 = $("<div class='bot'></div>").html(
                "<ol id='lol'><h4>What will you like to play</h4>Reply the Number or Text<li>Multi Player</li><li>Kids Section</li><li>Single Player</li><li>Mind Games</li></ol>"
              );
              $("#chatwindow").append(txt2);
              j = j - 1;
            } else {
              var txt2 = $("<div class='bot'></div>").html(
                "I don't Understand what you are trying to say.<br> Please Choose from one of the options mentioned above and Reply"
              );
              $("#chatwindow").append(txt2);
            }
          }
        } else if (kids) {
          //Kids Section Game Info
          if (isLetter(input)) {
            input = input.split(" ");
            input = input[0];
            input = input.toUpperCase();
            disablechat();
            setTimeout(function () {
              enablechat();
            }, 1200);
            if (input == "CHOOSE") {
              var txt2 = $("<div class='bot'></div>").html(
                "<H2>KIDS GARDEN</H2><P>One Can use this Game to teach their kids and learn at the same time using different modes in the Game like alphabets numbers colours and animals.</P><button class='chatbutton' id='chatgarden'  onclick='showKIDSGARDEN()'>Play</button> "
              );
              $("#chatwindow").append(txt2);
              j = j + 0;
            } else if (input == "KIDS") {
              var txt2 = $("<div class='bot'></div>").html(
                "<h2>KIDS QUIZES</h2> <p>Gives a Small QUiz for the Kids using the Phone So that they can enjoy and Study at the Same time with help of animals. </p> <button class='chatbutton' id='chatquiz' onclick='showQuiz()'>Play</button>"
              );
              $("#chatwindow").append(txt2);
              j = j + 0;
            } else if (input == "STORY") {
              var txt2 = $("<div class='bot'></div>").html(
                "<h2>STORY BOARD</h2> <p> The Person using this can make his/her own decisions as a protagonist and continue in the story to find out what happens in the end</p><button class='chatbutton' id='chatstory' onclick='showSTORY()'>Play</button> "
              );
              $("#chatwindow").append(txt2);
            } else if (input == "BACK") {
              var txt2 = $("<div class='bot'></div>").html(
                "<ol id='lol'><h4>What will you like to play</h4>Reply the Number or Text<li>Multi Player</li><li>Kids Section</li><li>Single Player</li><li>Mind Games</li></ol>"
              );
              $("#chatwindow").append(txt2);
              j = j - 1;
            } else {
              var txt2 = $("<div class='bot'></div>").html(
                "I don't Understand what you are trying to say.<br> Please Choose from one of the options mentioned above and Reply"
              );
              $("#chatwindow").append(txt2);
            }
          } else if ($.isNumeric(input)) {
            disablechat();
            setTimeout(function () {
              enablechat();
            }, 1200);
            if (input == 1) {
              var txt2 = $("<div class='bot'></div>").html(
                "<H2>KIDS GARDEN</H2><P>One Can use this Game to teach their kids and learn at the same time using different modes in the Game like alphabets numbers colours and animals.</P><button class='chatbutton' id='chatstory' onclick='showKIDSGARDEN()'>Play</button> "
              );
              $("#chatwindow").append(txt2);
            } else if (input == 2) {
              var txt2 = $("<div class='bot'></div>").html(
                "<h2>KIDS QUIZES</h2> <p>Gives a Small Quiz for the Kids using the Phone So that they can enjoy and Study at the Same time with the help of animals </p><button class='chatbutton' id='chatstory' onclick='showQuiz()'>Play</button>"
              );
              $("#chatwindow").append(txt2);
            } else if (input == 3) {
              var txt2 = $("<div class='bot'></div>").html(
                "<h2>STORY BOARD</h2> <p> The Person using this can make his/her own decisions as a protagonist and continue in the story to find out what happens in the end</p> <button class='chatbutton' id='chatstory' onclick='showSTORY()'>Play</button>"
              );
              $("#chatwindow").append(txt2);
            } else if (input == 0) {
              var txt2 = $("<div class='bot'></div>").html(
                "<ol id='lol'><h4>What will you like to play</h4>Reply the Number or Text<li>Multi Player</li><li>Kids Section</li><li>Single Player</li><li>Mind Games</li></ol>"
              );
              $("#chatwindow").append(txt2);
              j = j - 1;
            } else {
              var txt2 = $("<div class='bot'></div>").html(
                "I don't Understand what you are trying to say.<br> Please Choose from one of the options mentioned above and Reply"
              );
              $("#chatwindow").append(txt2);
            }
          }
        } else if (mind) {
          //Mind Games Game Info
          if (isLetter(input)) {
            input = input.split(" ");
            input = input[0];
            input = input.toUpperCase();
            disablechat();
            setTimeout(function () {
              enablechat();
            }, 1200);
            if (input == "GUESS") {
              var txt2 = $("<div class='bot'></div>").html(
                "<H2>Guess the Number</H2><P> The device selects a number between 1-20 and the player has to guess it. With every guess the device will give uh the hints, if you are close to the number or not. With every wrong guess your score decreases. Follow the hints and Guess the Number.</P><button class='chatbutton' id='chatstory' onclick='showGTN()'>Play</button> "
              );
              $("#chatwindow").append(txt2);
            } else if (input == "SCRAMBLED") {
              var txt2 = $("<div class='bot'></div>").html(
                "<h2>Scrambled Words</h2> <p>Presents you some words in scrambled posistions and then asks you to unscramble it and Guess the word If you Guess it correctly you win the game but when you cross a limit of turns you lose the game.</p><button class='chatbutton' id='chatstory' onclick='ShowScrambled()'>Play</button>"
              );
              $("#chatwindow").append(txt2);
            } else if (input == "BACK") {
              var txt2 = $("<div class='bot'></div>").html(
                "<ol id='lol'><h4>What will you like to play</h4>Reply the Number or Text<li>Multi Player</li><li>Kids Section</li><li>Single Player</li><li>Mind Games</li></ol>"
              );
              $("#chatwindow").append(txt2);
              j = j - 1;
            } else {
              var txt2 = $("<div class='bot'></div>").html(
                "I don't Understand what you are trying to say.<br> Please Choose from one of the options mentioned above and Reply"
              );
              $("#chatwindow").append(txt2);
            }
          } else if ($.isNumeric(input)) {
            disablechat();
            setTimeout(function () {
              enablechat();
            }, 1200);
            if (input == 1) {
              var txt2 = $("<div class='bot'></div>").html(
                "<H2>Guess the Number</H2><P> The device selects a number between 1-20 and the player has to guess it. With every guess the device will give uh the hints, if you are close to the number or not. With every wrong guess your score decreases. Follow the hints and Guess the Number.</P> <button class='chatbutton' id='chatstory' onclick='showGTN()'>Play</button>"
              );
              $("#chatwindow").append(txt2);
            } else if (input == 2) {
              var txt2 = $("<div class='bot'></div>").html(
                "<h2>Scrambled Words</h2> <p>Presents you some words in scrambled posistions and then asks you to unscramble it and Guess the word If you Guess it correctly you win the game but when you cross a limit of turns you lose the game.</p><button class='chatbutton' id='chatstory' onclick='ShowScrambled()'>Play</button>"
              );
              $("#chatwindow").append(txt2);
            } else if (input == 0) {
              var txt2 = $("<div class='bot'></div>").html(
                "<ol id='lol'><h4>What will you like to play</h4>Reply the Number or Text<li>Multi Player</li><li>Kids Section</li><li>Single Player</li><li>Mind Games</li></ol>"
              );
              $("#chatwindow").append(txt2);
              j = j - 1;
            } else {
              var txt2 = $("<div class='bot'></div>").html(
                "I don't Understand what you are trying to say.<br> Please Choose from one of the options mentioned above and Reply"
              );
              $("#chatwindow").append(txt2);
            }
          }
        }
      } else if (j == 11) {
      }
    }
  });
});
//renders ALl the Name of Multi player Games in the Bot
function multiplayer() {}
//Check if the number is string
function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}
//remove special character from a string
function check(koko) {
  re = /[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-\,\\]/g;
  return koko.replace(re, "");
}
function showgen(len, genre) {
  setTimeout(function () {
    var tex = $(
      "<ol id='lol'><h4>What will you like to play</h4>Reply the Number or Text</ol>"
    );
    var txt2 = $("<div class='bot'></div>").html(tex);
    $("#chatwindow").append(txt2);
    appendgen();
  }, 1000);
}
function appendgen() {
  for (i = 0; i < len + 1; i++) {
    item = $("<li></li>").text(genre[i]);
    $("#lol").append(item);
  }
  enablechat();
}
function counti(num, argu, gen, genre) {
  setTimeout(function () {
    tex = ques[num];
    var txt2 = $("<div class='bot'></div>").text(tex);
    $("#chatwindow").append(txt2);
    if (num < argu - 1) counti(num + 1, argu);
    else showgen(gen, genre);
  }, 1000);
}
var myDiv = document.getElementById("chatwindow");
function enablechat() {
  $("#senttext").removeAttr("disabled");
  $("#senttext").attr("placeholder", "Chat Enabled Type your query now");
  myDiv.scrollTop = myDiv.scrollHeight;
}
function disablechat() {
  $("#senttext").attr("disabled", "disabled");
  $("#senttext").val("");
  $("#senttext").attr("placeholder", "Wait.......");
}
//Chat Button connection to Info tab
//1 done
function showDino() {
  GameInfoGo();
  $("#dino1").show();
}
//2 done
function showTacTic() {
  GameInfoGo();
  $("#tic1").show();
}
//3 done
function showCricket() {
  GameInfoGo();
  $("#cricket1").show();
}
//4 done
function showDice() {
  GameInfoGo();
  $("#dice1").show();
}
//5 done
function showGTN() {
  GameInfoGo();
  $("#guess1").show();
}
//6 done
function showSumo() {
  GameInfoGo();
  $("#sumo1").show();
}
//7 done
function showKIDSGARDEN() {
  GameInfoGo();
  $("#keyboard1").show();
}
//8 done
function showStack() {
  GameInfoGo();
  $("#stack1").show();
}
//9 done
function ShowScrambled() {
  GameInfoGo();
  $("#hangman1").show();
}
//10 done
function showSTORY() {
  GameInfoGo();
  $("#story1").show();
}
//11
function showQuiz() {
  GameInfoGo();
  $("#kidsquiz1").show();
}

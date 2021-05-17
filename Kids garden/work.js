$("document").ready(function () {
  $("#playarea").hide();
  $("#mode").hide();
  //click on play button task
  $("#play").click(function () {
    $("h1").hide();
    $("#main").hide();
    $("#mode").show();
  });
  //click on Back Button
  $("#Back").click(function () {
    $("#mode").hide();
    $("#main").show();
    $("h1").show();
  });
  //Click on Letter Button
  $("#let").click(function () {
    $("#mode").hide();
    $("#numberdiv").hide();
    $("#letterdiv").show();
    $("#animaldiv").hide();
    $("#colordiv").hide();
    $("#playarea").show();
  });
  //Cick on Number Button
  $("#num").click(function () {
    $("#mode").hide();
    $("#letterdiv").hide();
    $("#numberdiv").show();
    $("#animaldiv").hide();
    $("#colordiv").hide();
    $("#playarea").show();
  });
  //click on color button
  $("#Color").click(function () {
    $("#mode").hide();
    $("#letterdiv").hide();
    $("#numberdiv").hide();
    $("#colordiv").show();
    $("#animaldiv").hide();
    $("#playarea").show();
  });
  //click on animal button
  $("#Animal").click(function () {
    $("#mode").hide();
    $("#letterdiv").hide();
    $("#numberdiv").hide();
    $("#colordiv").hide();
    $("#animaldiv").show();
    $("#playarea").show();
  });
  //cli0 click number
  $("#cli0").click(function () {
    document.getElementById("aud").src = "audios/Number/0.mp3";
  });
  $("#cli1").click(function () {
    document.getElementById("aud").src = "audios/Number/1.mp3";
  });
  $("#cli2").click(function () {
    document.getElementById("aud").src = "audios/Number/2.mp3";
  });
  $("#cli3").click(function () {
    document.getElementById("aud").src = "audios/Number/3.mp3";
  });
  $("#cli4").click(function () {
    document.getElementById("aud").src = "audios/Number/4.mp3";
  });
  $("#cli5").click(function () {
    document.getElementById("aud").src = "audios/Number/5.mp3";
  });
  $("#cli6").click(function () {
    document.getElementById("aud").src = "audios/Number/6.mp3";
  });
  $("#cli7").click(function () {
    document.getElementById("aud").src = "audios/Number/7.mp3";
  });
  $("#cli8").click(function () {
    document.getElementById("aud").src = "audios/Number/8.mp3";
  });
  $("#cli9").click(function () {
    document.getElementById("aud").src = "audios/Number/9.mp3";
  });
  //click For Letters
  $("#clia").click(function () {
    document.getElementById("aud").src = "audios/Letter/A.mp3";
  });
  $("#clib").click(function () {
    document.getElementById("aud").src = "audios/Letter/B.mp3";
  });
  $("#clic").click(function () {
    document.getElementById("aud").src = "audios/Letter/C.mp3";
  });
  $("#clid").click(function () {
    document.getElementById("aud").src = "audios/Letter/D.mp3";
  });
  $("#clie").click(function () {
    document.getElementById("aud").src = "audios/Letter/E.mp3";
  });
  $("#clif").click(function () {
    document.getElementById("aud").src = "audios/Letter/F.mp3";
  });
  $("#clig").click(function () {
    document.getElementById("aud").src = "audios/Letter/G.mp3";
  });
  $("#clih").click(function () {
    document.getElementById("aud").src = "audios/Letter/H.mp3";
  });
  $("#clii").click(function () {
    document.getElementById("aud").src = "audios/Letter/I.mp3";
  });
  $("#clij").click(function () {
    document.getElementById("aud").src = "audios/Letter/J.mp3";
  });
  $("#clik").click(function () {
    document.getElementById("aud").src = "audios/Letter/K.mp3";
  });
  $("#clil").click(function () {
    document.getElementById("aud").src = "audios/Letter/L.mp3";
  });
  $("#clim").click(function () {
    document.getElementById("aud").src = "audios/Letter/M.mp3";
  });
  $("#clin").click(function () {
    document.getElementById("aud").src = "audios/Letter/N.mp3";
  });

  $("#clio").click(function () {
    document.getElementById("aud").src = "audios/Letter/O.mp3";
  });

  $("#clip").click(function () {
    document.getElementById("aud").src = "audios/Letter/P.mp3";
  });
  $("#cliq").click(function () {
    document.getElementById("aud").src = "audios/Letter/Q.mp3";
  });
  $("#clir").click(function () {
    document.getElementById("aud").src = "audios/Letter/R.mp3";
  });
  $("#clis").click(function () {
    document.getElementById("aud").src = "audios/Letter/S.mp3";
  });

  $("#clit").click(function () {
    document.getElementById("aud").src = "audios/Letter/T.mp3";
  });

  $("#cliu").click(function () {
    document.getElementById("aud").src = "audios/Letter/U.mp3";
  });

  $("#cliv").click(function () {
    document.getElementById("aud").src = "audios/Letter/V.mp3";
  });

  $("#cliw").click(function () {
    document.getElementById("aud").src = "audios/Letter/W.mp3";
  });

  $("#clix").click(function () {
    document.getElementById("aud").src = "audios/Letter/X.mp3";
  });

  $("#cliy").click(function () {
    document.getElementById("aud").src = "audios/Letter/Y.mp3";
  });

  $("#cliz").click(function () {
    document.getElementById("aud").src = "audios/Letter/Z.mp3";
  });
  //click for colors
  $("#clired").click(function () {
    document.getElementById("aud").src = "audios/Color/Red.mp3";
  });
  $("#cliblue").click(function () {
    document.getElementById("aud").src = "audios/Color/Blue.mp3";
  });
  $("#clipink").click(function () {
    document.getElementById("aud").src = "audios/Color/Pink.mp3";
  });
  $("#cligreen").click(function () {
    document.getElementById("aud").src = "audios/Color/Green.mp3";
  });
  $("#cliorange").click(function () {
    document.getElementById("aud").src = "audios/Color/Orange.mp3";
  });
  $("#cliyellow").click(function () {
    document.getElementById("aud").src = "audios/Color/Yellow.mp3";
  });
  $("#cliwhite").click(function () {
    document.getElementById("aud").src = "audios/Color/White.mp3";
  });
  $("#cliblack").click(function () {
    document.getElementById("aud").src = "audios/Color/Black.mp3";
  });
  //click for Animals
  $("#clidog").click(function () {
    document.getElementById("aud").src = "audios/Animals/Dog.mp3";
  });
  $("#clicat").click(function () {
    document.getElementById("aud").src = "audios/Animals/Cat.mp3";
  });
  $("#clicow").click(function () {
    document.getElementById("aud").src = "audios/Animals/Cow.mp3";
  });
  $("#cliduck").click(function () {
    document.getElementById("aud").src = "audios/Animals/Duck.mp3";
  });
  $("#cligoat").click(function () {
    document.getElementById("aud").src = "audios/Animals/Goat.mp3";
  });
  $("#clipony").click(function () {
    document.getElementById("aud").src = "audios/Animals/Pony.mp3";
  });
  $("#clitiger").click(function () {
    document.getElementById("aud").src = "audios/Animals/Tiger.mp3";
  });
  $("#clielephant").click(function () {
    document.getElementById("aud").src = "audios/Animals/elephant.mp3";
  });

  //back button
  $("#modeback").click(function () {
    $("h1").hide();
    $("#main").hide();
    $("#mode").show();
    $("#playarea").hide();
  });
});

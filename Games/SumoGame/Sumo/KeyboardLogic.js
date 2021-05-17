$("document").ready(function () {
  $("#main").hide();
  $("#playrselect").hide();
  $("#restart").hide();
  $("#rulez").hide();
  $("#start").click(function () {
    $("#main").hide();
    $("#menu").hide();
    $("#playrselect").show();
  });
  $("#play").click(function () {
    $("#main").show();
    $("#menu").hide();
    $("#playrselect").hide();
    Ready();
  });
  $("#restart").click(function () {
    window.location.reload();
  });
  $("#back").click(function () {
    $("#rulez").hide();
    $("#menu").show();
    $("#main").hide();
    $("#playrselect").hide();
  });
  $("#rules").click(function () {
    $("#rulez").show();
    $("#menu").hide();
    $("#main").hide();
    $("#playrselect").hide();
  });
});
function Ready() {
  x = document.getElementById("l1").value; //prompt("First Player");
  y = document.getElementById("l2").value; //prompt("Second Player");
  $("body").show();
  $("#P1").text(x);
  $("#P2").text(y);
  var Player2 = 15;
  var Player1 = 15;
  $("#a").text(Player2);
  $("#b").text(Player1);
  $("#restart").hide();
  $("#declare").text(`||`);
  $("#imge").attr("src", "erick-bruno-sumos-colidindo.gif");
  $("#imge").css("margin-left", "90px");
  $("body").keyup(function (event) {
    if (Player2 == 0 || Player1 == 0) {
      if (Player1 == 0) {
        $("#imge").attr("src", "Blue Wins.gif");
        $("#declare").text(`${x} wins`);
        $("#restart").show();
      } else {
        $("#imge").attr("src", "Green Wins.gif");
        $("#declare").text(`${y} wins`);
        $("#restart").show();
      }
    } else {
      if (event.which == 76) {
        Player1 += 1;
        Player2 -= 1;
        $("#imge").css("margin-left", "-=10px");
        $("#a").text(Player2);
        $("#b").text(Player1);
      } else if (event.which == 83) {
        Player2 += 1;
        Player1 -= 1;
        $("#imge").css("margin-left", "+=10px");
        $("#a").text(Player2);
        $("#b").text(Player1);
      }
    }
  });
}

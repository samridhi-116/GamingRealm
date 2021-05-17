const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");
    setTimeout(function () {
      dino.classList.remove("jump");
    }, 300);
  }
}

let count = 0;
document.addEventListener("keydown", function (event) {
  jump();
});

let isAlive = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  let cactusLeft2 = parseInt(
    window.getComputedStyle(cactus2).getPropertyValue("left")
  );
  count = count + 97;
  counts = parseInt(count / 100);
  document.getElementById("counts").textContent = `Score : ${counts}`;

  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    aGLOBALCONSTANT = counts;
    console.log(aGLOBALCONSTANT);
    out();
  } else if (cactusLeft2 < 50 && cactusLeft2 > 0 && dinoTop >= 140) {
    aGLOBALCONSTANT = counts;
    console.log(aGLOBALCONSTANT);
    out();
  }
}, 10);

function butto() {
  count = 0;
  setTimeout(function () {
    $("#startPage").fadeOut();
  }, 100);
  setTimeout(function () {
    cactus.classList.add("move");
    cactus2.classList.add("move2");
  }, 200);
}

function out() {
  dino.classList.remove("jump");
  cactus.classList.remove("move");
  cactus2.classList.remove("move2");
  document.getElementById("score").textContent = `SCORE: ${aGLOBALCONSTANT}`;
  setTimeout(function () {
    $("#backen").fadeIn(back);
  }, 100);
}

function regrow() {
  window.location.reload();
}

var canvas, g;

var characterPosX, characterPosY, characterImage;

onload = function() {
  canvas = document.getElementById("gamecanvas");
  g = canvas.getContext("2d");
  init();
  document.onkeydown = keydown;
  setInterval("gameloop()", 16);
};

function init() {
  characterPosX = 400;
  characterPosY = 240;
  characterImage = new Image();
  characterImage.src = "../src/image/Parsee_dot.png";
}

function keydown() { }

function gameloop() {
  update();
  draw();
}

function update() {
  characterPosX += 2;
}

function draw() {
  g.fillStyle = "rgb(0, 0, 0)";
  g.fillRect(0, 0, 480, 480);

  g.drawImage(
    characterImage,
    characterPosX - characterImage.width / 2,
    characterPosY - characterImage.height / 2,
  );
}

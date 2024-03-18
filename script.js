var dragon = document.getElementById("dragon");
var bodyBG = document.getElementById("bodyBG");

var dragonBackgroundPositionX = 0;
var BGBackgroundPositionX = 0;
var dragonIdleAnimationId = 0;

function dragonIdleAnimation() {

    dragonBackgroundPositionX = dragonBackgroundPositionX - 62;
    dragon.style.backgroundPositionX = dragonBackgroundPositionX + "px";


    if (dragonBackgroundPositionX == -496) {
        dragonBackgroundPositionX = 0;

    }

}

function dragonIdleAnimationStart() {

    dragonIdleAnimationId = setInterval(dragonIdleAnimation, 200);

}

var startH1Tag = document.createElement("h1");

function startH1() {

    startH1Tag.innerHTML = "START GAME";
    startH1Tag.className = "startH1";
    bodyBG.appendChild(startH1Tag);

}

var startGameAnimationStatus = false;

function eventHandling(event) {

    var keyCode = event.which;
    // alert(keyCode);
    if (keyCode == 32 && startGameAnimationStatus == false) {
        startGameAnimationStatus = true;
        startGameAnimation();

        startH1Tag.remove();

        move();
        startAnimation();
    }
    if (keyCode == 37 && dragonMarginLeft > 40) {

        backward();
    }

    if (keyCode == 38 && dragonMarginTop > 30) {

        down();
    }
    if (keyCode == 39 && dragonMarginLeft < 1270) {
        foward();
    }
    if (keyCode == 40 && dragonMarginTop < 540) {

        up();
    }
    if (keyCode == 13) {
        if (fastFlyStatus == false && startGameAnimationStatus == true) {
            dragonFastFlyAnimationID = 0;
            fastFlyAnimation();
        }

    }
}
var BGAnimationNo = 0;
var scoreTag = document.createElement("h1");
var startScore = true;
var score = 0;

function startGame() {

    BGBackgroundPositionX = BGBackgroundPositionX - 30;
    bodyBG.style.backgroundPositionX = BGBackgroundPositionX + "px";

    if (startScore == true) {
        scoreTag.innerHTML = "0";
        bodyBG.appendChild(scoreTag);
        scoreTag.className = "score";
        startScore = false;
    }

    score = score + 10;
    scoreTag.innerHTML = score;

}

function startGameAnimation() {
    BGAnimationNo = setInterval(startGame, 100);
}

var dragonMarginLeft = 50;
var dragonMarginTop = 150;

function foward() {

    dragonMarginLeft = dragonMarginLeft + 10;
    dragon.style.marginLeft = dragonMarginLeft + "px";
}

function backward() {

    dragonMarginLeft = dragonMarginLeft - 10;
    dragon.style.marginLeft = dragonMarginLeft + "px";
}

function up() {

    dragonMarginTop = dragonMarginTop + 10;
    dragon.style.marginTop = dragonMarginTop + "px";
}

function down() {
    // alert(dragonMarginTop);
    dragonMarginTop = dragonMarginTop - 10;
    dragon.style.marginTop = dragonMarginTop + "px";
}
var dragonFastFlyAnimationID = 0;

function fastFly() {

    dragonBackgroundPositionX = dragonBackgroundPositionX - 62;
    dragon.style.backgroundPositionX = dragonBackgroundPositionX + "px";

    var deathMargindifX = batMarginX - dragonMarginLeft;
    var deathMargindifY = batMarginY - dragonMarginTop;

    if (deathMargindifX < 50 && deathMargindifX > -50) {

        if (deathMargindifY < 50 && deathMargindifY > -50) {

            deathDragonAnimation();
        }
    }

    if (dragonBackgroundPositionX == -868 && BGFastAnimationStatus == true && changeSpeedStatus == true) {
        dragonBackgroundPositionX = 0;
        clearInterval(dragonFastFlyAnimationID);
        fastFlyStatus = false;
        dragonIdleAnimationId = 0;
        dragonIdleAnimationId = setInterval(dragonIdleAnimation, 200);
        clearInterval(BGAnimationNo);
        BGAnimationNo = 0;
        BGFastAnimationStatus = false;
        BGAnimationNo = setInterval(startGame, 100);

        clearInterval(changeSpeedNo);
        changeSpeedNo = 0;
        changeSpeedStatus = false;
        changeSpeedNo = setInterval(change, 400);


    }
}

var fastFlyStatus = false;
var BGFastAnimationStatus = false;

function fastFlyAnimation() {
    clearInterval(dragonIdleAnimationId);
    fastFlyStatus = true;
    dragonBackgroundPositionX = -558;
    dragonFastFlyAnimationID = setInterval(fastFly, 300);
    clearInterval(BGAnimationNo);
    BGAnimationNo = 0;
    BGFastAnimationStatus = true;
    BGAnimationNo = setInterval(startGame, 20);

    clearInterval(changeSpeedNo);
    changeSpeedNo = 0;
    changeSpeedStatus = true;
    changeSpeedNo = setInterval(change, 100);

}


var boxID = 1;
var batMarginY = 0;

function start() {

    for (var i = 0; i < 5; i++) {
        var box1 = document.createElement("div");
        box1.className = "box1";
        box1.id = "b" + boxID;
        boxID = boxID + 1;
        document.body.appendChild(box1);

        var dimg = document.createElement("img");
        dimg.src = "blubat.png";
        dimg.className = "dimg";
        box1.appendChild(dimg);

        var y1 = Math.random();
        var y2 = y1 * 590;
        var y3 = Math.floor(y2);

        box1.style.marginLeft = 1300 + "px";
        box1.style.marginTop = y3 + "px";

        batMarginY = y3;
    }


}

var changeSpeedNo = 0;
var changeSpeedStatus = false;

function move() {
    changeSpeedNo = setInterval(change, 500);
}

var startAnimationStatus = 0;

function startAnimation() {
    startAnimationStatus = setInterval(start, 10000);
}


var batMarginX = 1300;

function change() {

    for (var x = 1; x <= boxID; x++) {

        var p1 = Math.random();
        var p2 = p1 * 100;
        var p3 = Math.floor(p2);

        var box = document.getElementById("b" + x);
        var ml = box.style.marginLeft;
        var mli = parseInt(ml);
        var mln = mli - p3;
        box.style.marginLeft = mln + "px";

        batMarginX = mln;
        var deathMargindifX = batMarginX - dragonMarginLeft;
        var deathMargindifY = batMarginY - dragonMarginTop;
        if (deathMargindifX < 50 && deathMargindifX > -50) {

            if (deathMargindifY < 50 && deathMargindifY > -50) {

                deathDragonAnimation();
            }
        }
    }

}


function deathDragon() {
    dragonBackgroundPositionX = dragonBackgroundPositionX - 62;
    dragon.style.backgroundPositionX = dragonBackgroundPositionX + "px";

    if (dragonBackgroundPositionX == -1426) {

        clearInterval(dragonDeathAnimationID);
        dragon.remove();
        clearInterval(BGAnimationNo);
        clearInterval(changeSpeedNo);
        clearInterval(startAnimationStatus);
        clearInterval(dragonIdleAnimationId);
        scoreTag.remove();
        var gameOverH1 = document.createElement("h1");
        gameOverH1.innerHTML = "Game Over : " + score;
        gameOverH1.className = "startH1";
        bodyBG.appendChild(gameOverH1);


    }
}
var dragonDeathStatus = false;
var dragonDeathAnimationID = 0;

function deathDragonAnimation() {
    clearInterval(dragonIdleAnimationId);
    dragonDeathStatus = true;
    dragonBackgroundPositionX = -930;
    dragonDeathAnimationID = setInterval(deathDragon, 300);

    var gameOverMP3 = new Audio("GameOver.mp3");
    gameOverMP3.play();
}
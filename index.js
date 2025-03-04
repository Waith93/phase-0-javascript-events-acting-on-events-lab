
const dodger = document.getElementById("dodger");
const game = document.getElementById("game");

function moveDodgerLeft() {
  let left = parseInt(dodger.style.left.replace("px", ""), 10) || 0;

  if (left > 0) {
    dodger.style.left = `${left - 5}px`; // Moves left by 5px
  }
}

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px","");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left + 1}px`; 
  }
};

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});


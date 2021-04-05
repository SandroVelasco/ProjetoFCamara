document.addEventListener("DOMContentLoaded", function (event) {
  const bigText = document.querySelectorAll(".bigText");
  const smallText = document.querySelectorAll(".smallText");
  const screenSize = window.innerWidth;

  function NewText() {
    if (screenSize <= 360) {
      for (let index = 0; index < bigText.length; index += 1) {
        bigText[index].style.display = "none";
      }
      for (let index = 0; index < smallText.length; index += 1) {
        smallText[index].style.display = "block";
      }
    }
  }
  NewText();

  function OldText() {
    if (screenSize > 360) {
      for (let index = 0; index < bigText.length; index += 1) {
        bigText[index].style.display = "block";
      }
      for (let index = 0; index < smallText.length; index += 1) {
        smallText[index].style.display = "none";
      }
    }
  }
  OldText();

  window.addEventListener("resize", NewText);
  window.addEventListener("resize", OldText);

let help1 = document.querySelector('#help1');
let help2 = document.querySelector('#help2');
let help = document.querySelector('#help');
let helped = document.querySelector('#helped');

help.addEventListener('click', () => {
  help1.style.display = 'block';
  help1.style.backgroundColor = '#FFFFFF';
  help2.style.display = 'none';
  help2.style.backgroundColor = '#FFFFFF';
  help.style.backgroundColor = '#DCDCDC';
  helped.style.backgroundColor = '#FFFFFF';
})

helped.addEventListener('click', () => {
  help1.style.display = 'none';
  help1.style.backgroundColor = '#FFFFFF';
  help2.style.display = 'block';
  help2.style.backgroundColor = '#FFFFFF';
  help.style.backgroundColor = '#FFFFFF';
  helped.style.backgroundColor = "#DCDCDC";
})

  let leftArrow = document.querySelector("#leftButton");
  let rightArrow = document.querySelector("#rightButton");
  let histories = document.querySelectorAll(".divHistories");
  let index = 0;

  leftArrow.addEventListener("click", () => {
    histories[index].style.display = 'none';
    index -= 1;
    if (index < 0) {
      index = 2;
    }
    histories[index].style.display = 'flex';
  });

  rightArrow.addEventListener("click", () => {
    histories[index].style.display = 'none';
    index += 1;
    if (index >= histories.length) {
      index = 0;
    }
    histories[index].style.display = 'flex';
  });
});
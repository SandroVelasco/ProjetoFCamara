const bigText = document.querySelectorAll('.bigText');
const smallText = document.querySelectorAll('.smallText');
const screenSize = window.innerWidth;

function NewText () {
  if (screenSize <= 360) {
    for (let index = 0; index < bigText.length; index += 1){
      bigText[index].style.display = 'none';
    }
    for (let index = 0; index < smallText.length; index += 1){
      smallText[index].style.display = 'block';
    }
  }
}
NewText();

function OldText () {
  if (screenSize > 360) {
    for (let index = 0; index < bigText.length; index += 1){
      bigText[index].style.display = 'block';
    }
    for (let index = 0; index < smallText.length; index += 1){
      smallText[index].style.display = 'none';
    }
  }
}
OldText();

window.addEventListener('resize', NewText());
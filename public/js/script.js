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

window.addEventListener('resize', NewText);
window.addEventListener('resize', OldText);

let leftArrow = document.querySelector('#leftButton');
let rightArrow = document.querySelector('#rightButton');
let histories = document.querySelectorAll('.divHistories');
let index = 0;

leftArrow.addEventListener('click', () => {
  histories[index].ClassList.add('notSelected');
  histories[index].ClassList.remove('selected');
  index -= 1;
  if (index < 0){
    index = 2;
  } 
  histories[index].ClassList.add('selected');
});

rightArrow.addEventListener('click', () => {
  histories[index].ClassList.add('notSelected');
  histories[index].ClassList.remove('selected');
  index += 1;
  if (index >= histories.length){
    index = 0;
  }
  histories[index].ClassList.add('selected');
});

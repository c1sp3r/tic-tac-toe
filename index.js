let btnRef = document.querySelectorAll(' button-option');
let popupRef = document.querySelector(' .popup');
let restartBtn = document.getElementById('restart');

let winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
  [6, 7, 8],
  [3, 4, 5],
];

let xTurn = true;
let count = 0;

const winChecker = () => {
  const btnRef = document.querySelectorAll('button-option');
  for (let i of winningPattern) {
  }
};

btnRef.forEach((element) => {
  element.addEventListener('click', () => {
    console.log('click');
    if (xTurn) {
      xTurn = false;
      element.innerText = 'X';
      element.disabled = true;
    } else {
      xTurn = true;
      element.innerText = 'O';
      element.disabled = true;
    }
    //count +=1;
    //if (count == 9){

    //}
    //winCheckers(){

    //}
  });
});

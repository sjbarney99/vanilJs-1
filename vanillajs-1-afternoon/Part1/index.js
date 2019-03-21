let board = [];

const play = val => {
  const player = document.getElementById("player");
  const element = document.getElementById(val);

  if (player.innerText === "X") {
    player.innerText = "O";
    element.innerText = "X";
    board[val] = "X";
  } else {
    player.innerText = "X";
    element.innerText = "O";
    board[val] = "O";
  }

  let sq1 = board[0] // top row:  sq1 | sq2 | sq3
  let sq2 = board[1] //          -----------------
  let sq3 = board[2] // mid row   sq4 | sq5 | sq6
  let sq4 = board[3] //          -----------------
  let sq5 = board[4] // bot row   sq7 | sq8 | sq9
  let sq6 = board[5]
  let sq7 = board[6]
  let sq8 = board[7]
  let sq9 = board[8]

  //CHECKS ALL WINNING COMBINATIONS
  if (sq1 !== undefined && sq1 === sq2 && sq1 === sq3) {
    window.alert(`${sq1} is the winner`);
    return
  } else if (sq4 !== undefined && sq4 === sq5 && sq4 === sq6) {
    window.alert(`${sq4} is the winner`);
    return
  } else if (sq7 !== undefined && sq7 === sq8 && sq7 === board[8]) {
    window.alert(`${sq7} is the winner`);
    return
  } else if (sq1 !== undefined && sq1 === sq4 && sq1 === sq7) {
    window.alert(`${sq1} is the winner`);
    return
  } else if (sq2 !== undefined && sq2 === sq5 && sq2 === sq8) {
    window.alert(`${sq2} is the winner`);
    return
  } else if (sq3 !== undefined && sq3 === sq6 && sq3 === board[8]) {
    window.alert(`${sq3} is the winner`);
    return
  } else if (sq1 !== undefined && sq1 === sq5 && sq1 === board[8]) {
    window.alert(`${sq1} is the winner`);
    return
  } else if (sq7 !== undefined && sq7 === sq5 && sq7 === sq3) {
    window.alert(`${sq7} is the winner`);
    return
  }

  //DETERMINES IF THE BOARD IS FULL, ALERTS WHEN IT IS
  let boardFull = true
  for(let i = 0; i <= 8; i++){
    if(board[i] === undefined){
        boardFull = false
    }
  }
  if(boardFull === true){
    window.alert("Cat's game, there is no winner")
  }
};

const resetBoard = () => {
    
}




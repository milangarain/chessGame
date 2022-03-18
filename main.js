//get the board
var classBoard = document.getElementsByClassName("board");

//prepare chessBoard
if (classBoard) {
    var board = classBoard[0];
    for (let i = 0; i < 8; i++) {
        let rowName = String.fromCharCode('h'.charCodeAt(0) - i);  //set chessRow from 'h' to 'a'
        let top = (i * 12.5) + '%';
        for (let j = 1; j <= 8; j++) {
            //providing each chessBox unique id -- similar to traditioanal boxName -- h1 to a8
            let idName = rowName + j;
            let left = (j - 1) * 12.5 + '%';
            let boxElement = document.createElement("div");
            boxElement.setAttribute("id", idName); //boxElement.id = idName
            boxElement.style = `top: ${top};left:${left}`; //boxElement.style.top = top and same for left
            if ((i + j) % 2 === 1) {
                boxElement.classList.add("box", "white"); //boxElement.className = "box white";
            } else {
                boxElement.classList.add("box", "black");
            }
            board.appendChild(boxElement);
        }
    }

}

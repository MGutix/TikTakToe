function Gameboard() {
    const rows = 3;
    const columns = 3;
    const board = [];
    const canvas = document.getElementById('canvas')

    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i].push('')
            
        }
        
    }

    const getBoard = () => board;

    // playerChoice  { if (occupied === invalid || empty => change to player symbol)}

    const renderBoard = () => {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                const cell = document.createElement("button");
                cell.classList.add("cell");
                cell.textContent = board[i][j];

                canvas.appendChild(cell);
                
            }
            
        }
        
    }

    return {getBoard, renderBoard, /*playerChoice*/}
}

function createPlayer (playerName, symbol) {
    
    return {playerName, symbol};
}

function GameFlow() {
    // create players

    // render board
    const board = Gameboard();
    const printNewRound = () => {
        board.printBoard();
      };

    // recieve playerInput => make changes to board (re render) + change turn

    // check if winning/tie conditions met (if so) => post result + play again button
}
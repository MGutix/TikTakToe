function GameBoard() {
    const rows = 3;
    const columns = 3;
    const board = [];

    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i].push(/*celda */)
            
        }
        
    }

    const getBoard = () => board;

    // playerChoice  { if (occupied === invalid || empty => change to player symbol)}

    const renderBoard = () => {
        // 
    }

    return {getBoard, renderBoard, /*playerChoice*/}
}

function createPlayer (playerName, symbol) {
    
    return {playerName, symbol};
}

function GameFlow() {
    // create players

    // render board

    // recieve playerInput => make changes to board (re render) + change turn

    // check if winning/tie conditions met (if so) => post result + play again button
}
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

    let getBoard = () => board;

    const renderBoard = () => {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                const cell = document.createElement("button");
                cell.classList.add("cell");
                cell.textContent = board[i][j];
                canvas.appendChild(cell);
                

                cell.addEventListener('click',() => {
                    if(cell.textContent === ''){
                        board[i][j] = 'X' //playerSymbol
                        //cell.textContent = 'X' //playerSymbol
                    }
                })
            }
        }
    }

    return {getBoard, renderBoard}
}



function GameFlow() {
    const board = Gameboard();
    
    // check if winning/tie conditions met (if so) => post result + play again button

    


    const players = [
        {
          name: 'playerOne',
          symbol: 'X',
        },
        {
          name: 'playerTwo',
          symbol: 'O',
        }
      ];


    
    let activePlayer = players[0];

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0]?  players[1] : players[0]
    };
    const getActivePlayer = () => activePlayer;

    const printNewRound = () => {
        board.renderBoard();
        console.log(`${getActivePlayer().name}'s turn.`);
    };

    printNewRound()

    const cellArray = document.getElementsByClassName('cell')

    for (const cell of cellArray) {
        cell.addEventListener('click', (event) => {
            if (event.target.textContent === '') {
                event.target.textContent = activePlayer.symbol;
                switchPlayerTurn();
                console.log(`${getActivePlayer().name}'s turn.`);
            }
        });
    }


    return {players, getActivePlayer, getBoard: board.getBoard}
}


const game = GameFlow();
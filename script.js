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

    const renderBoard = (symbol) => {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                const cell = document.createElement("button");
                cell.classList.add("cell");
                cell.textContent = board[i][j];
                cell.setAttribute("data-index", `${i}-${j}`);
                canvas.appendChild(cell);
                

                cell.addEventListener('click',() => {
                    if(cell.textContent === ''){
                        board[i][j] = symbol //playerSymbol
                        //cell.textContent = 'X' //playerSymbol
                    }
                })
            }
        }
    }

    return {getBoard, renderBoard}
}



function GameFlow() {
    
    
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

    const board = Gameboard();

    const printNewRound = () => {
        board.renderBoard(getActivePlayer().symbol);
        console.log(`${getActivePlayer().name}'s turn.`);
    };

    printNewRound()
    

    const cellArray = document.getElementsByClassName('cell')

    for (const cell of cellArray) {
        cell.addEventListener('click', (event) => {
            if (event.target.textContent === '') {
                event.target.textContent = activePlayer.symbol;
                const [rowIndex, columnIndex] = event.target.getAttribute("data-index").split('-');
                board.getBoard()[rowIndex][columnIndex] = activePlayer.symbol;

                if (winCon(board.getBoard(), activePlayer.symbol)){
                    endGame();
                } else {
                    switchPlayerTurn();
                    console.log(`${getActivePlayer().name}'s turn.`);
                }

                

                
            }
            
            
        });
    }

    function winCon(board, symbol) {
        //rows
        if (board[0][0] === symbol && board[0][1]=== symbol && board[0][2]=== symbol){
            console.log(`Winner is ${symbol}`)
            return true
        } else if (board[1][0] === symbol && board[1][1]=== symbol && board[1][2]=== symbol){
            console.log(`Winner is ${symbol}`)
            return true
        } else if (board[2][0] === symbol && board[2][1]=== symbol && board[2][2]=== symbol){
            console.log(`Winner is ${symbol}`)
            return true
        } 
        //columns
        else if (board[0][0] === symbol && board[1][0]=== symbol && board[2][0]=== symbol){
            console.log(`Winner is ${symbol}`)
            return true
        } else if (board[0][1] === symbol && board[1][1]=== symbol && board[2][1]=== symbol){
            console.log(`Winner is ${symbol}`)
            return true
        } else if (board[0][2] === symbol && board[1][2]=== symbol && board[2][2]=== symbol){
            console.log(`Winner is ${symbol}`)
            return true
        }
        //diagonals
        else if (board[0][0] === symbol && board[1][1]=== symbol && board[2][2]=== symbol){
            console.log(`Winner is ${symbol}`)
            return true
        }else if (board[0][2] === symbol && board[1][1]=== symbol && board[2][0]=== symbol){
            console.log(`Winner is ${symbol}`)
            return true
        }
        let isFull = 0;
        //tie
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] !== ''){
                    isFull++
                }
            }
        }
        if (isFull === 9){
            console.log(`Tie`)
            return true
        }
        return false
    }

    const endGame = () => {
        // new game button etc
        console.log('GAME OVER')
        console.log('GAME OVER')
        console.log('GAME OVER')
    }


    return {players, getActivePlayer, getBoard: board.getBoard}
}


const game = GameFlow();
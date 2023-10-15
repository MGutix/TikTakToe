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
                        board[i][j] = symbol 
                    }
                })
            }
        }
    }

    return {getBoard, renderBoard}
}

function GameFlow() {
    
    let gameOver = false;

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
            if (gameOver === false){
                
                if (event.target.textContent === '') {
                    event.target.textContent = activePlayer.symbol;
                    const [rowIndex, columnIndex] = event.target.getAttribute("data-index").split('-');
                    board.getBoard()[rowIndex][columnIndex] = activePlayer.symbol;

                    if (winCon(board.getBoard(), activePlayer.symbol)){
                        endGame();
                        gameOver = true;
                    } else {
                        switchPlayerTurn();
                        console.log(`${getActivePlayer().name}'s turn.`);
                    }

                    

                    
                }
            }
            
            
        });
    }
    

    function winCon(board, symbol) {
        const resultArea = document.getElementById('result')
        const result = document.createElement('h1')
        

        const playAgain = document.createElement('button')
        playAgain.setAttribute('id', 'playAgain')
        playAgain.classList.add('btn')
        playAgain.classList.add('btn-primary')
        playAgain.textContent = 'Play Again?'

        //rows
        if (board[0][0] === symbol && board[0][1]=== symbol && board[0][2]=== symbol){
            console.log(`Winner is ${symbol}`)
            result.textContent = `Winner is ${symbol}`;
            resultArea.appendChild(result)

            resultArea.appendChild(playAgain)

            return true
        } else if (board[1][0] === symbol && board[1][1]=== symbol && board[1][2]=== symbol){
            console.log(`Winner is ${symbol}`)
            result.textContent = `Winner is ${symbol}`;
            resultArea.appendChild(result)

            resultArea.appendChild(playAgain)

            return true
        } else if (board[2][0] === symbol && board[2][1]=== symbol && board[2][2]=== symbol){
            console.log(`Winner is ${symbol}`)
            result.textContent = `Winner is ${symbol}`;
            resultArea.appendChild(result)

            resultArea.appendChild(playAgain)

            return true
        } 
        //columns
        else if (board[0][0] === symbol && board[1][0]=== symbol && board[2][0]=== symbol){
            console.log(`Winner is ${symbol}`)
            result.textContent = `Winner is ${symbol}`;
            resultArea.appendChild(result)

            resultArea.appendChild(playAgain)

            return true
        } else if (board[0][1] === symbol && board[1][1]=== symbol && board[2][1]=== symbol){
            console.log(`Winner is ${symbol}`)
            result.textContent = `Winner is ${symbol}`;
            resultArea.appendChild(result)

            resultArea.appendChild(playAgain)

            return true
        } else if (board[0][2] === symbol && board[1][2]=== symbol && board[2][2]=== symbol){
            console.log(`Winner is ${symbol}`)
            result.textContent = `Winner is ${symbol}`;
            resultArea.appendChild(result)

            resultArea.appendChild(playAgain)

            return true
        }
        //diagonals
        else if (board[0][0] === symbol && board[1][1]=== symbol && board[2][2]=== symbol){
            console.log(`Winner is ${symbol}`)
            result.textContent = `Winner is ${symbol}`;
            resultArea.appendChild(result)

            resultArea.appendChild(playAgain)

            return true
        }else if (board[0][2] === symbol && board[1][1]=== symbol && board[2][0]=== symbol){
            console.log(`Winner is ${symbol}`)
            result.textContent = `Winner is ${symbol}`;
            resultArea.appendChild(result)

            resultArea.appendChild(playAgain)

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
            result.textContent = 'Tie'
            resultArea.appendChild(result)

            resultArea.appendChild(playAgain)

            return true
        }
        return false
    }

    const endGame = () => {
        // new game button etc
        console.log('GAME OVER')
        console.log('GAME OVER')
        console.log('GAME OVER')

        const playAgainButton = document.getElementById('playAgain')
        playAgainButton.addEventListener('click', () =>{
            console.log('new game')
            document.location.reload()
            
        })
    }

    

    return {players, getActivePlayer, getBoard: board.getBoard}
}


const game = GameFlow();
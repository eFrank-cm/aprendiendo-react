import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import { Square } from './components/Square'
import { TURN } from './constants'
import { checkWinner } from './logic/board'
import { WinnerModal } from './components/WinnerModal'


export const App = () => {
  // EL LOCALSTORAGE ES SINCRONO, NO SE USA AQUI XQ LENTEA LA APP
  // el tablero
  const [board, setBoard] = useState(() => {
    const boardFromStorage = localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })

  // turno
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = localStorage.getItem('turn')
    // '??' verifica si es null o undefine, || verifica si es false
    return turnFromStorage ?? TURN.X
  })

  // ganador: null:JUGANDO, false:EMPATE
  const [winner, setWinner] = useState(null)

  const checkEndGame = (checkBoard) => {
    return checkBoard.every(square => square !== null)
  }

  // funcion para cambiar estados
  const updateBoard = (index) => {
    // LOS STADOS Y PROPS SON IMNUTABLE XQ SI NO PUEDE HABER DISCREPANCIAS EN EL RENDER
    // actualizar el board (marcar 'x' o 'o')
    if (board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // cambiar el turno  
    const newTurn = turn === TURN.X ? TURN.O : TURN.X
    setTurn(newTurn)

    localStorage.setItem('board', JSON.stringify(newBoard))
    localStorage.setItem('turn', newTurn)

    // OJO: LA ACTUALIZACION DE LOS ESTADOS ES ASINCRONO
    // cambiar estado si hay ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
      // el 'alert' es sincrono, ya q bloquea la run del codigo
      // alert(`el ganador es ${newWinner}`)
    }
    else if (checkEndGame(newBoard)) {
      setWinner(false) // empate
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURN.X)
    setWinner(null)
    localStorage.removeItem('board')
    localStorage.removeItem('turn')
  }

  return (
    <main className='board'>
      <h1>Michi Juego</h1>
      <button onClick={resetGame}>Empezar de Nuevo</button>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURN.X}>
          {TURN.X}
        </Square>
        <Square isSelected={turn === TURN.O}>
          {TURN.O}
        </Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}
import { WINNER_COMBOS } from "../constants"

// verificar si hay ganador
export const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo
        if (boardToCheck[a] && (boardToCheck[a] === boardToCheck[b]) && (boardToCheck[a] === boardToCheck[c])) {
            return boardToCheck[a]
        }
    }

    // si no hay ganador
    return null
}
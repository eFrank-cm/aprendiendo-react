const CAT_ENDPOINT_RAMDON_FACT = 'https://catfact.ninja/fact'

export const getRadomFact = async () => {
    const res = await fetch(CAT_ENDPOINT_RAMDON_FACT)
    const data = await res.json()
    const newFact = data.fact
    return newFact
}


// fetch() -> return a promise
// Promise se resuelve con 'await' o '.then()'
// 'then()' tambien devuelve promesas
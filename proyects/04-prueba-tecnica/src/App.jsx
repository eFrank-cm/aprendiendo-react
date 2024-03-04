import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'
import { Otro } from './components/Otro'
import './App.css'

export const App = () => {
    const { fact, refreshFact } = useCatFact()
    const { imageUrl } = useCatImage({ fact })

    const handleClick = async () => {
        refreshFact()
    }

    return (
        <main>
            <h1>App de gatitos</h1>
            <button onClick={handleClick}>Get new Fact</button>
            {fact && <p>{fact}</p>}

            {/*NO RENDERIZAR un elemento que no tiene nada, lo de abajo esta mal*/}
            {/* <img style={{
                width: '25%'
            }} src={`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red`} /> */}

            {/* mejor hacer un renderizado condicional */}
            <img src={imageUrl} alt={`Image extracted using a API with three words in fact ${fact}`} style={{ maxWidth: '400px' }} />

            {/* <Otro /> */}
        </main>
    )
}

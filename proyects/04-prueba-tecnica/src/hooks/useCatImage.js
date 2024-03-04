import { useEffect, useState } from "react"

const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com'
const initialImageUrl = 'https://cataas.com/cat/DUx6qlBT08FATThR'

// importante que los Custom Hooks empiecen con 'use'
// la diferencia entre un Custom Hook y una funcion, es que en el 1ro puede usar los hooks de react
// ({ fact }) : parametros nombrables, es buena practica en JS, por la escalabilidad
export function useCatImage({ fact }) {
    const [imageUrl, setImageURL] = useState(initialImageUrl)

    // recuperar la imagen cada ves que tenemos cita nueva
    useEffect(() => {
        if (!fact) return
        const threeWord = fact.split(' ', 2).join(' ')
        const newImageUrl = `${CAT_ENDPOINT_IMAGE_URL}/cat/says/${threeWord}?fontColor=red`
        console.log(newImageUrl)

        fetch(newImageUrl)
            .then(res => res)
            .then(data => {
                const { url } = data
                setImageURL(url)
            })
    }, [fact])

    return { imageUrl }
} // {imageUrl : 'https://...'}
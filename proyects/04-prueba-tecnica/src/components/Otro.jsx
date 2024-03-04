import { useCatImage } from "../hooks/useCatImage"

export const Otro = () => {
    const { imageUrl } = useCatImage({ fact: 'Fact no Random' })

    return (
        <>
            <img src={imageUrl} alt={`Image extracted using a API with three words in fact`} style={{ maxWidth: '400px' }} />
        </>
    )
}

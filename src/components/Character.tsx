import Card from "react-bootstrap/Card"
import Image from 'react-bootstrap/Image'

interface Characterable {
    id: number,
    name: string,
    img: string
}

interface Charops {
    key: string,
    char: Characterable
}

export default function Character({char}:Charops){
    const variant = 'Dark'
    return (
        <>
        {/* <Card
            bg={variant.toLowerCase()}
          key={variant}
          text="light"
          className="mb-2 pokeCard"
        >
            <Card.header>{char.id}</Card.header>
            <Card.body>
                <Card.Title>{char.name}</Card.Title>
                <Image src={char.img}/>          
            </Card.body>
        </Card> */}
        <p>{char.id}</p>
        <p>{char.name}</p>
        <img src={char.img}/>
        </>
    )
}
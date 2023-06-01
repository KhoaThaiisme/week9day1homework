import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Character from "../components/Character";
import Body from '../components/Body';
import { Characterable } from '../components/Character';

const api = import.meta.env.VITE_APP_BASE_API

export default function DashBoard () {
    const [charactersArray, setCharactersArray] = useState<Characterable[]>([])

    useEffect(() => {
        (async () => {
            const res = await fetch(`${api}/characters`)
            if (res.ok) {
                const data = await res.json()
                setCharactersArray(data)
                // console.log(data)
            }
        })()
    },[])
    
    return (
        <>
        <Body sidebar>
            {charactersArray.length === 0 ? (
            <Spinner animation='border'/>) : (
                <>
            {charactersArray.length === 10} : {charactersArray.map((c) => {
                
                return <Character
                    key={c.id}
                    char={c}
                /> 
            })}
            </>
        )}
        </Body>
        </>
    )
}
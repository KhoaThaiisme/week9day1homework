import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Body from '../components/Body'
import { Spinner } from 'react-bootstrap'
import { Characterable } from '../components/Character'
import Character from '../components/Character'

const api= import.meta.env.VITE_APP_BASE_API

export default function DetailsPage() {
    const {id} = useParams()
    const [details, setDetails] = useState<Characterable[]>([])

    useEffect(() => {
        (async () => {
            const res = await fetch(`${api}/character/${id}`)
            if(res.ok) {
                const data = await res.json()
                setDetails(data)
        }
        })()
    },[])

    return(
        <>
        <Body sidebar>
            {details.length === 0 ? (
            <Spinner animation='border'/>) : (
                <>
            {details.map((c) => {
                
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
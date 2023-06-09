import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Body from '../components/Body'
import { Spinner } from 'react-bootstrap'
import { Characterable } from '../components/Character'
import Character from '../components/Character'
import Post, { Postable } from '../components/Post'

const api= import.meta.env.VITE_APP_BASE_API

export default function DetailsPage() {
    const {id} = useParams()
    const [details, setDetails] = useState<Characterable[]>([])
    const [post, setPost] = useState<Postable[]>([])

    useEffect(() => {
        (async () => {
            const res = await fetch(`${api}/character/${id}`)
            if(res.ok) {
                const data = await res.json()
                setDetails(data)
        }
        })()
    },[])

    useEffect(() => {
      (async() => {
        const res2 = await fetch(`https://matrix-116-fakebook.onrender.com/api/post`)
        if (res2.ok) {
            const data2 = await res2.json()
            setPost(data2)
        }
      }) 
    })
    

    return(
        <>
        <Body sidebar makePost>
            {details.length === 0 && post.length === 0? (
            <Spinner animation='border'/>) : (
                <>
            {details.map((c) => {
                
                return <Character
                    key={c.id}
                    char={c}
                /> 
            })}
            {post.map((p) => {
                return <Post 
                    key={p.id}
                    post={p}
                />
            })}
            </>
        )}
        </Body>
        </>
    )
}
import Character from "../components/Character";


export default function DashBoard () {
    const chaArr = [
        {id: 1, name: "Harry Potter", img:"https://ik.imagekit.io/hpapi/harry.jpg"},
        {id: 2, name: "Hermione Granger", img:"https://ik.imagekit.io/hpapi/hermione.jpeg"},
        {id: 3, name: "Ron Weasley", img:"https://ik.imagekit.io/hpapi/ron.jpg"}
    ]
    return (
        <div>
            {chaArr.map((c) => {
                return <Character
                    key={c.id.toString()}
                    char={c}
                />
            })}
        </div>
    )
}
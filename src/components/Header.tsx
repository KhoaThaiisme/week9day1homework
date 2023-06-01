import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'


export default function Header() {
    return (
        <>
        <Navbar bg='dark' sticky='top' className='Header'>
            <Container>
                <Navbar.Brand>Harry&Friends</Navbar.Brand>
            </Container>
        </Navbar>  
        </>
    )
}
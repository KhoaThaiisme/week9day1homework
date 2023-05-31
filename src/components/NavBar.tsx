import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'


export default function NavBar() {
    return (
        <>
        <Navbar bg='light' sticky='top' className='Header'>
            <Container>
                <Navbar.Brand>Harry&Friends</Navbar.Brand>
            </Container>
        </Navbar>  
        </>
    )
}
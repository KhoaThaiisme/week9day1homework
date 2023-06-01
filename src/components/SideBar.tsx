import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'

export default function Sidebar(){


  return (
    <Navbar sticky='top' className='flex-column Sidebar'>
      <Nav.Item>
        <Nav.Link as={NavLink} to='/dashboard'>Dashboard</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to='/login'>Login</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to='/character'>Who is This?</Nav.Link>
      </Nav.Item>
    </Navbar>
  )
}
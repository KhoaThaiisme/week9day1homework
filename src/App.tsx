import Container from 'react-bootstrap/Container';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Logout from './components/Logout';
import DashBoard from './pages/Dashboard'
import DetailsPage from './pages/DetailsPage';
import LoginPage from './pages/LoginPage';
import Register from './pages/Register';
 
function App() {

  return (
    <Container>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DashBoard />}/>
          <Route path='/character/:id' element={ <DetailsPage />}/>
          <Route path='/login' element={ <LoginPage />}/>
          <Route path="/logout" element={<Logout />} />
          <Route path='/register' element={ <Register />}/>
          <Route path='*' element={ <Navigate to='/' />}/>
        </Routes>
      </BrowserRouter>
    </Container>
  )
}

export default App

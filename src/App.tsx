import Container from 'react-bootstrap/Container';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import DashBoard from './pages/Dashboard'
import DetailsPage from './pages/DetailsPage';
 
function App() {

  return (
    <Container>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DashBoard />}/>
          <Route path='/character/:id' element={ <DetailsPage />}/>
          <Route path='*' element={ <Navigate to='/' />}/>
        </Routes>
      </BrowserRouter>
    </Container>
  )
}

export default App

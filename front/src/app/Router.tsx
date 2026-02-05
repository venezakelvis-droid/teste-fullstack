import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PersonsPage } from '../pages/Persons/PersonsPage'
import "../styles/global.css"
import { Header } from '../components/Layout/Header'

export function Router() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<PersonsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

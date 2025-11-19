
import './App.css'
import Smaller from './Components/Smaller.jsx'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layouts/Layout.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import { ROUTES } from './utils/Routes.js'
import Services from './Pages/Services.jsx'

function App() {
  return (
    <>
      <Smaller />
      <main className="min-h-screen bg-black text-white">
        <Routes>
          <Route path={ROUTES.HOME} element={<Layout />}>
            <Route index element={<Home />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.CONTACT} element={<Contact />} />
            <Route path={ROUTES.SERVICES} element={<Services />} />
          </Route>
        </Routes>
      </main>
    </>
  )
}

export default App

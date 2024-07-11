import Footer from "./Components/Footer"
import GlobalStyles from "./Components/GlobalStyle"
import Header from "./Components/Header"
import Home from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pg404 from "./pages/404"
import CrearVideo from "./pages/CrearVideo";

function App() {

  return (
    <Router>
      <GlobalStyles/>
      <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/NuevoVideo" element={<CrearVideo/>}/>
          <Route path="/*" element={<Pg404/>}/>
        </Routes>
      <Footer/>
    </Router>
  )
}

export default App

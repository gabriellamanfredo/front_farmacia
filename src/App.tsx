import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import ListaCategorias from "./components/categorias/listarCategorias/ListarCategorias"
import FormularioCategorias from "./components/categorias/formularioCategorias/FormularioCategorias"
import DeletarCategorias from "./components/categorias/deletarCategorias/DeletarCategorias"


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='min-h-[80vh]'>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/categorias" element={<ListaCategorias />} />
          <Route path="/cadastroCategoria" element={<FormularioCategorias />} />
          <Route path="/editarCategoria/:id" element={<FormularioCategorias />} />
          <Route path="/deletarCategoria/:id" element={<DeletarCategorias />} />

        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
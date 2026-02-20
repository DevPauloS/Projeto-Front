import Cadastro from "./pages/Cadastro";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Login from "./pages/Login";
import ListarUsuarios from "./pages/Lista";
import { House } from "lucide-react";
import Inicial from "./pages/Inicial";

function App() {
  return (
    <>
      <BrowserRouter>
        <header
          className="from-blue-200 to-pink-200
 text-gray-900 p-4 shadow-md flex justify-between"
        >
          <Link to="/" className="text-gray-900">
            <House />
          </Link>          
          <Login/>       
        </header>        
        <Routes>
          
          <Route path="/" element={<Inicial />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/listar-usuarios" element={<ListarUsuarios />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import Cadastro from "./pages/Cadastro";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Login from "./pages/Login";
import ListarUsuarios from "./pages/Lista";
import { House } from "lucide-react";

function App() {
  return (
    <>
      <BrowserRouter>
        <header
          className="from-blue-500 to-indigo-700
 text-white p-4 shadow-md"
        >
          <Link to="/" className="text-pink-300 absolute">
            <House />
          </Link>
          <h1 className="text-2xl font-bold text-center text-blue-200">
            Sistema de Cadastro de Usuários
          </h1>
        </header>
        <Routes>
          <Route path="/" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/listar-usuarios" element={<ListarUsuarios />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

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
 text-white p-4 shadow-md flex justify-between"
        >
          <Link to="/" className="text-pink-600">
            <House />
          </Link>          
          <Login/>       
        </header>
        <Routes>
          
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/listar-usuarios" element={<ListarUsuarios />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

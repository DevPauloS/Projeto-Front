import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import api from "../../services/api";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const { data : token } = await api.post("/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      alert("Login bem sucedido!");      
      localStorage.setItem("token", token);      
      navigate("/listar-usuarios");
    } catch (error) {
      alert("Senha e/ou e-mail incorretos!");
    }    
  }  
  return (
    <div className="flex w-150 h-10 items-center justify-end">
      
      <form className="flex flex-row gap-1"  onSubmit={handleSubmit}>
        <input
          ref={emailRef}
          type="email"
          placeholder="Email"
          className=" px-2 py-1 bg-gradient-to-r from-blue-200 to-pink-200 w-40  rounded-4xl focus:outline-none text-gray-900 font-bold"
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Senha"
          className="px-2 py-2 w-40 bg-gradient-to-r from-blue-200 to-pink-200 rounded-4xl focus:outline-none font-bold text-gray-900"
        />
        <button className="w-30 bg-gradient-to-r from-blue-200 to-pink-200 text-gray-600 font-bold py-1 px-1 rounded-4xl hover:bg-blue-400">
          Login
        </button>
      </form>  
        <button onClick={() => navigate("/cadastro")} className="h-10 m-1 w-30 bg-gradient-to-r from-blue-200 to-pink-200 text-gray-600 font-bold py-1 px-1 rounded-4xl hover:bg-blue-400"
      >
       Cadastre-se      
      </button>
      
    </div>
  );
}

export default Login;

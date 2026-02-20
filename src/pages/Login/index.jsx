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
      const { data: token } = await api.post("/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      alert("Login bem sucedido!");
      localStorage.setItem("token", token);
      navigate("/listar-usuarios");
    } catch (error) {
      alert("Senha e/ou e-mail incorretos!");
    }
    console.log(emailRef.current.value, passwordRef.current.value);
  }

  return (
    <div className="flex w-100 h-10 items-center justify-center">
      
      <form className="flex flex-row gap-1" onSubmit={handleSubmit}>
        <input
          ref={emailRef}
          type="email"
          placeholder="Email"
          className="w-1/2 px-1 py-1 border border-gray-600 rounded-4xl focus:outline-none text-black"
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Senha"
          className="w-1/2 px-1 py-2 border border-gray-600 rounded-4xl focus:outline-none text-black"
        />
        <button className="w-1/2  bg-gradient-to-r from-blue-400 to-pink-500 text-gray-100 font-bold py-1 px-1 rounded-4xl hover:bg-blue-400">
          Login
        </button>
        <button onClick={() => navigate("/cadastro")} className="w-1/2  bg-gradient-to-r from-blue-400 to-pink-500 text-gray-100 font-bold py-1 px-1 rounded-4xl hover:bg-blue-400"
      >
       Cadastre-se      
      </button>
      </form>  
      
    </div>
  );
}

export default Login;

import { Link } from "react-router-dom";
import { useRef } from "react";
import api from "../../services/api";

function Cadastro() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  async function cadastrar(event) {
    event.preventDefault();

    try {
      if (
        nameRef.current.value === "" &&
        emailRef.current.value === "" &&
        passwordRef.current.value === ""
      ) {
        alert("Preencha os campos necessários!")
        return false;
      }
      await api.post("/cadastro", {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,        
      });
      alert("Usuário cadastrado");
    } catch (error) {
      alert("Erro ao cadastrar usuário");
    }    
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-gradient-to-r from-blue-300 to-pink-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-600">
        Cadastro
      </h2>
      <form className="flex flex-col gap-5" onSubmit={cadastrar}>
        <input
          ref={nameRef}
          type="text"
          placeholder="Nome"
          className="w-full px-3 py-2 border border-blue-400 rounded-4xl focus:outline-none text-gray-900 font-bold"
        />
        <input
          ref={emailRef}
          type="email"
          placeholder="Email"
          className="w-full px-3 py-2 border border-blue-400 rounded-4xl focus:outline-none text-gray-900 font-bold"
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Senha"
          className="w-full px-3 py-2 border border-blue-400 rounded-4xl focus:outline-none text-gray-900 font-bold"
        />
        <button className="w-full  bg-gradient-to-r from-blue-400 to-pink-400 text-gray-600 font-bold py-2 px-4 rounded-4xl hover:bg-blue-400 cur
        sor-pointer">
          Cadastrar
        </button>
      </form>      
    </div>
  );
}

export default Cadastro;

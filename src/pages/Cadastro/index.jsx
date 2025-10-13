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
    <div className="max-w-md mx-auto mt-10 bg-gray-300 p-8 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-400">
        Cadastro
      </h2>
      <form className="flex flex-col gap-5" onSubmit={cadastrar}>
        <input
          ref={nameRef}
          type="text"
          placeholder="Nome"
          className="w-full px-3 py-2 border border-gray-600 rounded-4xl focus:outline-none text-black"
        />
        <input
          ref={emailRef}
          type="email"
          placeholder="Email"
          className="w-full px-3 py-2 border border-gray-600 rounded-4xl focus:outline-none text-black"
        />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Senha"
          className="w-full px-3 py-2 border border-gray-600 rounded-4xl focus:outline-none text-black"
        />
        <button className="w-full  bg-gradient-to-r from-blue-400 to-pink-300 text-gray-100 font-bold py-2 px-4 rounded-4xl hover:bg-blue-400">
          Cadastrar
        </button>
      </form>
      <Link
        to="/login"
        className="text-blue-400 hover:underline mt-4 block text-center font-bold"
      >
        Já tem uma conta? Faça login!
      </Link>
    </div>
  );
}

export default Cadastro;

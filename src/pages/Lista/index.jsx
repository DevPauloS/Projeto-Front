import api from "../../services/api";
import { useEffect, useState } from "react";

function ListarUsuarios() {
  const [allUsers, setAllUsers] = useState();

  useEffect(() => {
    async function loadUsers() {
      const token = localStorage.getItem("token");
      const {
        data: { user },
      } = await api.get("/listar-usuarios", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAllUsers(user);
    }
    loadUsers();
  }, []);

  return (
    <div className="max-w-md mx-auto mt-10 bg-gray-300 p-8 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-400">
        Lista de Usuários Criados
      </h2>
      <ul className="space-y-2">
        {!allUsers && (
          <li className="bg-gray-300 p-4 border border-gray-300 rounded-lg shadow-lg">
            <p className="text-blue-400 block font-bold">
              Nenhum usuário encontrado!
            </p>
          </li>
        )}
        {allUsers &&
          allUsers.length > 0 &&
          allUsers.map((user) => (
            <li
              key={user.id}
              className="bg-gray-300 p-4 border border-gray-300 rounded-lg shadow-lg"
            >
              {/* <p className="font-semibold">ID: {user.id}</p> */}
              <p className="text-blue-400 block font-bold">Nome: {user.name}</p>
              {/* <p className="text-blue-400 block font-bold">E-mail: {user.email}</p> */}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ListarUsuarios;

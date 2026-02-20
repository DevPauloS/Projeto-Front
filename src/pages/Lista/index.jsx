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
    <div className="max-w-md mx-auto mt-10 p-8 bg-gradient-to-r from-blue-300 to-pink-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-600">
        Lista de Usuários Criados
      </h2>
      <ul className="space-y-2">
        {allUsers &&
          allUsers.length > 0 &&
          allUsers.map((user) => (
            <li
              key={user.id}
              className="p-4 bg-gradient-to-r from-blue-200 to-pink-200 rounded-lg shadow-lg text-gray-600"
            >
              {/* <p className="font-semibold">ID: {user.id}</p> */}
              <p className="block font-bold text-gray-600">Nome: {user.name}</p>
              {/* <p className="text-blue-400 block font-bold">E-mail: {user.email}</p> */}
            </li>
          ))}
        {!allUsers && (
          <li className="p-4 bg-gradient-to-r from-blue-200 to-pink-200 rounded-lg shadow-lg">
            <p className="text-gray-600 block font-bold">
              Nenhum usuário encontrado!
            </p>
          </li>
        )}
      </ul>
    </div>
  );
}

export default ListarUsuarios;

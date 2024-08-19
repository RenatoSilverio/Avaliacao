import React, { useMemo } from 'react';


const users = [
    { id: 1, name: 'Alice', age: 30, isActive: true },
    { id: 2, name: 'Bob', age: 25, isActive: false },
    { id: 3, name: 'Charlie', age: 35, isActive: true },
];

const transformData = (users) => {
    const Ativo = users.filter(user => user.isActive);
    const transformUser = Ativo.map(user => ({
        id: user.id,
        name: user.name
    }));

    transformUser.sort((a, b) => a.name.localeCompare(b.name));
    return transformUser;
};

const UserLista = ({ users }) => {
    const userFiltrado = useMemo(() => transformData(users), [users]);

    return (
        <div>
            <h1>Tarefa 01 - Manipulação de Arrays e Objetos</h1>

            <h2>Lista de Usuários Ativos</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.username} - {user.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};



const App = () => {
    return (
        <div>
            <UserLista users={users} />
        </div>
    );
};

export default App;

import React, { useState, useEffect } from 'react';

const fetchUserData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const filteredUsers = data.filter(user => user.username.startsWith('C'));

        return filteredUsers;
    } catch (error) {

        console.error('Error fetching user data:', error);
        throw error;
    }
};


const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const loadUserData = async () => {
            try {
                const fetchedUsers = await fetchUserData();
                setUsers(fetchedUsers);
            } catch (error) {
                setError('Failed to fetch users.');
            } finally {
                setLoading(false);
            }
        };

        loadUserData();
    }, []);

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <br />
            <br />
            <h1>Tarefa 02 - Função Assíncrona</h1>

            <h2>    Usuários filtrados que começam com a letra C.</h2>
            {users.length > 0 ? (
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            {user.username} - {user.name}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No users found.</p>
            )}
        </div>
    );
};

const Tarefa2 = () => {
    return (
        <div>
            <UserList />
            <br />
        </div>

    );
};

export default Tarefa2;

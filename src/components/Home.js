import React , {useState, useEffect} from 'react';

// const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/users';
const API_ENDPOINT = 'http://localhost:3000/users';

async function fetchData() {
    const response = await fetch(API_ENDPOINT);
    const data = await response.json();
    console.log('data:', data);
    return data;
}

const User = ({name}) => <div>{name}</div>

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        async function fetchUsers() {
            const users = await fetchData();
            setUsers(users);
        }
       fetchUsers();
    }, []);

    return (
        <div>
            {
                users.map(user => <User name = {user.username} key={user.username}/>)
            }
        </div>
    )
}

export default Home;


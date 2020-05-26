import React , {useState, useEffect} from 'react';
import Button from './Button'

// const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/users';
const API_ENDPOINT = 'http://localhost:3000/users/';

const Message = ({message}) => <div>{message}<hr /></div>

const Home = () => {
    const [messages, setMessages] = useState([]);
    // useEffect(() => {
    //     async function fetchUsers() {
    //         const users = await fetchData();
    //         setUsers(users);
    //     }
    //    fetchUsers();
    // }, []);
    async function fetchData(name) {
        const response = await fetch(API_ENDPOINT + name);
        const data = await response.json();
        setMessages(data);
    }
    

    return (
        <div>
            <Button name='hawaijar' fetchData={fetchData} />
            <Button name='mayengbam' fetchData={fetchData} />
            <hr />
            <div>
                {
                    messages.map(item => <Message key={item.id} message={item.message} />)
                }
            </div>
        </div>
    )
}

export default Home;


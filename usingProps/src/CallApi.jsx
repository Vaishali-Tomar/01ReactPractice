import React, {useEffect, useState} from 'react'

const CallApi = () => {
    const [users, setUsers] = useState([]);

    useEffect(() =>{
        const fetchData = async () =>{
            try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            if(!response.ok){
                throw new Error('Network not working');
            }
            const data = await response.json();
            setUsers(data);
           }catch(error) {
            console.error('fetching the error', error)
           }
            
        }
        fetchData();
    })
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
            <li key={user.id}>
                {user.name} - {user.email}
            </li>
        )) }
      </ul>
    </div>
  )
}

export default CallApi

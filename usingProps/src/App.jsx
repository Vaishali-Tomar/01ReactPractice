import React, { useCallback, useState } from 'react';
import CallApi from './CallApi';
import UserCard from './UserCard';

function App() {
  // Retrieve count from local storage or default to 0
  const storedCount = localStorage.getItem('count');
  const [count, setCount] = useState(storedCount ? parseInt(storedCount, 10) : 0);

  const increment = useCallback(() => {
    setCount(prevCount => {
      const newCount = prevCount + 1;
      // Store new count value in local storage
      localStorage.setItem('count', newCount.toString());
      return newCount;
    });
  }, []);

  const decrement = useCallback(() => {
    setCount(prevCount => {
      const newCount = prevCount - 1;
      // Store new count value in local storage
      localStorage.setItem('count', newCount.toString());
      return newCount;
    });
  }, []);

  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com' }
  ];

  return (
    <div>
      <h1>User Cards</h1>

      <h1>Count: {count}</h1>
      <CallApi />
      {users.map(user => (
        <UserCard key={user.id} name={user.name} email={user.email} />
      ))}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;

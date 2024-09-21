import './App.css';
import { useState, useEffect } from 'react'; 

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div className="App">
      <p>Usuarios y Mails</p>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>Nombre:</strong> {user.username} <br />
            <strong>Email:</strong> {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

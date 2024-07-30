// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// // import './App.css';
// import '../styles/App.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   // Function to handle the login form submission
//   const handleLogin = (e) => {
//     e.preventDefault();
//     const users = JSON.parse(localStorage.getItem('users')) || [];
//     const user = users.find(user => user.email === email && user.password === password);

//     if (user) {
//       localStorage.setItem('loggedInUser', JSON.stringify(user));
//       navigate('/account');
//     } else {
//       alert('Invalid email or password');
//     }
//   };

//   return (
//     <div className="container">
//       <h2 className="heading">Login</h2>
//       <form onSubmit={handleLogin} className="form">
//         <div className="form-group">
//           <label className="label">Email</label>
//           <input 
//             type="email" 
//             className="input" 
//             value={email} 
//             onChange={(e) => setEmail(e.target.value)} 
//           />
//         </div>
//         <div className="form-group">
//           <label className="label">Password</label>
//           <input 
//             type="password" 
//             className="input" 
//             value={password} 
//             onChange={(e) => setPassword(e.target.value)} 
//           />
//         </div>
//         <button type="submit" className="button">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/App.css';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      navigate('/account');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Not a user? <Link to="/">Register here</Link>
      </p>
    </div>
  );
};

export default Login;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/App.css';
// const Register = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const navigate = useNavigate();

//   // Function to handle the registration form submission
//   const handleRegister = (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       alert('Passwords do not match');
//       return;
//     }

//     const users = JSON.parse(localStorage.getItem('users')) || [];
//     const userExists = users.some(user => user.email === email);

//     if (userExists) {
//       alert('User already exists');
//     } else {
//       users.push({ email, password });
//       localStorage.setItem('users', JSON.stringify(users));
//       alert('Registration successful');
//       navigate('/login');
//     }
//   };

//   return (
//     <div className="container">
//       <h2 className="heading">Register</h2>
//       <form onSubmit={handleRegister} className="form">
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
//         <div className="form-group">
//           <label className="label">Confirm Password</label>
//           <input 
//             type="password" 
//             className="input" 
//             value={confirmPassword} 
//             onChange={(e) => setConfirmPassword(e.target.value)} 
//           />
//         </div>
//         <button type="submit" className="button">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/App.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find(user => user.email === email)) {
      alert('User already exists');
    } else {
      users.push({ email, password });
      localStorage.setItem('users', JSON.stringify(users));
      alert('Registration successful');
      navigate('/login');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
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
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default Register;

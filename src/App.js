// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './components/login';
// import Register from './components/registration';
// import Account from './components/Account';
// import './styles/App.css';
// import Layout from './layout';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//       <Route path="/" element={<Layout />} >
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/account" element={<Account />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// };

// export default App;



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Login from './components/login';
import Register from './components/registration';
import Account from './components/Account';




const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="account" element={<Account />} />
      </Routes>
    </Router>
  );
};

export default App;

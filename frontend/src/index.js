import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import reportWebVitals from './reportWebVitals';
import './dist/output.css';
import Footer from './components/Footer';
import UserList from './components/UserList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <UserList />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
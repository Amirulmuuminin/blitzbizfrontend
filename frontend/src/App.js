import React from 'react';
import { 
  Routes,
  Route,
} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Login from "./components/Login";
import Register from "./components/Register";
import UserList from "./components/UserList";
import TambahPengguna from './components/dashboard/TambahPengguna';
import EditPengguna from "./components/dashboard/EditPengguna";

function App() {
  return (
    <>
      <Navbar/>
        <Routes>
          <Route path="/" element={
            <Hero/>
            }/>

          <Route path="/eksplorasi" element={
            <></>
            }/>

          <Route path="/login" element={
            <Login/>
            }/>

          <Route path="/register" element={
            <Register/>
            }/>

          <Route path="/acara" element={
            <></>
            }/>

          <Route path="/users" element={
            <UserList/>
            }/>

          <Route path="/tambah-pengguna" element={
            <TambahPengguna/>
            }/>

          <Route path="/edit-pengguna/:id" element={
            <EditPengguna/>
            }/>    
        </Routes>
      <Footer/>
    </>
  );
}

export default App;

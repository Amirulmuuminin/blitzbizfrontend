import React from 'react'
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="hero min-h-screen">
        <div className="hero-content">
          <div className="card-body shadow-xl w-[450px]">

            <Link to="/" className="text-2xl font-bold my-4 italic text-center">
              Blitzbiz
            </Link>

            <h1 className="text-2xl font-bold mb-4">
              Login
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="Email Anda" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="Password Anda" className="input input-bordered" />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Lupa password?</a>
                <Link className="justify-between label-text-alt link link-hover" to="/register">Register</Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Login
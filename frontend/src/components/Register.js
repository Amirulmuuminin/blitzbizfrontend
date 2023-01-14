import React, {
  useState
} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [nama_lengkap_user, setName] = useState("")
  const [nama_user, setUserName] = useState("")
  const [email_user, setEmail] = useState("")
  const [password_user, setPassword] = useState("")
  const [peran_user, setPeran] = useState("Pengguna")
  const [verifikasi_user, setVerifikasi] = useState("Belum Terverifikasi")
  const [gambar_user, setGambar] = useState("")  


  const navigate = useNavigate()

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/users', {
        nama_lengkap_user,
        nama_user,
        email_user,
        password_user,
        peran_user,
        verifikasi_user,
        gambar_user,
      })
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="hero min-h-screen">
        <div className="hero-content">
          <div className="card-body shadow-xl w-[450px]">

            <Link to="/" className="text-2xl font-bold my-4 italic text-center">
              Blitzbiz
            </Link>

            <h1 className="text-2xl font-bold mb-4">
              Register
            </h1>

              {/* <form onSubmit={saveUser}> */}

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Nama Lengkap</span>
                  </label>
                  <input type="text" placeholder="Nama Anda" className="input input-bordered" 
                    value={nama_lengkap_user}
                    onChange={(e) => {
                      setName(e.target.value)
                    }}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" placeholder="Email Anda" className="input input-bordered" 
                    value={email_user}
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Username</span>
                  </label>
                  <input type="text" placeholder="Username Anda" className="input input-bordered" 
                    value={nama_user}
                    onChange={(e) => {
                      setUserName(e.target.value)
                    }}  
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" placeholder="Password Anda" className="input input-bordered" 
                    value={password_user}
                    onChange={(e) => {
                      setPassword(e.target.value)
                    }}
                  />
                  <label className="label">
                    <Link className="justify-between label-text-alt link link-hover" to="/login">Sudah punya akun?</Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" onClick={saveUser} className="btn btn-primary">Register</button>
                </div>

              {/* </form> */}
        </div>
      </div>
    </div>
  )
}

export default Register

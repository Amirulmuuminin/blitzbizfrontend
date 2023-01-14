import React, {
    useState,
    useEffect
  } from 'react'
  import { Link } from 'react-router-dom'
  import axios from 'axios'
  import { useNavigate, useParams } from 'react-router-dom'
  
  const EditPengguna = () => {
    const [nama_lengkap_user, setName] = useState("")
    const [nama_user, setUserName] = useState("")
    const [email_user, setEmail] = useState("")
    const [password_user, setPassword] = useState("")
    const [peran_user, setPeran] = useState("Pengguna")
    const [verifikasi_user, setVerifikasi] = useState("Belum Terverifikasi")
    const [gambar_user, setGambar] = useState("")
    const {id} = useParams()
  
    const navigate = useNavigate()
  
    const updateUser = async (e) => {
      e.preventDefault();
      try {
        await axios.patch(`http://localhost:5000/users/${id}`, {
          nama_lengkap_user,
          nama_user,
          email_user,
          password_user,
          peran_user,
          verifikasi_user,
          gambar_user,
        })
        navigate("/users")
      } catch (error) {
        console.log(error)
      }
    }

    const getUserById = async() => {
        const response = await axios.get(`http://localhost:5000/users/${id}`)
        setName(response.data.nama_lengkap_user)
        setUserName(response.data.nama_user)
        setEmail(response.data.email_user)
        setPassword(response.data.password_user)
        setPeran(response.data.peran_user)
        setVerifikasi(response.data.verifikasi_user)
        setGambar(response.data.gambar_user)
    }
    
    useEffect(() => {
      getUserById()
    }, [])
    
    return (
      <div className='container'>
  
            <Link to="/users" className='btn btn-primary my-4 w-fit'>Kembali</Link>
  
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
                  </div>

                  <hr></hr>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Peran</span>
                    </label>
                    <select type="text" placeholder="Pengguna/Admin" className="select select-bordered w-full" 
                      value={peran_user}
                      onChange={(e) => {
                        setPeran(e.target.value)
                      }}  
                    >
                      <option>Pengguna</option>
                      <option>Kontributor</option>
                      <option>Admin</option>
                    </select>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Verifikasi</span>
                    </label>
                    <select type="text" placeholder="Verifikasi/Belum terverifikasi" className="select select-bordered w-full" 
                      value={verifikasi_user}
                      onChange={(e) => {
                        setVerifikasi(e.target.value)
                      }}  
                    >
                      <option>Belum terverifikasi</option>
                      <option>Pending verifikasi</option>
                      <option>Terverifikasi</option>
                    </select>
                  </div>
                  
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Gambar pengguna</span>
                    </label>
                    <input type="file" className="file-input file-input-bordered w-full" />
                  </div>

                  <div className="form-control mt-6">
                    <button type="submit" onClick={updateUser} className="btn btn-primary">Perbarui</button>
                  </div>
  

      </div>
    )
  }
  
  export default EditPengguna
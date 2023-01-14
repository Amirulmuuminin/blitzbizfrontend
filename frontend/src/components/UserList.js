import React, {
    useState,
    useEffect,
} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const UserList = () => {
const [users, setUser] = useState([])

const getUsers = async() => {
    const response = await axios.get('http://localhost:5000/users')
    setUser(response.data)
}

const deleteUser = async(id) => {
    let konfirmasiHapus = window.confirm("Apakah Anda yakin ingin menghapus?")
    if (konfirmasiHapus) {
        try {
            await axios.delete(`http://localhost:5000/users/${id}`)
            getUsers()
        } catch (error) {
            console.log(error);
        }
    } else {
        return
    }
}

useEffect(() => {
    getUsers()
},[])

  return (
    <div className="container">

        <Link to="/tambah-pengguna" className='btn btn-primary my-4'>Tambah Pengguna</Link>

        <div className="overflow-x-auto w-full">
        <table className="table w-full">
            <thead>
                <tr>
                    <th className='!relative'>ID</th>
                    <th className='sticky left-0'>Detil</th>
                    <th>Nama</th>
                    <th>Verifikasi</th>
                    <th>Aksi</th>
                </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (

                        <tr key={user.id}>
                        <td>
                            {user.id}
                        </td>
                        <td className='sticky left-0 shadow-sm'>
                         <div className="flex items-center space-x-3">
                            <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={user.link_gambar_user} alt={user.nama_lengkap_user} />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">{user.nama_user}</div>
                            <div className="text-sm opacity-50">{user.peran_user}</div>
                            </div>
                        </div>
                        </td>
                        <td>
                            {user.nama_lengkap_user}
                        <br/>
                        <span className="badge badge-ghost badge-sm">{user.email_user}</span>
                        </td>
                            <td>
                                {user.verifikasi_user}
                            </td>
                        <th>
                            <Link to={`/edit-pengguna/${user.id}`} className="btn btn-info btn-xs mr-1">Edit</Link>
                            <button onClick={() => deleteUser(user.id)} className="btn btn-warning btn-xs">Delete</button>
                        </th>
                    </tr>

                    ))}
                    
            </tbody>

            <tfoot>
            <tr>
                <th className='!relative'>ID</th>
                <th className='sticky left-0'>Detil</th>
                <th>Nama</th>
                <th>Verifikasi</th>
                <th>Aksi</th>
            </tr>
            </tfoot>
            
        </table>
    </div>
    </div>
  )
}

export default UserList
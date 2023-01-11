import React from 'react'
// import axios from 'axios'

 const UserList = () => {
// const [users, setUser] = useState([])

// useEffect(() => {
//     getUsers()
// },[])

// const getUsers = async() => {
//     const response = await axios.get('http://localhost:5000/users')
//     setUser(response.data)
// }

  return (
    <div className="container">
        <div className="overflow-x-auto w-full">
        <table className="table w-full">
            <thead>
                <tr>
                    <th>Detil</th>
                    <th>Nama</th>
                    <th>Verifikasi</th>
                    <th>Aksi</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='sticky left-0 shadow-sm'>
                        <div className="flex items-center space-x-3">
                            <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src="https://placeimg.com/80/80/people" alt="Avatar Tailwind CSS Component" />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">hasan</div>
                            <div className="text-sm opacity-50">Pengguna</div>
                            </div>
                        </div>
                        </td>
                        <td>
                            Muhammad Fachrul Hasan Mujtahid
                        <br/>
                        <span className="badge badge-ghost badge-sm">fachrul.hasan@gmail.com</span>
                        </td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                </svg>
                            </td>
                        <th>
                            <button className="btn btn-info btn-xs mr-1">Edit</button>
                            <button className="btn btn-warning btn-xs">Delete</button>
                        </th>
                    </tr>
            </tbody>

            <tfoot>
            <tr>
                <th>Detil</th>
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
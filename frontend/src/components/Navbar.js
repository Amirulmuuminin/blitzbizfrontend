function Navbar() {
    return (
        <header className="bg-base-100 border-b-2 z-10">
          <div className="container navbar">
            <div className="navbar-start">
              <a className="btn btn-ghost pl-1 hover:bg-white normal-case text-xl font-semibold italic">BlitzBiz</a>
            </div>
            <div className="navbar-center hidden lg:block">
              <ul className="menu menu-horizontal px-1">
                <li><a>Beranda</a></li>
                <li><a>Eksplorasi</a></li>
                <li><a>Acara & Program</a></li>
              </ul>
            </div>
            <div className="navbar-end">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="https://placeimg.com/80/80/people" />
                  </div>
                </label>
                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                  <li>
                    <label htmlFor="my-modal-login" className="justify-between">
                      Akun saya
                    </label>
                  </li>
                  <li><a>Listing saya</a></li>
                  <li><a>Pengaturan</a></li>
                </ul>
              </div>
              <input type="checkbox" id="my-modal-login" className="modal-toggle" />
              <label htmlFor="my-modal-login" className="modal cursor-pointer">
                <label className="modal-box relative p-2">
                  <div className="card-body">
                    <h1 className="text-2xl font-bold mb-4">
                      Login
                    </h1>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input type="text" placeholder="Email Anda" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input type="password" placeholder="Password Anda" className="input input-bordered" />
                      <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        <label htmlFor="my-modal-register" className="justify-between label-text-alt link link-hover">Register</label>
                      </label>
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn btn-primary">Login</button>
                    </div>
                  </div>
                </label>
              </label>
              <input type="checkbox" id="my-modal-register" className="modal-toggle" />
              <label htmlFor="my-modal-register" className="modal cursor-pointer">
                <label className="modal-box relative p-2">
                  <label htmlFor="my-modal-register" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                  <div className="card-body">
                    <h1 className="text-2xl font-bold mb-4">
                      <label className="justify-between">Register</label>
                    </h1>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Nama</span>
                      </label>
                      <input type="text" placeholder="Nama Anda" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input type="text" placeholder="Email Anda" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input type="password" placeholder="Password Anda" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn btn-primary">Register</button>
                    </div>
                  </div>
                </label>
              </label>
              <div className="btm-nav z-10 md:flex lg:hidden">
                <button className="active">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                </button>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                  </svg>
                </button>
                <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                </svg>
                </button>
              </div>
            </div>
          </div></header>
      );
}

export default Navbar;
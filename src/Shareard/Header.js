import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../AuthContext/AuthContext';
const Header = () => {

  const { user, logout } = useContext(AuthProvider)
  const signout = () => {
    logout()
      .then(() => { })
      .catch(() => { })
  }
  const menuItem = <React.Fragment>

  </React.Fragment>
  return (
    <div className="navbar bg-base-100 flex justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li className='font-bold rounded'><Link to='/'>Home</Link></li>
            <li className='font-bold rounded'><Link to='/blog'>Blog</Link></li>
            {user?.email ?
              <>
                {/* <li className='font-bold rounded' htmlFor="my-drawer-2"><Link to='/dashboard'>Dashboard</Link></li> */}
                <div className="avatar">
                  <div className="w-16 rounded-full mr-4">
                    <img src={user?.photoURL} />
                  </div>
                </div>
                <li><button className='font-bold rounded bg-base' onClick={signout}> SignOut </button></li>
              </>
              :
              <li className='font-bold rounded'><Link to='/login '>Login</Link></li>

            }
            <li></li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">Laptop-Resell</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li className='font-bold rounded'><Link to='/'>Home</Link></li>
          <li className='font-bold rounded'><Link to='/blog'>Blog</Link></li>
          {user?.email ?
            <>
              <li className='font-bold rounded' htmlFor="my-drawer-2"><Link to='/dashboard'>Dashboard</Link></li>
              <div className="avatar">
                <div className="w-16 rounded-full mr-4">
                  <img src={user?.photoURL} />
                </div>
              </div>
              <li><button className='font-bold rounded bg-base' onClick={signout}> SignOut </button></li>
            </>
            :
            <li className='font-bold rounded'><Link to='/login '>Login</Link></li>

          }
        </ul>
      </div>
      <div>
        <label htmlFor="my-drawer-2" tabIndex={2} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>

      </div>
    </div>
  );
};

export default Header;
import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthProvider } from '../../AuthContext/AuthContext';
import Footer from '../../Shareard/Footer';
import Header from '../../Shareard/Header';
import useAdmin from '../../useAdmin';
import useSeller from '../../useSeller';
import useTitle from '../../useTitle/Usetitle';




const DashLayout = () => {
    useTitle("dashboard")
    const { user } = useContext(AuthProvider)
    const [isAdmin]=useAdmin(user?.email)
   const [isSeller]=useSeller(user?.email)
    return (
        <div className='w-4/5 mx-auto'>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <div>    
                            <div className='flex flex-col justify-start items-center mt-6 -mx-2'>
                                <img
                                    className='object-cover w-24 h-24 mx-2 rounded-full'
                                    src={user?.photoURL}
                                    alt='avatar'></img>
                                <p>{user?.email}</p>
                                <p>{user?.displayName}</p>
                            </div>
                        </div>
                       
                      {
                        !isSeller && !isAdmin &&
                          <li><Link to='/dashboard/order'>My order</Link></li>
                      }
                        
                        {
                          !isAdmin &&  isSeller &&
                             <>
                             <li><Link to='/dashboard/addproducts'>Add A Product</Link></li>
                             <li><Link to='/dashboard/myproduct'>My product</Link></li>
                             </>
                        }
                       {
                        isAdmin &&
                       <> <li><Link to='/dashboard/seller'>seller</Link></li>
                          <li><Link to='/dashboard/user'>user</Link></li>
                         <li><Link to='/dashboard/report'>report</Link></li>
                       </>
                       }
                      
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashLayout;



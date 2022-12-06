import { createBrowserRouter } from "react-router-dom";
import Addproduct from "../Addproduct/Addproduct";
import Advertize from "../Advertize";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Blog from "../Blog/Blog";
import Categoryd from "../Category/Categoryd";
import Categoryunique from "../Category/Categoryunique/Categoryunique";
import AllsellerAnduser from "../Dasdbord/AllsellerAnduser";
import DashLayout from "../Dasdbord/DashLayout/DashLayout";
import Ordre from "../Dasdbord/Ordre";
import Report from "../Dasdbord/Report";
import Seller from "../Dasdbord/Seller";
import User from "../Dasdbord/User";
import ErrorPage from "../Errorpage/ErrorPage";
import Main from "../Layout/Main";
import Myproduct from "../Myproduct";
import Home from "../Pages/Home/Home/Home";
import AdminRoute from "../PrivateRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../PrivateRoute/SellerRoute";
export const router=createBrowserRouter([
    {
        path:"/",element:<Main></Main>,errorElement:<ErrorPage></ErrorPage>,children:[
            {
                path:"/",element:<Home></Home>
            },
            {
                path:"/login",element:<Login></Login>
            },
            {
                path:"/register",element:<Register></Register>
            },
            {
                path:"/blog",element:<Blog></Blog>
            },
            {
                path:"/advertize",element:<PrivateRoute><Advertize></Advertize></PrivateRoute>
            },
            {
                path:"/product/:category",element:<PrivateRoute><Categoryunique></Categoryunique></PrivateRoute>,
                loader:({params})=>fetch(`https://assignment-12-server-gold-five.vercel.app/product/${params.category}`)
            },
            {
                path:"/category/:id",element:<Categoryd></Categoryd>,
                loader:({params})=>fetch(`https://assignment-12-server-gold-five.vercel.app/category/${params.id}`)
            },
            
        ]
    },
    {
        path:"/dashboard",element:<PrivateRoute><DashLayout></DashLayout></PrivateRoute>,children:[
            {
                path:'/dashboard/order', element:<Ordre></Ordre>
            },
            {
                path:'/dashboard/seller', element:<AdminRoute><Seller></Seller></AdminRoute>
            },
            {
                path:'/dashboard/user',element:<AdminRoute><User></User></AdminRoute>
            },
            {
                path:'/dashboard/AllsellerAndbyer', element:<AllsellerAnduser></AllsellerAnduser>
            }, 
            {
                path:"/dashboard/addproducts",element:<SellerRoute><Addproduct></Addproduct></SellerRoute>
            },
            {
                path:"/dashboard/myproduct",element:<SellerRoute><Myproduct></Myproduct></SellerRoute>
            },
            {
                path:"/dashboard/report",element:<AdminRoute><Report></Report></AdminRoute>
            }
        ]
    }
])
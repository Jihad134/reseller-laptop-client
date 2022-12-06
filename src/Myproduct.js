import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthProvider } from './AuthContext/AuthContext';

const Myproduct = () => {
  const {user}=useContext(AuthProvider)
    const { data: myproducts = [],refetch } = useQuery({
        queryKey: ['myproduct'],
        queryFn: async () => {
            const res = await fetch(`https://assignment-12-server-gold-five.vercel.app/myproduct/?email=${user?.email}`)
            const data = await res.json()
            return data
        }
    })
    console.log(myproducts)
    const hendeldelte=(id)=>{
        
        const agree=window.confirm(`delete items`)
        if(agree){
            fetch(`https://assignment-12-server-gold-five.vercel.app/myproduct/${id}`,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.acknowledged){
                    toast.success('delete success')
                    refetch()
                }
            })
            .catch(err=>console.error(err))
        }
    }
    const advertizehadelar=(id)=>{
        console.log(id)
        fetch(`https://assignment-12-server-gold-five.vercel.app/advertize/${id}`,{
            method:"PUT",
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
                toast.success('advertize added')
                refetch()
            }
        })
    }
    return (
        <div className="overflow-x-auto w-full">
          <h1 className='text-4xl font-bold'>my product</h1>
  <table className="table w-full">
   
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Product</th>
        <th>Price</th>
        <th>Date</th>
        <th>Advertize</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
     {
      myproducts?.map((product,i)=> <tr key={product._id}>
        <th>
          <label>
           <p>{i+1 }</p>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={product.image}alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{product.productName}</div>
              <div className="text-sm opacity-50">{product.location}</div>
            </div>
          </div>
        </td>
        <td>
         price : {product.resellPrice}
          <br/>
          <span className="badge badge-ghost badge-sm">Original price: {product.originalPrice}</span>
        </td>
        <td>{product.date}</td>
        <th>
        {
            product?.advertize ? <button className='btn btn-ghost'>AdverTized</button> :  <button onClick={()=>advertizehadelar(product._id)} className="btn btn-primary">Advertize</button>
          }
         
         
        </th>
        <th>
        <button onClick={()=>hendeldelte(product._id)} className="btn btn-gray">Delete</button>
         
        </th>
      </tr>)  
     }
     
      
    </tbody>
    
    
    
  </table>
</div>
    );
};

export default Myproduct;

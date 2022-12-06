import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import useTitle from '../useTitle/Usetitle';

const Report = () => {
  useTitle("report")
    const { data: reports= [],refetch } = useQuery({
        queryKey: ['report'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-gold-five.vercel.app/report')
            const data = await res.json()
            return data
        }
    })
    console.log(reports)
    const hendeldelte=(id)=>{
        
        const agree=window.confirm(`delete items`)
        if(agree){
            fetch(`https://assignment-12-server-gold-five.vercel.app/report/${id}`,{
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
    return (
        <div>
            <div className="overflow-x-auto w-full">
           <table className="table w-full">
             
             <thead>
               <tr>
                 <th>
                   <label>
                     <input type="checkbox" className="checkbox" />
                   </label>
                 </th>
                 <th>Product</th>
                 <th>price</th>
                 <th>Seller</th>
                 <th>Delete</th>
                 <th></th>
               </tr>
             </thead>
             <tbody>
             {
                
                    reports?.map((report,i)=><tr>
                        <th>
                          <p>{i+1}</p>
                        </th>
                        <td>
                          <div className="flex items-center space-x-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img src={report.image} alt="Avatar Tailwind CSS Component" />
                              </div>
                            </div>
                            <div>
                              <div className="font-bold">{report.productName}</div>
                              <div className="text-sm opacity-50">{report.location}</div>
                            </div>
                          </div>
                        </td>
                        <td>
                         Price {report.resellPrice
}
                          <br/>
                          <span className="badge badge-ghost badge-sm">Originalprice {report.originalPrice}</span>
                        </td>
                        <td>{report.sellerName}</td>
                        <th>
                          <button className="btn btn-ghost btn-xl" onClick={()=>hendeldelte(report._id)}>DELETE</button>
                        </th>
                      </tr>)
             }
               
               
             </tbody>
             
             
           </table>
         </div>   
            
        </div>
    );
};

export default Report;
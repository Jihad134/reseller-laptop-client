import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllsellerAnduser = () => {
    const { data: AlluserAndsellers = [],refetch } = useQuery({
        queryKey: ['Allselleranduser'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-gold-five.vercel.app/Allselleranduser')
            const data = await res.json()
            return data
        }
    })
    console.log(AlluserAndsellers)
    const hendeldelte=(id)=>{
        
        const agree=window.confirm(`delete items`)
        if(agree){
            fetch(`https://assignment-12-server-gold-five.vercel.app/alluserseller/${id}`,{
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
        <div className="overflow-x-auto">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>Sl</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Roll</th>
                        <th>verify</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        AlluserAndsellers?.map((Seller, i) => <tr>
                            <th>{i + 1}</th>
                            <td>{Seller.name}</td>
                            <td>{Seller.email}</td>
                            <td>{Seller.role}</td>
                            <td>{Seller.verify}</td>
                            <td><button onClick={()=>hendeldelte(Seller._id)} className='btn btn-outline'>Delete</button></td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    )
};

export default AllsellerAnduser;
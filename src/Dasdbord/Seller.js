import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import useTitle from '../useTitle/Usetitle';

const Seller = () => {
    useTitle("seller-collection")
    const { data: sellers = [],refetch } = useQuery({
        queryKey: ['seller'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-gold-five.vercel.app/seller')
            const data = await res.json()
            return data
        }
    })
    console.log(sellers)
    const hendeldelte=(id)=>{
        
        const agree=window.confirm(`delete items`)
        if(agree){
            fetch(`https://assignment-12-server-gold-five.vercel.app/seller/${id}`,{
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
    const verify=(id)=>{
        fetch(`https://assignment-12-server-gold-five.vercel.app/verify/${id}`,{
            method:"PUT"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
                toast.success("Seller verified")
                refetch()
            }
           
        })
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
                        sellers?.map((Seller, i) => <tr>
                            <th>{i + 1}</th>
                            <td>{Seller.name}</td>
                            <td>{Seller.email}</td>
                            <td>{Seller.role}</td>
                            <td>{
                                Seller?.verify ? <button className='btn btn-ghost'>Verifed</button>  :
                                 <button className='btn btn-primary' onClick={()=>verify(Seller._id)}>Verify</button>
                                }</td>
                            <td><button onClick={()=>hendeldelte(Seller._id)} className='btn btn-outline'>Delete</button></td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default Seller;
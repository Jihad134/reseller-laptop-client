import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const User = () => {
    const { data: users = [],refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-gold-five.vercel.app/user')
            const data = await res.json()
            return data
        }
    })
    console.log(users)
    const hendeldelte=(id)=>{
        
        const agree=window.confirm(`delete items`)
        if(agree){
            fetch(`https://assignment-12-server-gold-five.vercel.app/user/${id}`,{
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
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Sl</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Roll</th>
                     
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map((user, i) => <tr>
                            <th>{i + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            
                            <td><button onClick={()=>hendeldelte(user._id)} className='btn btn-outline'>Delete</button></td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default User;
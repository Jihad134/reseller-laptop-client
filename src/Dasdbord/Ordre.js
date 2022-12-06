import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import useTitle from '../useTitle/Usetitle';

const Ordre = () => {
    useTitle("orders")
    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['booking'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-gold-five.vercel.app/booking')
            const data = await res.json()
            return data
        }
    })
    const hendeldelte = (id) => {

        const agree = window.confirm(`delete order`)
        if (agree) {
            fetch(`https://assignment-12-server-gold-five.vercel.app/booking/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.acknowledged) {
                        toast.success('delete success')
                        refetch()
                    }
                })
                .catch(err => console.error(err))
        }
    }

    console.log(bookings)
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>sr</th>
                        <th>Photo</th>
                        <th>Title</th>
                        <th>Location</th>
                        <th>Price</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings?.map((book, i) => <tr>
                            <td>{i+1}</td>

                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={book.image}alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </td>
                            <td>{book.itemName}</td>
                            <td>{book.location}</td>
                            <td>{book.price}</td>

                            <td><button className='btn btn-primary' onClick={() => hendeldelte(book._id)}>Delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Ordre;
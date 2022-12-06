import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Advertizemodal from './Advertizemodal';
import useTitle from './useTitle/Usetitle';

const Advertize = () => {
    useTitle("Advertize")
    const [order, setOrder] = useState(null)
    const { data: advertizes = [] } = useQuery({
        queryKey: ['advertize'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-gold-five.vercel.app/advertize')
            const data = await res.json()
            return data
        }
    })
  if(!advertizes?.length){
    return <div></div>
  }
    return (
        <div>
            <h2 className='text-4xl text-center font-bold my-4 text-blue-300'>Advertize section</h2>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
           {
                advertizes?.map(advertize => <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={advertize.image} alt="Shoes" style={{ height: "300px" }} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            ProductName :  {advertize.productName}
                        </h2>
                        <p className='card-title'>sellerName :{advertize.sellerName}</p>
                        <p className='card-title font-semibold text-red-400'>originalPrice:{advertize.originalPrice}</p>
                        <p className='card-title font-semibold text-green-400'>price:{advertize.resellPrice}</p>
                      
                    <p className='card-title font-semibold text-green-400'>Phone:{advertize.number}</p>
                    <p className='card-title font-semibold text-green-400'>Data:{advertize.date}</p>
                    <p className='card-title font-semibold text-green-400'>condition:{advertize.condition}</p>
                    <p className='card-title font-semibold text-green-400'>Used:{advertize.yearsofused}</p>
                    <p className='card-title font-semibold text-green-400'>description:{advertize.description}</p>
                        <p></p>
                        <div className="card-actions justify-end">

                            {
                                <label className="btn btn-primary" htmlFor="MY_ORDER" onClick={() => setOrder(advertize)}>BUY NOW</label>
                            }

                        </div>
                    </div>
                </div>)
            },
            {
                order && <Advertizemodal
                order={order}
                setOrder={setOrder}
                >

                </Advertizemodal>
            }
           </div>
        </div>
    );
};

export default Advertize;
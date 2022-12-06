import React from 'react';
import toast from 'react-hot-toast';


const CAtegoryCompo = ({ Option, modalsetProduct }) => {
    const { productName, image, resellPrice,sellerName,number, yearsofused,condition,Description, date, time, _id,originalPrice } = Option
    const reporthandelar=(id)=>{
        console.log(id)
        fetch(`https://assignment-12-server-gold-five.vercel.app/report/${id}`,{
            method:"PUT"
        })
        .then(res =>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
                toast.success('report successfull')
            }
        })
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" style={{height:"300px"}} /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                    ProductName :  {productName}
                    </h2>
                    <p className='card-title'>sellerName :{sellerName}</p>
                    <p className='card-title font-semibold text-red-400'>originalPrice:{originalPrice}</p>
                    <p className='card-title font-semibold text-red-400 '>Price:{resellPrice}</p>
                    <p className='card-title font-semibold text-green-400'>Phone:{number}</p>
                    <p className='card-title font-semibold text-green-400'>Data:{date}</p>
                    <p className='card-title font-semibold text-green-400'>condition:{condition}</p>
                    <p className='card-title font-semibold text-green-400'>Used:{yearsofused}</p>
                    <p className='card-title font-semibold text-green-400'>description:{Description}</p>
                    <p></p>
                    <div className="card-actions justify-end">

                    <button  className="btn"   onClick={()=>reporthandelar(_id)}>Report</button>

                        <label htmlFor="MY_BOOKING" onClick={() => modalsetProduct(Option)} className="btn">Book </label>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CAtegoryCompo;
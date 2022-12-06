import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthProvider } from './AuthContext/AuthContext';
import useTitle from './useTitle/Usetitle';

const Advertizemodal = ({order,setOrder}) => {
    useTitle("advertize-items")
    const {user}=useContext(AuthProvider)
    const {productName,resellPrice,image}=order
    const ordermodal=(event)=>{
        event.preventDefault()
        const form=event.target
        const phone=form.phone.value
        const location=form.location.value
        const booking={
            price:resellPrice,
            itemName:productName,
            email:user?.email,
            customerName:user?.displayName,
            phone,
            location,
            image
        }
        fetch('https://assignment-12-server-gold-five.vercel.app/booking',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
                setOrder(null)
                toast.success("booking")
                
            }
        })
    }
    return (
        <div>
            <input type="checkbox" id="MY_ORDER" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                       <label htmlFor="MY_ORDER" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                       
                       <form onSubmit={ordermodal}  className='grid grid-cols-1 gap-3 mt-10'>
                       
                        <input  type="text" readOnly defaultValue={user?.displayName} placeholder="Your Name" className="input w-full input-bordered" />
                        <input  type="email" readOnly defaultValue={user?.email} placeholder="Email Address" className="input w-full input-bordered" />
                        <input  type="text" readOnly defaultValue={productName}  placeholder="Your Name" className="input w-full input-bordered" />
                        <input type="text" readOnly defaultValue={resellPrice} placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="phone" type="text" required placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name="location" type="text" required placeholder="location" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Advertizemodal;
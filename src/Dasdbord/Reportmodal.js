import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthProvider } from '../AuthContext/AuthContext';

const Reportmodal = ({modalProduct,modalsetProduct}) => {
    const {productName,resellPrice}=modalProduct
    const { user } = useContext(AuthProvider)
    const reportSubmit=(event)=>{
        event.preventDefault()
        const form=event.target
        const phone=form.phone.value
        const location=form.location.value
        const report={
            price:resellPrice,
            itemName:productName,
            email:user?.email,
            customerName:user?.displayName,
            phone,
            location
        }
        fetch('https://assignment-12-server-gold-five.vercel.app/report',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(report)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
                modalsetProduct(null)
                toast.success("report post")
                
            }
        })
    }
    return (
        <div>
            <input type="checkbox" id="MY_REPORT" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                       <label htmlFor="MY_REPORT" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                       
                       <form onSubmit={reportSubmit} className='grid grid-cols-1 gap-3 mt-10'>
                       
                        <input name="name" type="text" readOnly defaultValue={user?.displayName} placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" readOnly defaultValue={user?.email} placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="name" type="text" readOnly defaultValue={productName} placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="name" type="text" readOnly defaultValue={resellPrice } placeholder="Your Name" className="input w-full input-bordered" />
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

export default Reportmodal;
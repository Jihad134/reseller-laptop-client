import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthProvider } from '../AuthContext/AuthContext';
import useTitle from '../useTitle/Usetitle';
const Addproduct = () => {
    const {user}=useContext(AuthProvider)
    useTitle("Add-product")
    // console.log(user)
    const Addpro=event=>{
        event.preventDefault()
        const date=new Date().toLocaleDateString()
        const time=new Date().toLocaleTimeString()
        const form=event.target
        const nameP=form.name.value
        const location=form.location.value
        const condition=form.condition.value
        const number=form.number.value
        const originalP=form.originalP.value
        const resellP=form.resellP.value
        const used=form.used.value
        const Description=form.Description.value
        const image=form.image.files[0]

        const category=form.category.value
        const formData=new FormData()
        formData.append('image',image)
        const uri=`https://api.imgbb.com/1/upload?key=23209f34ac15d7b333bef8dc0a7e57ee`
        fetch(uri,{
            method:"POST",
            body:formData
        })
        .then(res=>res.json())
        .then(imageData=>{
            console.log(imageData.data.url)
            const addproduct={
                productName:nameP,
                location,
                number,
                originalPrice:originalP,
                resellPrice:resellP,
                yearsofused:used,
                image:imageData.data.url,
                category,
                condition,
                Description,
                sellerName:user?.displayName,
                sellerEmail:user?.email,
                date,
                time
            }
            fetch('https://assignment-12-server-gold-five.vercel.app/addproduct',{
                method:"POST",
                headers:{
                    'content-type':"application/json"
                },
                body:JSON.stringify(addproduct)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
            if(data.acknowledged){
                toast.success("add product success")
            }
            })
        })

        
        
    }
    return (
        <div>
            <div className="hero ">
                <div className="hero-content ">
                    <div className="card    shadow-2xl bg-base-100">
                        <form onSubmit={Addpro} className="card-body flex ">
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input required type="text" name='name' placeholder="Product Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Description</span>
                                </label>
                                <input required type="text" name='Description' placeholder="Product Description" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input required type="text" name='location' placeholder="location" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input type="text" required name='number' placeholder="Phone Number" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">original Price</span>
                                </label>
                                <input required name='originalP' type="text" placeholder="original Price" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Resell Price</span>
                                </label>
                                <input required type="text" name='resellP' placeholder="Resell Price" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Years of used</span>
                                </label>
                                <input required type="text" name='used' placeholder="Years of used" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Picture</span>
                                </label>
                                <input required name='image' type="file" className="file-input file-input-bordered file-input-secondary w-full max-w-xs" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Category</span>
                                </label>
                                <select name='category' className="select select-bordered w-full max-w-xs">
                                    <option value='Hp' selected>HP</option>
                                    <option value='Dell'>DELL</option>
                                    <option value='Lenovo'>Lenovo</option>
                                </select>
                                
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product condition</span>
                                </label>
                                <select name='condition' className="select select-bordered w-full max-w-xs">
                                    <option value='good' selected>good</option>
                                    <option value='excellent'>excellent</option>
                                    <option value='fair'>fair</option>
                                </select>
                                
                            </div>
                            </div>

                            <div className="form-control mt-5  ">
                               <div className=''>
                                <button className="btn text-center w-1/3  btn-primary inline-block">AddProduct</button>
                               </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Addproduct;
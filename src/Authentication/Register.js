import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../AuthContext/AuthContext';

const Register = () => {
  
    const navigete=useNavigate()

    const { user, createUser, updateUser,signInWithgoogel } = useContext(AuthProvider)
    const  imageHostingkey='https://api.imgbb.com/1/upload?key=23209f34ac15d7b333bef8dc0a7e57ee'
    console.log(imageHostingkey)
    const submitbutton = event => {
        event.preventDefault()
        const form=event.target
        const name=form.name.value
        const email=form.email.value
        const password=form.password.value
        const image=form.image.files[0]
        const role=form.role.value
        // console.log(name,email,password,image,role)
        const formData=new FormData()
        formData.append('image',image)
        // console.log(name,email,password)
        const uri=`https://api.imgbb.com/1/upload?key=23209f34ac15d7b333bef8dc0a7e57ee`
        fetch(uri,{
            method:"POST",
            body:formData
        })
        .then(res=>res.json())
        .then(imageData=>{
            console.log(imageData.data.url)
            createUser(email,password)
            .then(data=>{
                const user=data.user
                toast.success('register success')
                navigete('/')
                console.log(user)
               
                updateUser(name,imageData.data.url)
                .then((data)=>{
                    saveUser(name,imageData.data.url,email,role)
                })
                .catch(err=>{
                    console.error(err)
                    toast.error(err.message)
                })
            })
            .catch(err=>console.error(err))
          })
        
        
           .catch(err => console.error(err))

    };
    const saveUser=(name,image,email,role)=>{
        console.log(name,email,image,role)
        const userInfo={
            name,
            image,
            email,
            role,
            verify: false,
        };
        console.log(userInfo)
        fetch('https://assignment-12-server-gold-five.vercel.app/user',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(userInfo)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
    const googleprovider=new GoogleAuthProvider()
   const singup=()=>{
   
    signInWithgoogel(googleprovider)
    .then((data)=>{
        saveUser(data.user.displayName,data.user.photoURL,data.user.email)
        toast.success('successfully created user')
        navigete('/')

    })
    .catch(err=>console.error(err))
  }
    return (
        <div>
            <div className='h-[800px] flex justify-center items-center'>
                <div className='w-96 p-7'>
                    <h2 className='text-xl text-center'>Sign Up</h2>
                    <form onSubmit={submitbutton}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Name</span></label>
                            <input required type="text" name='name' className="input input-bordered w-full max-w-xs" />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">image</span></label>
                            <input required type="file" name="image" id="" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Email</span></label>
                            <input required type="email" name='email' className="input input-bordered w-full max-w-xs" />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Password</span></label>
                            <input required type="password" name='password' className="input input-bordered w-full max-w-xs" />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <select name='role' className="select select-bordered w-full max-w-xs">
                                <option selected value='user'>user Account</option>
                                <option value='seller'>seller Account</option>
                            </select>
                        </div>
                        <input className='btn btn-accent w-full mt-4' value="Sign Up" type="submit" />



                    </form>
                    <p>Already have an account <Link className='text-primary' to="/login">Please Login</Link></p>
                    <div className="divider">OR</div>
                    <button className='btn btn-outline w-full' onClick={singup}>CONTINUE WITH GOOGLE</button>

                </div>
            </div>
        </div>
    );
};

export default Register;
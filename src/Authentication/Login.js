import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import  { AuthProvider } from '../AuthContext/AuthContext';

const Login = () => {
    
    const {signInuser,signInWithgoogel}=useContext(AuthProvider)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const location=useLocation()
    const form=location?.state?.form?.pathname || '/'
    const navigete=useNavigate()
   const loginform=(data)=>{
    signInuser(data.email,data.password)
    .then(result=>{
        const user=result.user
        toast.success('login success')
        navigete(form,{replace:true})
        console.log(user)
        
    })
    .catch(err=>{
        console.error(err)
        toast.error(err.message)
    })
   }
   const provider=new GoogleAuthProvider()
   const singnup=()=>{
    signInWithgoogel(provider)
    .then(result=>{
        const user=result.user
        console.log(user)
        toast.success("login success")
    })
    .catch(err=>{
        toast.error(err.message)
    })
   }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(loginform)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label"> <span className="label-text">Forget Password?</span></label>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full font-bold text-white' value="Login" type="submit" />
                    <div>
                        
                    </div>
                </form>
                <p>New to Reseller Laptop <Link className='text-primary' to="/register">Create new Account</Link></p>
                <div className="divider">OR</div>
                <button onClick={singnup} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;
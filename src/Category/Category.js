import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Category = () => {
    const [catagories, setCatagories] = useState()
    // const {title}=catagories
    // console.log(title)
    // console.log(catagories)
    
    useEffect(() => {
        fetch("https://assignment-12-server-gold-five.vercel.app/category")
            .then(res => res.json())
            .then(data => setCatagories(data))
    }, [catagories])
    return (
       <div>
         <h1 className='text-center text-5xl font-bold mb-5'>Laptop category</h1>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-4/5 mx-auto'>
            {
                catagories?.map(product => <Link to={`/product/${product.category}`} key={product._id}>
                    
                    <div  className="card w-80 bg-base-100 shadow-md">
                        <div className="card-body ">
                            <figure  className="px-6 pt-6">
                                <img  src={product.image} alt="Shoes" className="rounded-xl h-24" />
                            </figure>
                            <h2 className="card-title text-center">{product.title}</h2>
                           
                        </div>
                    </div>
                </Link>)
                
            }

          
        </div>
       </div>
    );
};

export default Category;

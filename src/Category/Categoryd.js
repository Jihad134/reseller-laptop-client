import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Categoryd = () => {
    const data = useLoaderData()
    const { productName, image, resellPrice, yearsofused, date, time, _id } = data
    console.log(data)
    return (
        <div className="card card-side bg-base-100 shadow-xl my-10">
            <figure><img src={image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title my-0">New movie is released!</h2>
                <p className="card-title my-0">Click the button to watch on Jetflix app.</p>
                <div className="card-actions ">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    );
};

export default Categoryd;
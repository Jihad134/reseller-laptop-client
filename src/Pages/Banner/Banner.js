import React from 'react';
import img1 from '../../images/image1.png'
import img2 from "../../images/image2.jpg"
import img3 from "../../images/image3.png"
import Banneritem from './Banneritem';

const Banner = () => {
    const sliderData = [
        {
            image: img1,
            prev: 3,
            title:"",
            id: 1,
            next: 2
        },
        {
            image: img2,
            prev: 1,
            title:"",
            id: 2,
            next: 3
        },
        {
            image: img3,
            prev: 2,
            title:"",
            id: 3,
            next: 1
        },
       
        
    ]
    return (
        <div>
            <div className="carousel w-full py-10">
  
            {
                sliderData?.map(slider=><Banneritem
                key={slider.id}
                slider={slider}
                ></Banneritem>)
            }
         </div>
        </div>
    );
};

export default Banner;
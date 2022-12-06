import React from 'react';
import "./Banneritem.css"
const Banneritem = ({slider}) => {
    const {image,next,prev,id,title}=slider
    return (
        <div id={`slide ${id}`} className="carousel-item relative w-full ">
    <div className='carousel-img'>
    <img src={image} alt="" style={{"height":"100vh","width":"100vw"}} className="w-full rounded-xl" />
    </div>
    <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
      <h1 className='text-5xl font-bold text-white'>{title}</h1>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href={`#slide ${prev}`} className="btn btn-circle mr-5">❮</a> 
      <a href={`#slide ${next}`}  className="btn btn-circle">❯</a>
    </div>
  </div> 
    );
};

export default Banneritem;
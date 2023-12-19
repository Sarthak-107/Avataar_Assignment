import React,{useState} from "react";
import {carouselData} from './carouselData';
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'
import './style.css';
const Carousel = ({slides}) =>{
    const [current,setCurrent] =useState(0);
    const length = slides.length;
    const nextSlide = () => {
        setCurrent(current === length-1?0:current+1);
        
    }
    const prevslide = () => {
        setCurrent(current=== 0 ? length -1 : current -1)
    }
    console.log(current)

    if(!Array.isArray(slides)||slides.length<=0)
    {
        return null;
    }

    return (
       <>
       <div className="mid_section">
        <h1 > Featured Products</h1>
        <h3> Explore and discover a variety of products</h3>
            
        </div>
        <section className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevslide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} /> 
        {carouselData.map((slides,index) => {
        return (
                <div className= { index === current? 'slide active':'slide'} key ={index}> 
                {index === current &&(<img src = {slides.image} alt = 'images' className="image" />
                )}
                </div>
                )
            })
        }
        </section>
        </>
    )
}

export default Carousel

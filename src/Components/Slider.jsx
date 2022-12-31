import React,{useState,useEffect} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"
import axios from 'axios'

// import Swiper core and required modules
import SwiperCore, {
    Navigation
  } from 'swiper';
  
  // install Swiper modules
  SwiperCore.use([Navigation]);
  
const Slider = () => {
    const [isLoading,setLoading] = useState(true)
    const [sliders,setSliders] = useState([])
    const getSlider = ()=>{
        axios.get("Banner/").then((response)=>{
            console.log(response.data)
            setSliders(response.data)
            setLoading(false)
        }).catch((err)=>console.error(err))
    }
    useEffect(()=>{
        getSlider()
    },[])
  return (
   <>
   <Swiper navigation={true} loop={true} slidesPerView={1}>
   <div  className="slider m-0 p-0 swiper-wrapper home-slider">
    {isLoading ? (
        <h1 style={{fontSize:106+"px",marginTop:50+"px"}}>Loading Slider</h1>
    ) : (
        <>
        {sliders.map((item,index)=>(
            <SwiperSlide key={index}>
                <div className="swiper-slide  slide swiper-bg" style={{
                    backgroundImage : `url(${item.Banner})`,
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: '80vh',
                    position: 'relative',
                    }}>
                    <div className="container-fluid position-relative h-100">
                        <div className="slider-inner h-100">
                            <div className="row align-items-center  iq-ltr-direction h-100 ">
                            <div className="col-lg-7 col-md-12">
                                <a href="javascript:void(0);">
                                    <div className="channel-logo" data-iq-gsap="onStart" data-iq-position-x="-150" data-iq-position-y="0" data-iq-duration="1" data-iq-delay=".4">
                                        <img src="images/logo.png" className="c-logo" alt="streamit" loading="lazy"/>
                                    </div>
                                </a>
                                <h1 className="slider-text big-title title text-uppercase"  data-iq-gsap="onStart" data-iq-position-x="-150" data-iq-position-y="0" data-iq-duration="1" data-iq-delay=".4">
                                    {item.Title}
                                    </h1>
                                <div className="d-flex flex-wrap align-items-center r-mb-23" data-iq-gsap="onStart" data-iq-position-x="-150" data-iq-position-y="0" data-iq-duration="1" data-iq-delay=".4">
                                    <div className="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-3" >
                                        <span className="text-white ml-2">{item.StarRatings} Stars (lmdb)</span>
                                    </div>
                                    <div className="d-flex align-items-center mt-2 mt-md-3">
                                        <span className="badge badge-secondary p-2">{item.CoR}</span>
                                        <span className="ml-3">Approx. {Math.round(item.MovieLength/60)} Hrs </span>
                                    </div>
                                    <p data-iq-gsap="onStart" data-iq-position-x="0" data-iq-position-y="150" data-iq-duration="1" data-iq-delay=".5">
                                        {item.Description}										
                                    </p>
                                </div>
                                <div className="trending-list" data-wp_object-in="fadeInUp" data-delay-in="1.2">
                                    <div className="text-primary title starring">
                                        Year Released: <span className="text-body">
                                        <a href="#">{item.YoR}</a>
                                        </span>
                                    </div>
                                    <div className="text-primary title genres">
                                        Genres: <span className="text-body">
                                            {item.Genres ? (
                                                <a href="category-action.html">
                                                    {item.Genres.map((genre,index)=>(
                                                        <span key={index}>{genre},</span>
                                                    ))}
                                                </a>
                                            ) : "No Genre"}
                                            </span>
                                    </div>
                                    <div className="text-primary title tag">
                                        Tag: <span className="text-body">
                                            {item.MovieKeywords ? (
                                                item.MovieKeywords.map((keyword,index)=>(
                                                    <a href="tags/action.html">{keyword},</a>
                                                ))
                                            ) : " "}
                                        </span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center r-mb-23" data-iq-gsap="onStart" data-iq-position-x="0" data-iq-position-y="150" data-iq-duration="1" data-iq-delay=".6">
                                    <a href="show-details.html" className="btn btn-hover iq-button"><i className="fa fa-play mr-2"
                                        aria-hidden="true"></i>Play Now</a>
                                </div>
                            </div>
                            <div className=" col-lg-5 col-md-12 trailor-video iq-slider d-none d-lg-block">
                                <a href="video/trailer.mp4" className="video-open playbtn" tabIndex="0">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="80px" height="80px"
                                    viewBox="0 0 213.7 213.7" enableBackground="new 0 0 213.7 213.7" xmlSpace="preserve">
                                    <polygon className="triangle" fill="none" strokeWidth="7" strokeLinecap="round"
                                        strokeLinejoin="round" strokeMiterlimit="10"
                                        points="73.5,62.5 148.5,105.8 73.5,149.1 "></polygon>
                                    <circle className="circle" fill="none" strokeWidth="7" strokeLinecap="round"
                                        strokeLinejoin="round" strokeMiterlimit="10" cx="106.8" cy="106.8" r="103.3">
                                    </circle>
                                </svg>
                                    <span className="w-trailor">Watch Trailer</span>
                                </a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        ))}
         </>
    )}
    </div>
  </Swiper>
   </>
  )
}

export default Slider
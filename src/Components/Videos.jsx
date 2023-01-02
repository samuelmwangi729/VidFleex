import React ,{useState, useEffect}from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import Latest from './Latest'
import Popular from './Popular'
import "swiper/css";
import { Link } from 'react-router-dom'
import "swiper/css/navigation"
import SwiperCore, {
    Navigation
  } from 'swiper';
import axios from 'axios';
  SwiperCore.use([Navigation]);
const Videos = () => {
    const [loading,isLoading] = useState(true)
    const [sliders,setSlider] = useState([])
    const getSliders = async () =>{
        await axios.get("Sliders/").then((response)=>{
            setSlider(response.data)
            isLoading(false)
        })
    }
    useEffect(()=>{
        getSliders()
    },[])
  return (
    <>
     <section className="banner-container iq-rtl-direction pt-5">
        <div className="movie-banner tvshows-slider">
            <div className="swiper-banner-container "  data-swiper="banner-detail-slider">
                <div className="swiper-wrapper">
                    {loading? "Loading Movies Sliders" : (
                        <>
                            <Swiper navigation={true} loop={true} slidesPerView={1}>
                            {sliders && sliders.map((item,index)=>(
                                <SwiperSlide>
                                    <div className="swiper-slide show-video-banner-1" style={{
                                        backgroundImage:`url(${item.Banner})`,
                                        backgroundAttachment:'cover',
                                        backgroundPosition:'top center',
                                        backgroundRepeat:'no-repeat',
                                    }}>
                                        <div className="shows-content h-100">
                                            <div className="row align-items-center h-100">
                                                <div className="col-lg-7 col-md-12">
                                                <h1 className="slider-text big-title title text-uppercase" data-animation-in="fadeInLeft"
                                                    data-delay-in="0.6">{item.Title}</h1>
                                                <div className="flex-wrap align-items-center fadeInLeft animated" data-animation-in="fadeInLeft"
                                                    style={{opacity: 1}}>
                                                    <div className="d-flex align-items-center movie-banner-time">
                                                        <span className="badge badge-secondary p-2"> {item.CoR}</span>
                                                        <span className="ml-3">
                                                        {Math.floor(item.MovieLength/60)}
                                                        {Math.floor(item.MovieLength/60) == 1 ? (
                                                            " Hr "
                                                        ) : (
                                                            " Hrs "
                                                        )}
                                                        {item.MovieLength % 60} Mins
                                                        </span>
                                                        <span className="mx-3"><i className="ri-checkbox-blank-circle-fill"></i></span>
                                                        <span className="trending-year">
                                                            {item.YoR}
                                                        </span>
                                                    </div>
                                                    <p className="movie-banner-text" data-animation-in="fadeInUp" data-delay-in="1.2">
                                                        {item.Description}
                                                    </p>
                                                </div>
                                                <div className="d-flex align-items-center r-mb-23" data-animation-in="fadeInUp" data-delay-in="1.2">
                                                <Link to={`${"/Details/"+item.RandomId}`}className="btn btn-hover iq-button">
                                                <i className="fa fa-play mr-2"
                                                            aria-hidden="true"></i>Play Now
                                                </Link>
                                                </div>
                                                </div>
                                                <div className="col-lg-5 col-md-12 trailor-video iq-slider d-none d-lg-block">
                                                <Link to={`${"/Details/"+item.RandomId}`} className="video-open playbtn" tabIndex="0">
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
                                                </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                ))}
                            </Swiper>
                        </>
                    )}
                </div>
            </div>
        </div>
    </section>
    <Latest/>
    <Popular/>
    </>
  )
}

export default Videos
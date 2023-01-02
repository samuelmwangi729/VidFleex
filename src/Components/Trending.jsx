import React,{useState,useEffect} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"
import { Link } from 'react-router-dom'
// import Swiper core and required modules
import SwiperCore, {
    Navigation
  } from 'swiper';
import axios from 'axios';
  
  // install Swiper modules
  SwiperCore.use([Navigation]);
  
const Trending = () => {
    const [loading,isLoading] = useState(true)
    const [trending,setTrending] = useState([])
    const [mostpopular,setMostPopular] = useState([])
    const [loadingm,isLoadingm] = useState(true)
    const getTrending = async () =>{
        axios.get("/Trending").then((response)=>{
            setTrending(response.data)
            isLoading(false)
        })
    }
    const getPopular = async () =>{
        axios.get("/MostPopular").then((response)=>{
            setMostPopular(response.data)
            isLoadingm(false)
        })
    }
    useEffect(()=>{
        getTrending()
        getPopular()
    },[])
  return (
    <>
         <section class="" style={{marginTop:-20}}>
            <div class="container-fluid">
               <div class="row m-0 p-0">
                  <div id="iq-trending" class="s-margin iq-tvshow-tabs iq-rtl-direction iq-trending-tabs">
                     <div class="iq-main-header d-flex align-items-center justify-content-between">
                        <h4 class="main-title">
                           Trending				
                        </h4>
                     </div>
                     <div class="trending-contens position-relative ">
                        <div id="gallery-top" class="gallery-thumbs" data-swiper="gallery-top">
                            {loading ? "Loading Trending Movies" : (
                                <>
                                    <ul class="swiper-wrapper list-inline p-0 m-0  trending-slider-nav align-items-center ">
                                        <Swiper navigation={true} loop={true} slidesPerView={7}>
                                            {trending.map((item,index)=>(
                                                <SwiperSlide>
                                                    <li class="swiper-slide">
                                                    <Link to={`${"/Details/"+item.RandomId}`}>
                                                        <div class="movie-swiper position-relative">
                                                            <img src={item.Banner} alt="" /> 
                                                        </div>
                                                    </Link>
                                                    </li>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </ul>
                                </>
                            )}
                        </div>
                        <div class="relative" >
                            {loadingm ? "Loading Most Popular Movie" : (
                                <>
                                    <div class="trending-custom-tab">
                                        <div class="tab-title-info position-relative">
                                            <div class="tab-content trending-content" style={{
                                                backgroundImage: `url(${mostpopular.Banner})`,
                                                backgroundPosition: 'center center',
                                                backgroundSize: 'cover',
                                                backgroundRepeat: 'no-repeat',
                                                position: 'relative',}}>
                                                <div id="trending-data1" class="tab-pane fade active show ">
                                                <div class=" trending-info align-items-center w-100 animated fadeInUp iq-ltr-direction">
                                                    <a href="javascript:void(0);" tabindex="0">
                                                        <div class="res-logo">
                                                            <div class="channel-lso">
                                                            <img src={mostpopular.Image} class="c-logo" alt="streamit"/>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <h1 class="trending-text big-title text-uppercase">{mostpopular.Title}</h1>
                                                    <div class="d-flex align-items-center text-white text-detail">
                                                        <span class="badge badge-secondary p-3">{mostpopular.CoR}</span>
                                                        <span class="ml-3">{mostpopular.StarRatings} Stars (imdb)</span>
                                                        <span class="trending-year">{mostpopular.YoR}</span>
                                                    </div>
                                                    <div class="d-flex align-items-center series mb-4">
                                                        <a href="javascript:void(0);">
                                                            <img src="images/trending/trending-label.png" class="img-fluid" alt=""/>
                                                            </a>
                                                    </div>
                                                    <p class="trending-dec">
                                                        {mostpopular.Description}
                                                    </p>
                                                    <div class="p-btns">
                                                        <div class="d-flex align-items-center p-0">
                                                        <Link to={`${"/Details/"+mostpopular.RandomId}`} className="btn btn-hover">
                                                            <i className="fa fa-play mr-1" aria-hidden="true"></i>
                                                            Play Now
                                                        </Link>
                                                        </div>
                                                    </div>
                                                    <div class="trending-list mt-4">
                                                        <div class="text-primary title">Genres: <span class="text-body">
                                                            {mostpopular.Genres.map((item,index)=>(
                                                                <span key={index}>{item+" , "}</span>
                                                            ))}
                                                           </span>
                                                        </div>
                                                        <div class="text-primary title">Tags <span class="text-body">
                                                            {mostpopular.MovieKeywords.map((item,index)=>(
                                                                 <span key={index}>{item+" , "}</span>
                                                            ))}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    </>
  )
}

export default Trending
import React,{useState,useEffect} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"

// import Swiper core and required modules
import SwiperCore, {
    Navigation
  } from 'swiper';
import axios from 'axios';
  
  // install Swiper modules
  SwiperCore.use([Navigation]);
  
const Recommended = () => {
   const [loading,isLoading] = useState(true)
   const [recomended,setRecommended] = useState([])
   const getRecommended = async () =>{
      await axios.get("Recommended").then((response)=>{
         setRecommended(response.data)
         isLoading(false)
      })
   }
   useEffect(()=>{
      getRecommended()
   },[])
  return (
    <React.Fragment>
      <section id="iq-favorites" class="iq-rtl-direction" style={{marginTop:50,marginBottom:0}}>
         <div class="container-fluid ">
            <div class="row">
               <div class="col-sm-12 overflow-hidden">
                  <div class="iq-ltr-direction d-flex align-items-center justify-content-between">
                     <h4 class="main-title">Recommended Videos</h4>
                     <a href="view-all-video.html" class="text-primary">View All</a>
                  </div>
               </div>
            </div>
            <div class="favourite-slider">
                  <div  class="swiper pt-2 pt-md-4 pt-lg-4 iq-rtl-direction" data-swiper="common-slider">
                    <ul class="swiper-wrapper m-0 p-0">
                        {loading ? (
                            <li className='text-center mb-5'>
                               <h4 class="main-title mb-5 text-success">Loading Recommended Videos</h4>
                            </li>
                        ) : (
                            <>
                                <Swiper navigation={true} loop={true} slidesPerView={7}>
                            { recomended.map((item,index)=>(
                                    <SwiperSlide key={index}>
                                        <li class="swiper-slide slide-item">
                                            <div class="block-images position-relative ">
                                                <div class="img-box" height={150 +"px !important"}>
                                                    <img src={item.Banner} class="img-fluid" alt="" loading="lazy" width={200+"px"} height={150 +"px"}/>
                                                </div>
                                                <div class="block-description">
                                                    <h6 class="iq-title"><a href="video-detail.html" style={{fontSize:12+"px"}}>{item.Title}</a></h6>
                                                    <div class="movie-time d-flex align-items-center my-2">
                                                    <span className="text-white"> 
                                                        {Math.floor(item.MovieLength/60)}
                                                        {Math.floor(item.MovieLength/60) == 1 ? (
                                                            " Hr "
                                                        ) : (
                                                            " Hrs "
                                                        )}
                                                        {item.MovieLength % 60} Mins
                                                    </span>
                                                    </div>
                                                    <div class="hover-buttons">
                                                    <a href="video-detail.html" role="button" class="btn btn-hover"><i
                                                            class="fa fa-play mr-1" aria-hidden="true"></i>
                                                        Play Now
                                                    </a>
                                                    </div>
                                                </div>
                                                <div class="block-social-info">
                                                    <ul class="list-inline p-0 m-0 music-play-lists">
                                                    <li class="share">
                                                        <span><i class="ri-share-fill"></i></span>
                                                        <div class="share-box">
                                                            <div class="d-flex align-items-center">
                                                                <a href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                                target="_blank" rel="noopener noreferrer" class="share-ico" tabindex="0"><i
                                                                    class="ri-facebook-fill"></i></a>
                                                                <a href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                                                target="_blank" rel="noopener noreferrer" class="share-ico" tabindex="0"><i
                                                                    class="ri-twitter-fill"></i></a>
                                                                <a href="#"
                                                                data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                                                                class="share-ico iq-copy-link" tabindex="0"><i
                                                                    class="ri-links-fill"></i></a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <span><i class="ri-heart-fill"></i></span>
                                                        <span class="count-box">2+</span>
                                                    </li>
                                                    <li><span><i class="ri-add-line"></i></span></li>
        
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                    </SwiperSlide>
                                    ))}
                                </Swiper>
                            </>
                        )}
                    </ul>
               </div>
            </div>
         </div>
      </section>      
    </React.Fragment>
  )
}

export default Recommended
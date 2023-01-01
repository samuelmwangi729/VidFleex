import React ,{useState,useEffect} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"
import SwiperCore, {
    Navigation
  } from 'swiper';
import axios from 'axios';
  SwiperCore.use([Navigation]);
const Popular = () => {
   const [loadingp,isLoadingp] =useState(true)
   const [loadings,isLoadings] =useState(true)
   const [popular,setPopular] = useState([])
   const [special,setSpecial] = useState([])
   const getPopular = async ()=>{
      await axios.get("Popular/").then((response)=>{
         setPopular(response.data)
         isLoadingp(false)
      })
   }
   const getSpecial = async ()=>{
      await axios.get("Special/").then((response)=>{
         setSpecial(response.data)
         isLoadings(false)
      })
   }
   useEffect(()=>{
      getPopular()
      getSpecial()
   },[])
  return (
    <>
      <section id="iq-favorites" class="iq-rtl-direction" style={{marginTop:-150}}>
         <div class="container-fluid ">
            <div class="row">
               <div class="col-sm-12 overflow-hidden">
                  <div class="iq-ltr-direction d-flex align-items-center justify-content-between">
                     <h4 class="main-title ">Popular Videos</h4>
                     <a href="view-all-video.html" class="text-primary iq-view-all">View All</a>
                  </div>
               </div>
            </div>
            <div class="favourite-slider">
                  <div  class="swiper pt-2 pt-md-4 pt-lg-4 iq-rtl-direction" data-swiper="common-slider">
                     <ul class="swiper-wrapper m-0 p-0">
                        {loadingp ? "Loading Popular Videos" : (
                        <Swiper navigation={true} loop={true} slidesPerView={8}>
                           {popular && popular.map((item,index)=>(
                              <SwiperSlide>
                                 <li class="swiper-slide slide-item">
                                    <div class="block-images position-relative ">
                                       <div class="img-box">
                                          <img src={item.Image} class="img-fluid" alt="" loading="lazy"/>
                                       </div>
                                       <div class="block-description">
                                          <h6 class="iq-title"><a href="video-detail.html">{item.Title}</a></h6>
                                          <div class="movie-time d-flex align-items-center my-2">
                                             <span class="text-white">
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
                                                Watch Trailer
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
                        )}
                     </ul>
               </div>
            </div>
         </div>
      </section>
      <section id="iq-favorites" class="iq-rtl-direction" style={{marginTop:-150}}>
         <div class="container-fluid ">
            <div class="row">
               <div class="col-sm-12 overflow-hidden">
                  <div class="iq-ltr-direction d-flex align-items-center justify-content-between">
                     <h4 class="main-title">Specials & Latest Videos</h4>
                     <a href="view-all-video.html" class="text-primary">View All</a>
                  </div>
               </div>
            </div>
            <div class="favourite-slider">
                  <div  class="swiper pt-2 pt-md-4 pt-lg-4 iq-rtl-direction" data-swiper="common-slider">
                  <ul class="swiper-wrapper m-0 p-0">
                        {loadings ? "Loading Special Videos" : (
                        <Swiper navigation={true} loop={true} slidesPerView={8}>
                           {special && special.map((item,index)=>(
                              <SwiperSlide>
                                 <li class="swiper-slide slide-item">
                                    <div class="block-images position-relative ">
                                       <div class="img-box">
                                          <img src={item.Image} class="img-fluid" alt="" loading="lazy"/>
                                       </div>
                                       <div class="block-description">
                                          <h6 class="iq-title"><a href="video-detail.html">{item.Title}</a></h6>
                                          <div class="movie-time d-flex align-items-center my-2">
                                             <span class="text-white">
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
                                                Watch Trailer
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
                        )}
                     </ul>
               </div>
            </div>
         </div>
      </section>
    </>
  )
}

export default Popular
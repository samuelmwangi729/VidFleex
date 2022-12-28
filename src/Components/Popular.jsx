import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"
import SwiperCore, {
    Navigation
  } from 'swiper';
  SwiperCore.use([Navigation]);
const Popular = () => {
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
                     <Swiper navigation={true} loop={true} slidesPerView={3}>
                     <SwiperSlide>
                        <li class="swiper-slide slide-item">
                           <div class="block-images position-relative ">
                              <div class="img-box">
                                 <img src="images/video/01.jpg" class="img-fluid" alt="" loading="lazy"/>
                              </div>
                              <div class="block-description">
                                 <h6 class="iq-title"><a href="video-detail.html">Shadow Warrior</a></h6>
                                 <div class="movie-time d-flex align-items-center my-2">
                                    <span class="text-white">1hr : 50mins</span>
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
                     <SwiperSlide>
                        <li class="swiper-slide slide-item ">
                           <div class="block-images position-relative ">
                              <div class="img-box">
                                 <img src="images/video/02.jpg" class="img-fluid" alt="" loading="lazy"/>
                              </div>
                              <div class="block-description">
                                 <h6 class="iq-title"><a href="video-detail.html">Narnia</a></h6>
                                 <div class="movie-time d-flex align-items-center my-2">
                                    <span class="text-white">3hr : 10mins</span>
                                 </div>
                                 <div class="hover-buttons">
                                    <a href="video-detail.html" role="button" class="btn btn-hover">
                                       <i class="fa fa-play mr-1" aria-hidden="true"></i>
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
                                       <span class="count-box">0</span>
                                    </li>
                                    <li><span><i class="ri-add-line"></i></span></li>

                                 </ul>
                              </div>
                           </div>
                        </li>
                     </SwiperSlide>
                     <SwiperSlide>
                        <li class="swiper-slide slide-item">
                           <div class="block-images position-relative">
                              <div class="img-box">
                                 <img src="images/video/03.jpg" class="img-fluid" alt="" loading="lazy"/>
                              </div>
                              <div class="block-description">
                                 <h6 class="iq-title"><a href="video-detail.html">X-Men</a></h6>
                                 <div class="movie-time d-flex align-items-center my-2">
                                    <span class="text-white">1hr : 45mins</span>
                                 </div>
                                 <div class="hover-buttons">
                                    <a href="video-detail.html" role="button" class="btn btn-hover">
                                       <i class="fa fa-play mr-1" aria-hidden="true"></i>
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
                                       <span class="count-box">25+</span>
                                    </li>
                                    <li><span><i class="ri-add-line"></i></span></li>

                                 </ul>
                              </div>
                           </div>
                        </li>
                     </SwiperSlide>
                     <SwiperSlide>
                        <li class="swiper-slide slide-item">
                           <div class="block-images position-relative">
                              <div class="img-box">
                                 <img src="images/video/04.jpg" class="img-fluid" loading="lazy" alt=""/>
                              </div>
                              <div class="block-description">
                                 <h6 class="iq-title"><a href="video-detail.html">Logan</a></h6>
                                 <div class="movie-time d-flex align-items-center my-2">
                                    <span class="text-white">1hr : 22mins</span>
                                 </div>
                                 <div class="hover-buttons">
                                    <a href="video-detail.html" role="button" class="btn btn-hover">
                                       <i class="fa fa-play mr-1" aria-hidden="true"></i>
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
                                       <span class="count-box">0</span>
                                    </li>
                                    <li><span><i class="ri-add-line"></i></span></li>

                                 </ul>
                              </div>
                           </div>
                        </li>
                     </SwiperSlide>
                     <SwiperSlide>
                        <li class="swiper-slide slide-item">
                           <div class="block-images position-relative">
                              <div class="img-box">
                                 <img src="images/video/05.jpg" class="img-fluid" loading="lazy" alt=""/>
                              </div>
                              <div class="block-description">
                                 <h6 class="iq-title"><a href="video-detail.html">Black Queen</a></h6>
                                 <div class="movie-time d-flex align-items-center my-2">
                                    <span class="text-white">1h 45mins</span>
                                 </div>
                                 <div class="hover-buttons">
                                    <a href="video-detail.html" role="button" class="btn btn-hover">
                                       <i class="fa fa-play mr-1" aria-hidden="true"></i>
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
                                       <span class="count-box">0</span>
                                    </li>
                                    <li><span><i class="ri-add-line"></i></span></li>

                                 </ul>
                              </div>
                           </div>
                        </li>
                     </SwiperSlide>
                     <SwiperSlide>
                        <li class="swiper-slide slide-item">
                           <div class="block-images position-relative ">
                              <div class="img-box">
                                 <img src="images/video/10.jpg" class="img-fluid" alt="" loading="lazy"/>
                              </div>
                              <div class="block-description">
                                 <h6 class="iq-title"><a href="video-detail.html">Shadow Warrior</a></h6>
                                 <div class="movie-time d-flex align-items-center my-2">
                                    <span class="text-white">1hr : 50mins</span>
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
                     <SwiperSlide>
                        <li class="swiper-slide slide-item ">
                           <div class="block-images position-relative ">
                              <div class="img-box">
                                 <img src="images/video/06.jpg" class="img-fluid" alt="" loading="lazy"/>
                              </div>
                              <div class="block-description">
                                 <h6 class="iq-title"><a href="video-detail.html">Narnia</a></h6>
                                 <div class="movie-time d-flex align-items-center my-2">
                                    <span class="text-white">3hr : 10mins</span>
                                 </div>
                                 <div class="hover-buttons">
                                    <a href="video-detail.html" role="button" class="btn btn-hover">
                                       <i class="fa fa-play mr-1" aria-hidden="true"></i>
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
                                       <span class="count-box">0</span>
                                    </li>
                                    <li><span><i class="ri-add-line"></i></span></li>

                                 </ul>
                              </div>
                           </div>
                        </li>
                     </SwiperSlide>
                     <SwiperSlide>
                        <li class="swiper-slide slide-item">
                           <div class="block-images position-relative">
                              <div class="img-box">
                                 <img src="images/video/07.jpg" class="img-fluid" alt="" loading="lazy"/>
                              </div>
                              <div class="block-description">
                                 <h6 class="iq-title"><a href="video-detail.html">X-Men</a></h6>
                                 <div class="movie-time d-flex align-items-center my-2">
                                    <span class="text-white">1hr : 45mins</span>
                                 </div>
                                 <div class="hover-buttons">
                                    <a href="video-detail.html" role="button" class="btn btn-hover">
                                       <i class="fa fa-play mr-1" aria-hidden="true"></i>
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
                                       <span class="count-box">25+</span>
                                    </li>
                                    <li><span><i class="ri-add-line"></i></span></li>

                                 </ul>
                              </div>
                           </div>
                        </li>
                     </SwiperSlide>
                     <SwiperSlide>
                        <li class="swiper-slide slide-item">
                           <div class="block-images position-relative">
                              <div class="img-box">
                                 <img src="images/video/08.jpg" class="img-fluid" alt="" loading="lazy"/>
                              </div>
                              <div class="block-description">
                                 <h6 class="iq-title"><a href="video-detail.html">Logan</a></h6>
                                 <div class="movie-time d-flex align-items-center my-2">
                                    <span class="text-white">1hr : 22mins</span>
                                 </div>
                                 <div class="hover-buttons">
                                    <a href="video-detail.html" role="button" class="btn btn-hover">
                                       <i class="fa fa-play mr-1" aria-hidden="true"></i>
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
                                       <span class="count-box">0</span>
                                    </li>
                                    <li><span><i class="ri-add-line"></i></span></li>

                                 </ul>
                              </div>
                           </div>
                        </li>
                     </SwiperSlide>
                     <SwiperSlide>
                        <li class="swiper-slide slide-item">
                           <div class="block-images position-relative">
                              <div class="img-box">
                                 <img src="images/video/09.jpg" class="img-fluid" alt="" loading="lazy"/>
                              </div>
                              <div class="block-description">
                                 <h6 class="iq-title"><a href="video-detail.html">Black Queen</a></h6>
                                 <div class="movie-time d-flex align-items-center my-2">
                                    <span class="text-white">1h 45mins</span>
                                 </div>
                                 <div class="hover-buttons">
                                    <a href="video-detail.html" role="button" class="btn btn-hover">
                                       <i class="fa fa-play mr-1" aria-hidden="true"></i>
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
                                       <span class="count-box">0</span>
                                    </li>
                                    <li><span><i class="ri-add-line"></i></span></li>
                                 </ul>
                              </div>
                           </div>
                        </li>
                     </SwiperSlide>
                    </Swiper>
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
                        <Swiper navigation={true} loop={true} slidesPerView={3}>
                            <SwiperSlide>
                                <li class="swiper-slide slide-item">
                                    <div class="block-images position-relative ">
                                        <div class="img-box">
                                            <img src="images/video/09.jpg" class="img-fluid" alt="" loading="lazy"/>
                                        </div>
                                        <div class="block-description">
                                            <h6 class="iq-title"><a href="video-detail.html">Shadow Warrior</a></h6>
                                            <div class="movie-time d-flex align-items-center my-2">
                                            <span class="text-white">1hr : 50mins</span>
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
                            <SwiperSlide>
                                <li class="swiper-slide slide-item ">
                                    <div class="block-images position-relative ">
                                        <div class="img-box">
                                            <img src="images/video/02.jpg" class="img-fluid" alt="" loading="lazy"/>
                                        </div>
                                        <div class="block-description">
                                            <h6 class="iq-title"><a href="video-detail.html">Narnia</a></h6>
                                            <div class="movie-time d-flex align-items-center my-2">
                                            <span class="text-white">3hr : 10mins</span>
                                            </div>
                                            <div class="hover-buttons">
                                            <a href="video-detail.html" role="button" class="btn btn-hover">
                                                <i class="fa fa-play mr-1" aria-hidden="true"></i>
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
                                                <span class="count-box">0</span>
                                            </li>
                                            <li><span><i class="ri-add-line"></i></span></li>

                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li class="swiper-slide slide-item">
                                    <div class="block-images position-relative">
                                        <div class="img-box">
                                            <img src="images/video/03.jpg" class="img-fluid" alt="" loading="lazy"/>
                                        </div>
                                        <div class="block-description">
                                            <h6 class="iq-title"><a href="video-detail.html">X-Men</a></h6>
                                            <div class="movie-time d-flex align-items-center my-2">
                                            <span class="text-white">1hr : 45mins</span>
                                            </div>
                                            <div class="hover-buttons">
                                            <a href="video-detail.html" role="button" class="btn btn-hover">
                                                <i class="fa fa-play mr-1" aria-hidden="true"></i>
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
                                                <span class="count-box">25+</span>
                                            </li>
                                            <li><span><i class="ri-add-line"></i></span></li>

                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li class="swiper-slide slide-item">
                                    <div class="block-images position-relative">
                                        <div class="img-box">
                                            <img src="images/video/04.jpg" class="img-fluid" alt="" loading="lazy"/>
                                        </div>
                                        <div class="block-description">
                                            <h6 class="iq-title"><a href="video-detail.html">Logan</a></h6>
                                            <div class="movie-time d-flex align-items-center my-2">
                                            <span class="text-white">1hr : 22mins</span>
                                            </div>
                                            <div class="hover-buttons">
                                            <a href="video-detail.html" role="button" class="btn btn-hover">
                                                <i class="fa fa-play mr-1" aria-hidden="true"></i>
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
                                                <span class="count-box">0</span>
                                            </li>
                                            <li><span><i class="ri-add-line"></i></span></li>

                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li class="swiper-slide slide-item">
                                    <div class="block-images position-relative">
                                        <div class="img-box">
                                            <img src="images/video/08.jpg" class="img-fluid" alt="" loading="lazy"/>
                                        </div>
                                        <div class="block-description">
                                            <h6 class="iq-title"><a href="video-detail.html">Black Queen</a></h6>
                                            <div class="movie-time d-flex align-items-center my-2">
                                            <span class="text-white">1h 45mins</span>
                                            </div>
                                            <div class="hover-buttons">
                                            <a href="video-detail.html" role="button" class="btn btn-hover">
                                                <i class="fa fa-play mr-1" aria-hidden="true"></i>
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
                                                <span class="count-box">0</span>
                                            </li>
                                            <li><span><i class="ri-add-line"></i></span></li>

                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li class="swiper-slide slide-item">
                                    <div class="block-images position-relative ">
                                        <div class="img-box">
                                            <img src="images/video/01.jpg" class="img-fluid" loading="lazy" alt=""/>
                                        </div>
                                        <div class="block-description">
                                            <h6 class="iq-title"><a href="video-detail.html">Shadow Warrior</a></h6>
                                            <div class="movie-time d-flex align-items-center my-2">
                                            <span class="text-white">1hr : 50mins</span>
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
                            <SwiperSlide>
                                <li class="swiper-slide slide-item ">
                                    <div class="block-images position-relative ">
                                        <div class="img-box">
                                            <img src="images/video/02.jpg" class="img-fluid" loading="lazy" alt=""/>
                                        </div>
                                        <div class="block-description">
                                            <h6 class="iq-title"><a href="video-detail.html">Narnia</a></h6>
                                            <div class="movie-time d-flex align-items-center my-2">
                                            <span class="text-white">3hr : 10mins</span>
                                            </div>
                                            <div class="hover-buttons">
                                            <a href="video-detail.html" role="button" class="btn btn-hover">
                                                <i class="fa fa-play mr-1" aria-hidden="true"></i>
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
                                                <span class="count-box">0</span>
                                            </li>
                                            <li><span><i class="ri-add-line"></i></span></li>

                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li class="swiper-slide slide-item">
                                    <div class="block-images position-relative">
                                        <div class="img-box">
                                            <img src="images/video/03.jpg" class="img-fluid" loading="lazy" alt=""/>
                                        </div>
                                        <div class="block-description">
                                            <h6 class="iq-title"><a href="video-detail.html">X-Men</a></h6>
                                            <div class="movie-time d-flex align-items-center my-2">
                                            <span class="text-white">1hr : 45mins</span>
                                            </div>
                                            <div class="hover-buttons">
                                            <a href="video-detail.html" role="button" class="btn btn-hover">
                                                <i class="fa fa-play mr-1" aria-hidden="true"></i>
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
                                                <span class="count-box">25+</span>
                                            </li>
                                            <li><span><i class="ri-add-line"></i></span></li>

                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li class="swiper-slide slide-item">
                                    <div class="block-images position-relative">
                                        <div class="img-box">
                                            <img src="images/video/04.jpg" class="img-fluid" loading="lazy" alt=""/>
                                        </div>
                                        <div class="block-description">
                                            <h6 class="iq-title"><a href="video-detail.html">Logan</a></h6>
                                            <div class="movie-time d-flex align-items-center my-2">
                                            <span class="text-white">1hr : 22mins</span>
                                            </div>
                                            <div class="hover-buttons">
                                            <a href="video-detail.html" role="button" class="btn btn-hover">
                                                <i class="fa fa-play mr-1" aria-hidden="true"></i>
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
                                                <span class="count-box">0</span>
                                            </li>
                                            <li><span><i class="ri-add-line"></i></span></li>

                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </SwiperSlide>
                            <SwiperSlide>
                                <li class="swiper-slide slide-item">
                                    <div class="block-images position-relative">
                                        <div class="img-box">
                                            <img src="images/video/08.jpg" class="img-fluid" loading="lazy" alt=""/>
                                        </div>
                                        <div class="block-description">
                                            <h6 class="iq-title"><a href="video-detail.html">Black Queen</a></h6>
                                            <div class="movie-time d-flex align-items-center my-2">
                                            <span class="text-white">1h 45mins</span>
                                            </div>
                                            <div class="hover-buttons">
                                            <a href="video-detail.html" role="button" class="btn btn-hover">
                                                <i class="fa fa-play mr-1" aria-hidden="true"></i>
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
                                                <span class="count-box">0</span>
                                            </li>
                                            <li><span><i class="ri-add-line"></i></span></li>

                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </SwiperSlide>
                        </Swiper>
                    </ul>
               </div>
            </div>
         </div>
      </section>
    </>
  )
}

export default Popular
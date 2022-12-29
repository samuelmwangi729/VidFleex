import React,{useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"
import { useSwiper } from 'swiper/react';
// import Swiper core and required modules
import SwiperCore, {
    Navigation,Pagination,Mousewheel
  } from 'swiper';
  // install Swiper modules
SwiperCore.use([Navigation,Pagination,Mousewheel]);
const Top = () => {
    const [img,setImg] = useState("")
  return (
    <>
        <div class="verticle-slider" style={{marginTop:-150}}>
            <div class="container-fluid">
                <section class="slider">
                  <div class="slider-flex position-relative">
                        <div class="swiper-button-prev verticle-btn"></div>
                        <h4 class="main-title ">Top 10 in United States</h4>
                        <div class="slider--col position-relative">
                            <div class="slider-thumbs" data-swiper="slider-thumbs">
                            <div class="swiper-container " data-swiper="slider-thumbs-inner">
                                <div class="swiper-wrapper top-ten-slider-nav">
                                <Swiper onRealIndexChange={(e)=>setImg($(e.imagesToLoad[e.activeIndex]).attr("src"))}  loop={true} slidesPerView={5} direction={"vertical"}  pagination  spaceBetween={10} mousewheel={true}>
                                <SwiperSlide>
                                    <div class="swiper-slide swiper-bg">
                                        <div class="block-images position-relative ">
                                        <div class="img-box slider--image">
                                            <img src="images/trending/07.jpg" id="sliderImg" class="img-fluid" alt="" loading="lazy"/>
                                        </div>
                                        <div class="block-description">
                                            <h6 class="iq-title"><a href="show-detail.html">Shadow Warrior</a></h6>
                                            <div class="movie-time d-flex align-items-center my-2">
                                                <span class="text-white">1hr : 50mins</span>
                                            </div>
                                            <div class="hover-buttons">
                                                <a href="show-detail.html" role="button" class="btn btn-hover"><i
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
                                                            target="_blank" rel="noopener noreferrer" class="share-ico"
                                                            tabindex="0"><i class="ri-facebook-fill"></i></a>
                                                        <a href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                                            target="_blank" rel="noopener noreferrer" class="share-ico"
                                                            tabindex="0"><i class="ri-twitter-fill"></i></a>
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
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="swiper-slide swiper-bg">
                                        <div class="block-images position-relative ">
                                        <div class="img-box slider--image">
                                            <img src="images/trending/08.jpg"  id="sliderImg" class="img-fluid" alt="" loading="lazy"/>
                                        </div>
                                        <div class="block-description">
                                            <h6 class="iq-title"><a href="show-detail.html">Narnia</a></h6>
                                            <div class="movie-time d-flex align-items-center my-2">
                                                <span class="text-white">3hr : 10mins</span>
                                            </div>
                                            <div class="hover-buttons">
                                                <a href="show-detail.html" role="button" class="btn btn-hover">
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
                                                            target="_blank" rel="noopener noreferrer" class="share-ico"
                                                            tabindex="0"><i class="ri-facebook-fill"></i></a>
                                                        <a href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                                            target="_blank" rel="noopener noreferrer" class="share-ico"
                                                            tabindex="0"><i class="ri-twitter-fill"></i></a>
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
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="swiper-slide swiper-bg">
                                        <div class="block-images position-relative">
                                        <div class="img-box slider--image">
                                            <img src="images/trending/09.jpg" class="img-fluid" alt="" loading="lazy"/>
                                        </div>
                                        <div class="block-description">
                                            <h6 class="iq-title"><a href="show-detail.html">X-Men</a></h6>
                                            <div class="movie-time d-flex align-items-center my-2">
                                                <span class="text-white">1hr : 45mins</span>
                                            </div>
                                            <div class="hover-buttons">
                                                <a href="show-detail.html" role="button" class="btn btn-hover">
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
                                                            target="_blank" rel="noopener noreferrer" class="share-ico"
                                                            tabindex="0"><i class="ri-facebook-fill"></i></a>
                                                        <a href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                                            target="_blank" rel="noopener noreferrer" class="share-ico"
                                                            tabindex="0"><i class="ri-twitter-fill"></i></a>
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
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="swiper-slide swiper-bg">
                                        <div class="block-images position-relative">
                                        <div class="img-box slider--image">
                                            <img src="images/trending/10.jpg" class="img-fluid" alt="" loading="lazy"/>
                                        </div>
                                        <div class="block-description">
                                            <h6 class="iq-title"><a href="show-detail.html">Logan</a></h6>
                                            <div class="movie-time d-flex align-items-center my-2">
                                                <span class="text-white">1hr : 22mins</span>
                                            </div>
                                            <div class="hover-buttons">
                                                <a href="show-detail.html" role="button" class="btn btn-hover">
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
                                                            target="_blank" rel="noopener noreferrer" class="share-ico"
                                                            tabindex="0"><i class="ri-facebook-fill"></i></a>
                                                        <a href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                                            target="_blank" rel="noopener noreferrer" class="share-ico"
                                                            tabindex="0"><i class="ri-twitter-fill"></i></a>
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
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="swiper-slide swiper-bg">
                                        <div class="block-images position-relative">
                                        <div class="img-box slider--image">
                                            <img src="images/trending/11.jpg" class="img-fluid" alt="" loading="lazy"/>
                                        </div>
                                        <div class="block-description">
                                            <h6 class="iq-title"><a href="show-detail.html">Black Queen</a></h6>
                                            <div class="movie-time d-flex align-items-center my-2">
                                                <span class="text-white">1h 45mins</span>
                                            </div>
                                            <div class="hover-buttons">
                                                <a href="show-detail.html" role="button" class="btn btn-hover">
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
                                                            target="_blank" rel="noopener noreferrer" class="share-ico"
                                                            tabindex="0"><i class="ri-facebook-fill"></i></a>
                                                        <a href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                                            target="_blank" rel="noopener noreferrer" class="share-ico"
                                                            tabindex="0"><i class="ri-twitter-fill"></i></a>
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
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="swiper-slide swiper-bg">
                                        <div class="block-images position-relative ">
                                        <div class="img-box slider--image">
                                            <img src="images/trending/12.jpg" class="img-fluid" alt="" loading="lazy"/>
                                        </div>
                                        <div class="block-description">
                                            <h6 class="iq-title"><a href="show-detail.html">Shadow Warrior</a></h6>
                                            <div class="movie-time d-flex align-items-center my-2">
                                                <span class="text-white">1hr : 50mins</span>
                                            </div>
                                            <div class="hover-buttons">
                                                <a href="show-detail.html" role="button" class="btn btn-hover"><i
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
                                                            target="_blank" rel="noopener noreferrer" class="share-ico"
                                                            tabindex="0"><i class="ri-facebook-fill"></i></a>
                                                        <a href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                                            target="_blank" rel="noopener noreferrer" class="share-ico"
                                                            tabindex="0"><i class="ri-twitter-fill"></i></a>
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
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="swiper-slide swiper-bg">
                                        <div class="block-images position-relative ">
                                        <div class="img-box slider--image">
                                            <img src="images/trending/13.jpg" class="img-fluid" alt="" loading="lazy"/>
                                        </div>
                                        <div class="block-description">
                                            <h6 class="iq-title"><a href="show-detail.html">Narnia</a></h6>
                                            <div class="movie-time d-flex align-items-center my-2">
                                                <span class="text-white">3hr : 10mins</span>
                                            </div>
                                            <div class="hover-buttons">
                                                <a href="show-detail.html" role="button" class="btn btn-hover">
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
                                                            target="_blank" rel="noopener noreferrer" class="share-ico"
                                                            tabindex="0"><i class="ri-facebook-fill"></i></a>
                                                        <a href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                                            target="_blank" rel="noopener noreferrer" class="share-ico"
                                                            tabindex="0"><i class="ri-twitter-fill"></i></a>
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
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="swiper-slide swiper-bg">
                                        <div class="block-images position-relative">
                                        <div class="img-box slider--image">
                                            <img src="images/trending/14.jpg" class="img-fluid" alt="" loading="lazy"/>
                                        </div>
                                        <div class="block-description">
                                            <h6 class="iq-title"><a href="show-detail.html">X-Men</a></h6>
                                            <div class="movie-time d-flex align-items-center my-2">
                                                <span class="text-white">1hr : 45mins</span>
                                            </div>
                                            <div class="hover-buttons">
                                                <a href="show-detail.html" role="button" class="btn btn-hover">
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
                                                            target="_blank" rel="noopener noreferrer" class="share-ico"
                                                            tabindex="0"><i class="ri-facebook-fill"></i></a>
                                                        <a href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                                            target="_blank" rel="noopener noreferrer" class="share-ico"
                                                            tabindex="0"><i class="ri-twitter-fill"></i></a>
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
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div class="swiper-slide swiper-bg">
                                        <div class="block-images position-relative">
                                        <div class="img-box slider--image">
                                            <img src="images/trending/15.png" class="img-fluid" alt="" loading="lazy"/>
                                        </div>
                                        <div class="block-description">
                                            <h6 class="iq-title"><a href="show-detail.html">Logan</a></h6>
                                            <div class="movie-time d-flex align-items-center my-2">
                                                <span class="text-white">1hr : 22mins</span>
                                            </div>
                                            <div class="hover-buttons">
                                                <a href="show-detail.html" role="button" class="btn btn-hover">
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
                                                            target="_blank" rel="noopener noreferrer" class="share-ico"
                                                            tabindex="0"><i class="ri-facebook-fill"></i></a>
                                                        <a href="https://twitter.com/intent/tweet?text=Currentlyreading"
                                                            target="_blank" rel="noopener noreferrer" class="share-ico"
                                                            tabindex="0"><i class="ri-twitter-fill"></i></a>
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
                                    </div>
                                </SwiperSlide>
                                </Swiper>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="slider-images" data-swiper="slider-images">
                            <div class="swiper-container " data-swiper="slider-images-inner">
                            <div class="swiper-wrapper ">
                                <div class="swiper-slide">
                                    <div class="slider--image block-images">
                                        <img src={img ? img : "images/trending/07.jpg"} loading="lazy" alt="" /></div>
                                    <div class="description">
                                        <div class="block-description">
                                        <h6 class="iq-title"><a href="show-detail.html">Shadow Warrior</a></h6>
                                        <div class="movie-time d-flex align-items-center my-2">
                                            <span class="text-white">1hr : 50mins</span>
                                        </div>
                                        <div class="hover-buttons">
                                            <a href="show-detail.html" role="button" class="btn btn-hover"><i
                                                class="fa fa-play mr-1" aria-hidden="true"></i>
                                            Play Now
                                            </a>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="slider--image block-images"><img src="images/trending/08.jpg" loading="lazy" alt="" /></div>
                                    <div class="description">
                                        <div class="block-description">
                                        <h6 class="iq-title"><a href="show-detail.html">Skull Island</a></h6>
                                        <div class="movie-time d-flex align-items-center my-2">
                                            <span class="text-white">1hr : 50mins</span>
                                        </div>
                                        <div class="hover-buttons">
                                            <a href="show-detail.html" role="button" class="btn btn-hover"><i
                                                class="fa fa-play mr-1" aria-hidden="true"></i>
                                            Play Now
                                            </a>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="slider--image block-images"><img src="images/trending/09.jpg" loading="lazy" alt="" /></div>
                                    <div class="description">
                                        <div class="block-description">
                                        <h6 class="iq-title"><a href="show-detail.html">Ghost Couple</a></h6>
                                        <div class="movie-time d-flex align-items-center my-2">
                                            <span class="text-white">1hr : 50mins</span>
                                        </div>
                                        <div class="hover-buttons">
                                            <a href="show-detail.html" role="button" class="btn btn-hover"><i
                                                class="fa fa-play mr-1" aria-hidden="true"></i>
                                            Play Now
                                            </a>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="slider--image block-images"><img src="images/trending/10.jpg" loading="lazy" alt="" /></div>
                                    <div class="description">
                                        <div class="block-description">
                                        <h6 class="iq-title"><a href="show-detail.html">Worst Vampire</a></h6>
                                        <div class="movie-time d-flex align-items-center my-2">
                                            <span class="text-white">1hr : 50mins</span>
                                        </div>
                                        <div class="hover-buttons">
                                            <a href="show-detail.html" role="button" class="btn btn-hover"><i
                                                class="fa fa-play mr-1" aria-hidden="true"></i>
                                            Play Now
                                            </a>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="slider--image block-images"><img src="images/trending/11.jpg" loading="lazy" alt="" /></div>
                                    <div class="description">
                                        <div class="block-description">
                                        <h6 class="iq-title"><a href="show-detail.html">Worst Vampire</a></h6>
                                        <div class="movie-time d-flex align-items-center my-2">
                                            <span class="text-white">1hr : 50mins</span>
                                        </div>
                                        <div class="hover-buttons">
                                            <a href="show-detail.html" role="button" class="btn btn-hover"><i
                                                class="fa fa-play mr-1" aria-hidden="true"></i>
                                            Play Now
                                            </a>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="slider--image block-images"><img src="images/trending/12.jpg" loading="lazy" alt="" /></div>
                                    <div class="description">
                                        <div class="block-description">
                                        <h6 class="iq-title"><a href="show-detail.html">Worst Vampire</a></h6>
                                        <div class="movie-time d-flex align-items-center my-2">
                                            <span class="text-white">1hr : 50mins</span>
                                        </div>
                                        <div class="hover-buttons">
                                            <a href="show-detail.html" role="button" class="btn btn-hover"><i
                                                class="fa fa-play mr-1" aria-hidden="true"></i>
                                            Play Now
                                            </a>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="slider--image block-images"><img src="images/trending/13.jpg" loading="lazy" alt="" /></div>
                                    <div class="description">
                                        <div class="block-description">
                                        <h6 class="iq-title"><a href="show-detail.html">Worst Vampire</a></h6>
                                        <div class="movie-time d-flex align-items-center my-2">
                                            <span class="text-white">1hr : 50mins</span>
                                        </div>
                                        <div class="hover-buttons">
                                            <a href="show-detail.html" role="button" class="btn btn-hover"><i
                                                class="fa fa-play mr-1" aria-hidden="true"></i>
                                            Play Now
                                            </a>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="slider--image block-images"><img src="images/trending/14.jpg" loading="lazy" alt="" /></div>
                                    <div class="description">
                                        <div class="block-description">
                                        <h6 class="iq-title"><a href="show-detail.html">Shadow Warrior</a></h6>
                                        <div class="movie-time d-flex align-items-center my-2">
                                            <span class="text-white">1hr : 50mins</span>
                                        </div>
                                        <div class="hover-buttons">
                                            <a href="show-detail.html" role="button" class="btn btn-hover"><i
                                                class="fa fa-play mr-1" aria-hidden="true"></i>
                                            Play Now
                                            </a>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="slider--image block-images"><img src="images/trending/15.png" loading="lazy" alt="" /></div>
                                    <div class="description">
                                        <div class="block-description">
                                        <h6 class="iq-title"><a href="show-detail.html">Shadow Warrior</a></h6>
                                        <div class="movie-time d-flex align-items-center my-2">
                                            <span class="text-white">1hr : 50mins</span>
                                        </div>
                                        <div class="hover-buttons">
                                            <a href="show-detail.html" role="button" class="btn btn-hover"><i
                                                class="fa fa-play mr-1" aria-hidden="true"></i>
                                            Play Now
                                            </a>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
               </section>
            </div>
        </div>
    </>
  )
}

export default Top
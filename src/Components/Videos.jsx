import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import Latest from './Latest'
import Popular from './Popular'
import "swiper/css";
import "swiper/css/navigation"
import SwiperCore, {
    Navigation
  } from 'swiper';
  SwiperCore.use([Navigation]);
const Videos = () => {
  return (
    <>
     <section class="banner-container iq-rtl-direction">
        <div class="movie-banner tvshows-slider">
            <div class="swiper-banner-container "  data-swiper="banner-detail-slider">
                <div class="swiper-wrapper">
                <Swiper navigation={true} loop={true} slidesPerView={1}>
                    <SwiperSlide>
                        <div class="swiper-slide show-video-banner-1 swiper-bg">
                            <div class="shows-content h-100">
                                <div class="row align-items-center h-100">
                                    <div class="col-lg-7 col-md-12">
                                    <h1 class="slider-text big-title title text-uppercase" data-animation-in="fadeInLeft"
                                        data-delay-in="0.6">Jumbo Queen</h1>
                                    <div class="flex-wrap align-items-center fadeInLeft animated" data-animation-in="fadeInLeft"
                                        style={{opacity: 1}}>
                                        <div class="d-flex align-items-center movie-banner-time">
                                            <span class="badge badge-secondary p-2"><i class="fa fa-eye"></i> 875 View</span>
                                            <span class="ml-3">3hr : 10mins</span>
                                            <span class="mx-3"><i class="ri-checkbox-blank-circle-fill"></i></span>
                                            <span class="trending-year">Mar 2021</span>
                                        </div>
                                        <p class="movie-banner-text" data-animation-in="fadeInUp" data-delay-in="1.2">
                                            Jumbo also known as Jumbo the Elephant and Jumbo the Circus Elephant, was a 19th-century male
                                            African bush elephant born in Sudan. Jumbo was exported to Jardin des Plantes, a zoo in
                                            Paris, and then transferred in 1865..
                                        </p>
                                    </div>
                                    <div class="d-flex align-items-center r-mb-23" data-animation-in="fadeInUp" data-delay-in="1.2">
                                        <a href="movie-details.html" class="btn btn-hover iq-button"><i class="fa fa-play mr-2"
                                                aria-hidden="true"></i>Play Now</a>
                                    </div>
                                    </div>
                                    <div class="col-lg-5 col-md-12 trailor-video iq-slider d-none d-lg-block">
                                    <a href="video/trailer.mp4" class="video-open playbtn">
                                        
                                        <span class="w-trailor">Watch Trailer</span>
                                    </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="swiper-slide show-video-banner-2 swiper-bg">
                            <div class="shows-content h-100">
                                <div class="row align-items-center h-100">
                                    <div class="col-lg-7 col-md-12">
                                    <h1 class="slider-text big-title title text-uppercase" data-animation-in="fadeInLeft"
                                        data-delay-in="0.6">Shadow Warrior</h1>
                                    <div class="flex-wrap align-items-center fadeInLeft animated" data-animation-in="fadeInLeft"
                                        style={{opacity: 1}}>
                                        <div class="d-flex align-items-center movie-banner-time">
                                            <span class="badge badge-secondary p-2">521 Views </span>
                                            <span class="ml-3">1hr : 50mins</span>
                                            <span class="mx-3"><i class="ri-checkbox-blank-circle-fill"></i></span>
                                            <span class="trending-year">March 2017</span>
                                        </div>
                                        <p class="movie-banner-text" data-animation-in="fadeInUp" data-delay-in="1.2">
                                            A shadow is a dark (real image) area where light from a light source is blocked by an opaque
                                            object. It occupies all of the three-dimensional volume behind an object with light in front
                                            of it.
                                        </p>
                                    </div>
                                    <div class="d-flex align-items-center r-mb-23" data-animation-in="fadeInUp" data-delay-in="1.2">
                                        <a href="movie-details.html" class="btn btn-hover iq-button"><i class="fa fa-play mr-2"
                                                aria-hidden="true"></i>Play Now</a>
                                    </div>
                                    </div>
                                    <div class="col-lg-5 col-md-12 trailor-video iq-slider d-none d-lg-block">
                                    <a href="video/trailer.mp4" class="video-open playbtn">
                                        <span class="w-trailor">Watch Trailer</span>
                                    </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="swiper-slide show-video-banner-3 swiper-bg">
                            <div class="shows-content h-100">
                                <div class="row align-items-center h-100">
                                    <div class="col-lg-7 col-md-12">
                                    <h1 class="slider-text big-title title text-uppercase" data-animation-in="fadeInLeft"
                                        data-delay-in="0.6">Worst Game</h1>
                                    <div class="flex-wrap align-items-center fadeInLeft animated" data-animation-in="fadeInLeft"
                                        style={{opacity: 1}}>
                                        <div class="d-flex align-items-center movie-banner-time">
                                            <span class="badge badge-secondary p-2">390 Views</span>
                                            <span class="ml-3">1hr : 44mins</span>
                                            <span class="mx-3"><i class="ri-checkbox-blank-circle-fill"></i></span>
                                            <span class="trending-year">Dec 2018</span>
                                        </div>
                                        <p class="movie-banner-text" data-animation-in="fadeInUp" data-delay-in="1.2">
                                            With the final Twilight film coming out this month, we found it necessary to list off the
                                            worst vampire movies of all time. Grae Drake, Senior Editor of Rotten Tomatoes, counts down
                                            the worst vampire movies ever made on The Best Movie Lists.
                                        </p>
                                    </div>
                                    <div class="d-flex align-items-center r-mb-23" data-animation-in="fadeInUp" data-delay-in="1.2">
                                        <a href="movie-details.html" class="btn btn-hover iq-button"><i class="fa fa-play mr-2"
                                                aria-hidden="true"></i>Play Now</a>
                                    </div>
                                    </div>
                                    <div class="col-lg-5 col-md-12 trailor-video iq-slider d-none d-lg-block">
                                    <a href="video/trailer.mp4" class="video-open playbtn">
                                        
                                        <span class="w-trailor">Watch Trailer</span>
                                    </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
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
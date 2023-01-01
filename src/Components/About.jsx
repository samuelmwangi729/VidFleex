import React from 'react'

const About = () => {
  return (
    <>
    <div className="iq-breadcrumb-one  iq-bg-over " style={{backgroundImage: "url(" + "/images/about-us/01.jpg" + ")",}}>  
        <div className="container-fluid"> 
            <div className="row align-items-center">
                <div className="col-sm-12">
                    <nav aria-label="breadcrumb" className="text-center iq-breadcrumb-two">
                        <h2 className="title">About</h2>
                        <ol className="breadcrumb main-bg">
                            <li className="breadcrumb-item"><a href="">Home</a></li> 
                            <li className="breadcrumb-item active">About</li>
                        </ol>
                    </nav>
                </div>
            </div> 
        </div>
    </div>
    <main id="main" className="site-main">
      <div className="container">
         <div className="row">
            <div className="col-lg-12 col-sm-12 mb-sm-4">
               <div className="text-center iq-title-box iq-title-default">
                  <h2 className="iq-title text-capitalize">
                    The Team
                  </h2>
                  <p className="iq-title-desc">
                     This Platform is entired build for educational purposes by the one and only Mwangi S. who is a full stack dev. 
                     My tech stack is Python, Apache , NGINX , 
                  </p>

               </div>
            </div>
         </div>
      </div>
      <div className="container-md container-fluid">
         <div className="row about-us-detail">
            <div className="col-md-3 mb-4">
               <div className="image-box">
                  <img width="265" height="345" src="https://pbs.twimg.com/profile_images/1462714291849764869/IKmrN08B_400x400.jpg" className="img-fluid attachment-large size-large" alt="" loading="lazy"/>
               </div>
               <div className="icon-box-content">
                  <div className="widget-container">
                     <p className="heading-title size-default">ceo</p>
                  </div>
                  <div className="widget-container">
                     <h4 className="heading-title size-default" style={{fontSize:20+"px",whiteSpace:'no-wrap'}}>Gen. P1rate Stelle</h4>
                  </div>
               </div>
            </div>
            <div className="col-md-3 mb-4">
               <div className="image-box">
                  <img width="265" height="345" src="https://pbs.twimg.com/profile_images/1462714291849764869/IKmrN08B_400x400.jpg" className="img-fluid attachment-large size-large" alt="" loading="lazy"/>
               </div>
               <div className="icon-box-content">
                  <div className="widget-container">
                     <p className="heading-title size-default">Designer</p>
                  </div>
                  <div className="widget-container">
                     <h4 className="heading-title size-default" style={{fontSize:20+"px",whiteSpace:'no-wrap'}}>Gen. P1rate Stelle</h4>
                  </div>
               </div>
            </div>
            <div className="col-md-3 mb-4">
               <div className="image-box">
                  <img width="265" height="345" src="https://pbs.twimg.com/profile_images/1462714291849764869/IKmrN08B_400x400.jpg" className="img-fluid attachment-large size-large" alt="" loading="lazy"/>
               </div>
               <div className="icon-box-content">
                  <div className="widget-container">
                     <p className="heading-title size-default">Developer</p>
                  </div>
                  <div className="widget-container">
                     <h4 className="heading-title size-default" style={{fontSize:20+"px",whiteSpace:'no-wrap'}}>Gen. P1rate Stelle</h4>
                  </div>
               </div>
            </div>
            <div className="col-md-3 mb-4">
               <div className="image-box">
                  <img width="265" height="345" src="https://pbs.twimg.com/profile_images/1462714291849764869/IKmrN08B_400x400.jpg" className="img-fluid attachment-large size-large" alt="" loading="lazy"/>
               </div>
               <div className="icon-box-content">
                  <div className="widget-container">
                     <p className="heading-title size-default">Designer</p>
                  </div>
                  <div className="widget-container">
                     <h4 className="heading-title size-default" style={{fontSize:20+"px",whiteSpace:'no-wrap'}}>Gen. P1rate Stelle</h4>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="container-fluid p-0" >
         <div className="map-container" style={{left:0 + "px"}}>
            <div className="container">
               <div className="row about-us-row text-center align-items-center">
                  <div className="col-md-6">
                     <div className="text-center">
                        <img width="497" height="477" src="images/about-us/06.jpg" className=" img-fluid attachment-large size-large" alt="" loading="lazy"/>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className=" text-left iq-title-box iq-title-default">
                        <h2 className="iq-title">
                           Contact Us Here
                        </h2>
                        <p className="iq-title-desc">Streamit is located in Los Angeles city and you can contact us at <a href="#">hello@streamit.com</a> for any tech-related support and assistance. We love to hear from our Streamit users.</p>
                        <div className="row mt-2 iq-rtl-direction">
                           <div className="col-md-4">
                              <div className="counter">                                 
                                 <span className="counter-number" data-duration="2000" data-to-value="4" data-from-value="0" data-delimiter=",">4</span>
                              </div>
                              <div className="counter-title">Branch</div>
                           </div>
                           <div className="col-md-4">
                              <div className="iq-contact-list" data-element_type="column">
                                 <div className="counter">                                 
                                    <span className="counter-number" data-duration="2000" data-to-value="4" data-from-value="0" data-delimiter=",">
                                    500+
                                    </span>
                                 </div>
                                 <div className="counter-title">Employee</div>
                              </div>
                           </div>
                           <div className="col-md-4">
                              <div className="iq-contact-list" data-element_type="column">
                                 <div className="counter">                                 
                                    <span className="counter-number" data-duration="2000" data-to-value="4" data-from-value="0" data-delimiter=",">
                                    1,000+
                                    </span>
                                 </div>
                                 <div className="counter-title">Clients</div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </main>
    </>
  )
}

export default About
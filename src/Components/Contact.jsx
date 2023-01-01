import React,{useState} from 'react'
import axios from 'axios'
const Contact = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')
    const [resp,setResp] = useState('')
    const sendMessage = async (e) =>{
        e.preventDefault()
        const formData={
            name,
            email,
            message
        }
        await axios.post("PostMessage/",formData).then((response)=>{
            setResp(response.data.data)
            setName('')
            setEmail('')
            setMessage('')
        })
    }
  return (
    <>
        <div className="iq-breadcrumb-one  iq-bg-over " style={{backgroundImage: "url(" + "/images/about-us/01.jpg" + ")",}}>  
            <div className="container-fluid"> 
                <div className="row align-items-center">
                    <div className="col-sm-12">
                        <nav aria-label="breadcrumb" className="text-center iq-breadcrumb-two">
                            <h2 className="title">Contact</h2>
                            <ol className="breadcrumb main-bg">
                                <li className="breadcrumb-item"><a href="">Home</a></li> 
                                <li className="breadcrumb-item">Contact</li>
                            </ol>
                        </nav>
                    </div>
                </div> 
            </div>
        </div>
        <div className="container">
            <div className="text-center iq-title-box iq-box iq-title-default">
                <h2 className="iq-title">
                    Get IN Touch
                </h2>
                <p className="iq-title-desc">Fill up this form to reach our stunning Streamit team and click on send message. </p>
            </div>
            {resp && 
                <div class="alert alert-primary" role="alert">
                    {resp}
                </div>
            }
            <div className="wrapper">
                <form onSubmit={sendMessage}>
                    <div className="contact-form contact-style">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="cfield">
                                <span className="wpcf7-form-control-wrap your-name">
                                <input type="text" name="your-name"  size="40" value={name} onChange={(e)=>setName(e.target.value)} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Your Name"/>
                                </span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="cfield">
                                <span className="wpcf7-form-control-wrap your-email">
                                <input type="email" name="your-email" value={email} onChange={(e)=>setEmail(e.target.value)} size="40" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Your Email"/>
                                </span>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="cfield">
                                <span className="wpcf7-form-control-wrap your-message">
                                <textarea name="your-message" cols="40" value={message} onChange={(e)=>setMessage(e.target.value)} rows="10" className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required" aria-required="true" aria-invalid="false" placeholder="Your Message"></textarea>
                                </span>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <button id="submit" name="submit" type="submit" className="btn btn-hover iq-button">
                            <span className="iq-btn-text-holder">Send Message</span>
                            <span className="iq-btn-icon-holder">
                            <i aria-hidden="true" className="ion ion-plus"></i>
                            </span>
                            <br/>
                            </button>
                        </div>
                    </div>
                    </div>
                    <div className="wpcf7-response-output" aria-hidden="true"></div>
                </form>
            </div>
        </div>
        
    </>
  )
}

export default Contact
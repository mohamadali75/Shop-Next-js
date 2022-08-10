import React from "react";
import { css} from '@emotion/css'
import Header from "../Components/Header";

function Contact() {
    return(
        <div 
    className={css`
     
      text-align:center;font-family: 'Courgette', cursive;
font-family: 'Edu VIC WA NT Beginner', cursive;
      
    `}
  >  <div> <Header/>
  <div className="content">
    
    <div className="container">
      <div className="row align-items-stretch justify-content-center no-gutters">
        <div className="col-md-7">
          <div className="form h-100 contact-wrap p-5">
            <h3 className="text-center">Lets Talk</h3>
            <form className="mb-5" method="post" id="contactForm" name="contactForm">
              <div className="row">
                <div className="col-md-6 form-group mb-3">
                  <label htmlFor="" className="col-form-label">Name *</label>
                  <input type="text" className="form-control" name="name" id="name" placeholder="Your name"/>
                </div>
                <div className="col-md-6 form-group mb-3">
                  <label htmlFor="" className="col-form-label">Email *</label>
                  <input type="email" className="form-control" name="email" id="email"  placeholder="Your email"/>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 form-group mb-3">
                  <label htmlFor="budget" className="col-form-label">Subject</label>
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Your subject"/>
                </div>
              </div>

              <div className="row mb-5">
                <div className="col-md-12 form-group mb-3">
                  <label htmlFor="message" className="col-form-label">Message *</label>
                  <textarea className="form-control" name="message" id="message" cols="30" rows="4"  placeholder="Write your message" />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-5 form-group text-center">
                  <input type="submit" value="Send Message" className="btn btn-block btn-primary rounded-0 py-2 px-4"/>
                  <span className="submitting" />
                </div>
              </div>
            </form>

            <div id="form-message-warning mt-4" /> 
            <div id="form-message-success">
              Your message was sent, thank you!
            </div>

          </div>
        </div>
      </div>
    </div>

  </div> </div>
        Contact us
        
        </div>
    )
}
export default Contact

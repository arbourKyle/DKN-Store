// npm i emailjs-com --save
import emailjs from "emailjs-com";
import React from "react";
import "./Contact.css"

export default function Contact(){
    function sendEmail(e){

         e.preventDefault();
console.log(e.target);
         emailjs
           .sendForm("service_sheelvp", "template_a6rdwsv", e.target, "MnBNUi3npNLX_mrhJ")
           .then(
             (result) => {
               console.log(result.text);
             },
             (error) => {
               console.log(error.text);
             }
           );
             e.target.reset()
    }
    return (
      <div>

        <div className="container" id="contactcontainer">
        <h1 id="contactmsg">Have any questions not in our<h1 id="contactmsg"><a href="/faq">F.A.Q?</a></h1> Leave a message and we will get back to you!</h1>
          <form onSubmit={sendEmail}>
            <div className="row pt-5 mx-auto">
              <div className="col-8 form-group mx-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  name="email"
                />
              </div>
              <div className="col-8 form-group  pt-2 mx-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                />
              </div>
              <div className="col-8 form-group  pt-2 mx-auto">
                <textarea
                  className="form-control"
                  id=""
                  cols="30"
                  rows="8"
                  placeholder="Your message"
                  name="message"
                ></textarea>
              </div>
              <div className="col-8 pt-3 mx-auto" id="sendbtn">
                <input id="submitbtncontact"
                  type="submit"
                  className="btn btn-info"
                  value="Send Message"
                ></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
}


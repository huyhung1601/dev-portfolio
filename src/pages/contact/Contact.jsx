import { useRef } from "react";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import "./contact.scss";
import emailjs from "emailjs-com";
import { Animator,batch,MoveIn,Fade } from "react-scroll-motion";
const ZoomInScrollOut = batch(Fade(),MoveIn(0,-400));

const Contact = () => {
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_mrwpxzk",
        "template_ID",
        formRef.current,
        "user_WF86biYJyZJQ43UqddO6A"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    
    <div className="c" id='contact'>
      <Animator animation={ZoomInScrollOut}>
      <div className="c-wrapper">
        <div className="c-left">
            <h4 className="c-title">Contact</h4>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +61 420 600 611
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              huyhung1601@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Belconnen, ACT, 2617 Australia
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="user_name" 
            />
            <input
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
          </form>
        </div>
      </div>
      </Animator>
    </div>
    
  );
};

export default Contact;
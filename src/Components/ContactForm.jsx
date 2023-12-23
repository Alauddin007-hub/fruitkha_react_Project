import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'



const ContactForm = () => {
  const [contactInfo, setContactInfo] = useState({});

  const navigate = useNavigate();
  
const handleSubmit = (e) =>{
  e.preventDefault();
  // alert("Yes,submitted");
  contactInsert();
}
const handleChange = (e)=> {
  const name = e.target.name;
  const value = e.target.value;
  setContactInfo((val)=>({...val, [name]:value}));
}

const contactInsert = ()=>{
  axios.post("http://localhost/react_project/fruitka_react_project/api/contact.php",
  {data:contactInfo}).then(res=>{
      
      console.log(res.data);
      alert(res.data.msg);
      return navigate("/contact")
  })
}

console.log(contactInfo);
  return (
    <>
       {/* contact form */}
<div className="contact-from-section mt-150 mb-150">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 mb-5 mb-lg-0">
        <div className="form-title">
          <h2>Have you any question?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, ratione! Laboriosam est, assumenda. Perferendis, quo alias quaerat aliquid. Corporis ipsum minus voluptate? Dolore, esse natus!</p>
        </div>
        <div id="form_status" />
        <div className="contact-form">
          <form  id="fruitkha-contact" onSubmit={handleSubmit}>
            <p>
              <input type="text" placeholder="Name" name="name" id="name" value={contactInfo.name} onChange={handleChange} />
              <input type="email" placeholder="Email" name="email" id="email" value={contactInfo.email} onChange={handleChange} />
            </p>
            <p>
              <input type="tel" placeholder="Phone" name="phone" id="phone" value={contactInfo.phone} onChange={handleChange} />
              <input type="text" placeholder="Subject" name="subject" id="subject" value={contactInfo.subject} onChange={handleChange} />
            </p>
            <p>
              
              <textarea name="address" id="message" cols={30} rows={10} placeholder="Address" defaultValue={""} value={contactInfo.address} onChange={handleChange} />
              <textarea name="details" id="message" cols={30} rows={10} placeholder="Message" defaultValue={""} value={contactInfo.details} onChange={handleChange} />
              </p>
            <input type="hidden" name="token" defaultValue="FsWga4&@f6aw" />
            <p><input type="submit" defaultValue="Submit" /></p>
          </form>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="contact-form-wrap">
          <div className="contact-form-box">
            <h4><i className="fas fa-map" /> Shop Address</h4>
            <p>34/8, East Hukupara <br /> Gifirtok, Sadan. <br /> Country Name</p>
          </div>
          <div className="contact-form-box">
            <h4><i className="far fa-clock" /> Shop Hours</h4>
            <p>MON - FRIDAY: 8 to 9 PM <br /> SAT - SUN: 10 to 8 PM </p>
          </div>
          <div className="contact-form-box">
            <h4><i className="fas fa-address-book" /> Contact</h4>
            <p>Phone: +00 111 222 3333 <br /> Email: support@fruitkha.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* end contact form */}

    </>
  )
}

export default ContactForm
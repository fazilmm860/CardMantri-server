import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import emailjs from '@emailjs/browser';
import '../assests/css/contact.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ContactForm from './ContactForm';
import image1 from '../assests/img/product-screen-03.png'
import image2 from '../assests/img/product-screen-04.png'
import image3 from '../assests/img/product-screen-05.png'
import CallToAction from './CallToAction';


   const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code to handle form submission (e.g., sending an email)
    // You can use the formData object to access the form values
    // Example:
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
    //   .then((result) => {
    //     console.log(result.text);
    //   }, (error) => {
    //     console.log(error.text);
    //   });
  };
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  const cardComparisonRef = useRef();

  const handleCompareButtonClick = () => {
    cardComparisonRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
    <Navbar/>
    <section id="hero">

    <div className="hero-text" data-aos="zoom-out">
        <h2>Explore Card Mantri</h2>
        <p>We are team of talented Credit card advisors in the market</p>

    </div>
      
 

      </section>
    
   
    </>
    
  )
}

export default ContactPage

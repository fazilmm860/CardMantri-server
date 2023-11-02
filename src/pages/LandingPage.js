import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../assests/css/home.css'; // Make sure to adjust the path if necessary
import image1 from '../assests/img/product-screen-03.png'
import image2 from '../assests/img/product-screen-04.png'
import image3 from '../assests/img/product-screen-05.png'
import Grid from '../components/Grid';
import HorizontalCard from '../components/HorizontalCard';
import About from '../components/About';
import CallToAction from '../components/CallToAction';
import CardComparison from '../components/CardComparison';
import CardProvider from '../components/CardProvider';
import logo from '../assests/img/logo-name.png'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const LandingPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  const [scrolled, setScrolled] = useState(false);

 

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
    <button  className=" btn-get-started scrollto"onClick={handleCompareButtonClick}>Compare cards</button>
    </div>
    <div className="product-screens">
      <div className="product-screen-1" data-aos="fade-up" data-aos-delay="400">
        <img src={image1} className="w-72 h-96" alt="" />
      </div>
      <div className="product-screen-2" data-aos="fade-up" data-aos-delay="200">
        <img src={image2} className="w-72 h-96" alt="" />
      </div>
      <div className="product-screen-3" data-aos="fade-up">
        <img src={image3} className="w-72 h-96" alt="" />
      </div>
    </div>
      </section>

      <main id="main">
       
        <Grid/>
        <About/>


       <CallToAction/>

       <HorizontalCard/>
       
     <CardComparison ref={cardComparisonRef}/>
     <CardProvider/>



    <section id="contact" className="py-16">
      <div className="container mx-auto" data-aos="fade-up">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="col-span-1">
            <div className="contact-about">
              <h3 className="text-2xl font-bold mb-4">Card Mantri</h3>
              <p className="text-gray-700">
                CardMantri is India's No.1 aggregator platform for comparing and obtaining credit cards from major banks and other credit card providers. CardMantri also helps you enhance the credit card experience through CardMantri club membership.
              </p>
              <div className="social-links mt-4">
                <a href="#" className="mr-2"><i className="bi bi-twitter"></i></a>
                <a href="https://www.facebook.com/profile.php?id=100089987084100&is_tour_completed=true" className="mr-2"><i className="bi bi-facebook"></i></a>
                <a href="https://www.instagram.com/cardmantri/" className="mr-2"><i className="bi bi-instagram"></i></a>
                <a href="https://www.instagram.com/cardmantri_kerala/" className="mr-2"><i className="bi bi-instagram"></i></a>
                <a href="#" className="mr-2"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <div className="info">
              <div className="flex items-center mb-4">
                <i className="bi bi-geo-alt mr-2"></i>
                <p className="text-gray-700">Credline Fintech Systems PVT LTD<br />Majestic Tower, 3rd floor, Malaparamba, 673006</p>
              </div>

              <div className="flex items-center mb-4">
                <i className="bi bi-envelope mr-2"></i>
                <p className="text-gray-700">CardMantri@gmail.com</p>
              </div>

              <div >
                <i className="bi bi-phone mr-2"></i>
                <p className="text-gray-700">+91 85903 50593</p>
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <div className="form">
              {/* <form id="submit-form" action="" role="form" className="php-email-form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                  </div>
                </div>
                <div className="form-group mt-4">
                  <input type="number" className="form-control" name="number" id="number" placeholder="Mobile" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                </div>
                <div className="form-group mt-4">
                  <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message">Error indicating</div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center">
                  <button type="submit" title="Send Message" className="px-6 py-3 bg-blue-500 text-white font-bold rounded-full text-lg">Send Message</button>
                </div>
              </form> */}
            </div>
          </div>

        </div>
      </div>
    </section>

    
      </main>

      <footer id="footer">
      <div className="container">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="text-lg-start text-center mb-4 lg:mb-0">
          <div className="copyright">
            Copyright &copy; <strong>Fzcreations</strong>. All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="#">Fzcreations</a>
          </div>
        </div>
        <div className="lg:ml-auto">
          <nav className="footer-links text-lg-right text-center pt-2 pt-lg-0">
            <a href="#intro" className="scrollto">Home</a>
            <a href="#about" className="scrollto">About</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </nav>
        </div>
      </div>
    </div>
      </footer>

      <a href="https://www.instagram.com/cardmantri_kerala/" 
       className="back-to-top flex items-center justify-center">
      <i className="bi bi-whatsapp"></i>
    </a>
    
    </>
  );
}

export default LandingPage;

import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../assests/img/title.png'
import '../assests/css/home.css';
import { FaChevronDown, FaToggleOn } from 'react-icons/fa';

const dropdown=[
  {
    title:'HDFC Bank',
    to:'www.hdfc.com'
  },
  {
    title:"IDFC Bank",
    to:'www.idfc.com'
  },
  {
    title:"ICICI Bank",
    to:'www.icici.com'
  },
  {
    title:"AXIS Bank",
    to:'www.axis.com'
  },
  {
    title:'SBI Bank',
    to:'www.sbi.com'
  },
  {
    title:'Indusand Bank',
    to:'www.indusand.com'
  },
  {
    title:'AU Credit Bank',
    to:'www.Au.com',
  },
  {
    title:'American Express',
    to:'www.americanexpress.com',
  },
  {
    title:'City Bank',
    to:'www.cityBank.com',
  },
  {
    title:'STANDARD CHARTERED Bank',
    to:'www.standardcharteredbank.com',
  },
  {
    title:'RBL Bank',
    to:'www.rblbank.com',
  },
  {
    title:'KOTAK Bank',
    to:'www.kotakbank.com',
  },
  {
    title:'BANK OF BARODA',
    to:'www.bankofbaroda.com',
  },
  {
    title:'PUNJAB NATIONAL BANK',
    to:'www.punjabnational.com'
  }
]

const Navbar = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
      }, []);
      const [scrolled, setScrolled] = useState(false);
    
      useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 0) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
    <>
      <header id="header" className={`fixed top-0 w-full  p-4 text-white ${scrolled ? 'bg-black' : ''}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div id="logo" >
          <h1 ><a href="index.html"><img src={logo} style={{width:'220px', marginLeft:'50px' }}></img></a></h1>
        </div>
        <nav  id="navbar" className="navbar">
          <ul className="flex space-x-4">
            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
            <li className="dropdown inline-block relative">
              <a href="#" >
                <span>Banks</span> <i><FaChevronDown/></i>
              </a>
              <ul className="hidden">
                <li><a href="/">Premium Credit Cards</a></li>
                <li><a href="/">Cashback Credit Cards</a></li>
                {/* Add other card items */}
              </ul>
            </li>
            <li className="dropdown">
              <a href="#" >
                <span>Cards</span>  <i><FaChevronDown/></i>
              </a>
              <ul className="hidden">
                <li><a href="/">Premium Credit Cards</a></li>
                <li><a href="/">Cashback Credit Cards</a></li>
                {/* Add other card items */}
              </ul>
            </li>
            <li><a className="nav-link scrollto" href="/">MemberShip</a></li>
            <li><a className="nav-link scrollto" href="/">Team</a></li>
            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
      
    </>
  )
}

export default Navbar

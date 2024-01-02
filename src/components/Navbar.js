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
              <li><a href="https://www.hdfcbank.com/">HDFC</a></li>
              <li><a href="https://www.idfcfirstbank.com/">IDFC FIRST BANK</a></li>
              <li><a href="https://www.icicibank.com/">ICICI BANK</a></li>
              <li><a href="https://www.axisbank.com/">AXIS BANK</a></li>
              <li><a href="https://www.onlinesbi.sbi/">SBI BANK</a></li>
              <li><a href="https://www.indusind.com/in/en/personal.html#">INDUSIND BANK</a></li>
              <li><a href="https://www.aubank.in/personal-banking/credit-cards">AU CREDIT BANK</a></li>
              <li><a href="https://www.americanexpress.com/en-in/">AMERICAN EXPRESS</a></li>
              <li><a href="https://www.online.citibank.co.in/">CITI BANK</a></li>
              <li><a href="https://www.sc.com/in/">STANDARD CHARTERED BANK</a></li>
              <li><a href="https://www.rblbank.com/">RBL BANK</a></li>
              <li><a href="https://www.kotak.com/en/home.html">KOTAK MAHINDRA</a></li>
              <li><a href="https://www.bankofbaroda.in/">BANK OF BARODA</a></li>
              <li><a href="https://www.pnbindia.in/">PUNJAB NATIONAL BANK</a></li>
            
                {/* Add other card items */}
              </ul>
            </li>
            <li className="dropdown">
              <a href="#" >
                <span>Cards</span>  <i><FaChevronDown/></i>
              </a>
              <ul className="hidden">
              <li><a href="">Premium Credit Cards</a></li>
              <li><a href="">Cashback Credit Cards</a></li>
              <li><a href="">Reward Credit Cards</a></li>
              <li><a href="">Fuel Credit Cards</a></li>
              <li><a href="">Lifestyle Credit Cards</a></li>
              <li><a href="">Travel Credit Cards</a></li>
              <li><a href="">Business Credit Cards</a></li>
              <li><a href="">Entertinment Credit Cards</a></li>
              <li><a href="">Shopping Cards</a></li>
              <li><a href="">Secured Credit Cards</a></li>
              <li><a href="">Prepaid Credit Cards</a></li>
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

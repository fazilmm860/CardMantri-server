import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../assests/img/title.png'
import '../assests/css/home.css';
import { FaChevronDown, FaChevronRight, FaToggleOn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const dropdown=[
  {
    bank:'HDFC',
    cards:[
      "money back",
      "millenia",
      "Indian Oil",
      "Regalia",
      "Regalia Gold",
      "Shoppers Stop",
      "Tata Neo Plus",
      "Tata Infinity",
      "Swiggy Card",
      "Shooper's Stop",
      "Marriot Bonvoy",
      "money back",
      "millenia",
      "Indian Oil",
      "Regalia",
      "Regalia Gold",
      "Shoppers Stop",
      "Tata Neo Plus",
      "Tata Infinity",
      "Swiggy Card",
      "Shooper's Stop",
      "Marriot Bonvoy"
    ]
  },
  {
    bank:'HDFC',
    cards:[
      "money back",
      "millenia",
      "Indian Oil",
      "Regalia",
      "Regalia Gold",
      "Shoppers Stop",
      "Tata Neo Plus",
      "Tata Infinity",
      "Swiggy Card",
      "Shooper's Stop",
      "Marriot Bonvoy"
    ]
  },
  {
    bank:'IDFC',
    cards:[
      "money back",
      "millenia",
      "Indian Oil",
      "Regalia",
      "Regalia Gold",
      "Shoppers Stop",
      "Tata Neo Plus",
      "Tata Infinity",
      "Swiggy Card",
      "Shooper's Stop",
      "Marriot Bonvoy"
    ]
  },
  {
    bank:'ICICI',
    cards:[
      "money back",
      "millenia",
      "Indian Oil",
      "Regalia",
      "Regalia Gold",
      "Shoppers Stop",
      "Tata Neo Plus",
      "Tata Infinity",
      "Swiggy Card",
      "Shooper's Stop",
      "Marriot Bonvoy"
    ]
  },
]
const Navbar = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
      }, []);
      const [scrolled, setScrolled] = useState(false);
    
      
   

    
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
            
            <li className="dropdown">
              <a href="#" >
                <span>Banks</span>  <i><FaChevronDown/></i>
              </a>
              
              <ul className="hidden">
              {dropdown.map((item,index)=>(
                 <li class="dropdown"key={index}>
                 <a href=""><span>{item.bank}<FaChevronRight/></span></a>
                 <ul>
                  {item.cards.map((cards,cardIndex)=>(
                    <li key={cardIndex}><a href="#">{cards}</a></li>
             
                  ))}
                 
                
                 </ul>
               </li>
              ))}
              
             
              </ul>
            </li>
            

           <Link to="/member"> <li><a className="nav-link scrollto" href="/">MemberShip</a></li></Link>
      
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

import React from 'react';
import { FaCheckCircle, FaChevronLeft } from 'react-icons/fa';
import '../assests/css/home.css'

const CardComparison = () => {
  const card=[
    {
      select:'Select'
    },
    {
      select:'Reward Credit Card'
    },
    {
      select:'Fuel Credit Card',
    },
    {
      select:'Cashback Credit Card',
    },
    {
      select:'Travel Credit Card',
    },
    {
      select:'Business Credit Card',
    },
    {
      select:'Co-Branded Credit Card'
    },
    {
      select:'Secured Credit Card',
    },
    {
      select:'Corporate Credit Card',
    },
    {
      select:'Student Credit Card',
    },
    {
      select:'Premium/signature Credit Card',
    },
    {
      select:'Entertainment Credit Card'
    },
    {
      select:'Credit Card For Women',
    },
    {
      select:'Classic Credit Card',
    },
    {
      select:'Titanium Credit Cards',
    },
    {
      select:'Platinum Credit Cards',
    },
  ]
  return (
    <>
      <section id="about" className="section-bg">
        <div className="container-fluid">
          <div className="section-header">
            <h3 className="section-title">COMPARE CARDS</h3>
            <span className="section-divider"></span>
            <p className="section-description">
            Unlocking the Best Credit Card: A Side-by-Side Comparison
            </p>
          </div>

          <div className="flex flex-wrap justify-between"> {/* Added justify-between */}
            <div className="w-full lg:w-6/12 about-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYBqCiv0IIKMqeQammp3dKuUDNtCPSqAxq1A&usqp=CAU" alt="About Us" />
            </div>

            <div className="w-full lg:w-5/12 content flex justify-between mt-12"> {/* Added flex and justify-between */}
              <ul className="icon-list text-white">
                <li>
                  <i><FaCheckCircle /></i> Cost Reduction: Compare to minimise fees and interest charges.
                </li>
                <li>
                  <i><FaCheckCircle /></i>  Find the card that offers the best rewards for your spending habits.

                </li>
                <li>
                  <i><FaCheckCircle /></i>  Choose a card that aligns with your specific financial needs and goals.

                </li>
                <li>
                  <i></i> <h6 className='cardHead'>Card-1</h6> <h6 className='cardHead2'>Card-2</h6>
                </li>
                <li>
                  <i></i><select className='cardSelect '>
                      {card.map((item)=>(
                      <option>{item.select}</option>
                      ))}
                    </select>
                                           <img src='data:image/png;base64,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'
                                                className='cardImage'
                                           ></img>

                     <select className='cardSelect'>
                     {card.map((item)=>(
                      <option>{item.select}</option>
                      ))}
                        </select>
                </li>
                <li>
                  <i></i> <button className='cardButton '>Compare</button> 
                </li>
                <li></li>
             </ul>                        
            </div>                    
             </div>      
        </div>
        </section>
    </>
  );
};

export default CardComparison;

import React, { useState } from 'react';
import axios from 'axios'
const CreditCardForm = () => {
  const categories = [
    'Select',
    'Reward Credit Card',
    'Fuel Credit Card',
    'Cashback Credit Card',
    'Travel Credit Card',
    'Business Credit Card',
    'Co-Branded Credit Card',
    'Secured Credit Card',
    'Corporate Credit Card',
    'Student Credit Card',
    'Premium Credit Card',
  ];
  const [formData, setFormData] = useState({
   cardName:'',
   catergory:'',
   description:'',
   features: ['', '', '', '', '', '', '', ''],
    eligibility: ['', '', '', '', '', '', '', ''],
    document: ['', '', '', '', ''],
    charge: ['', '', '', '', ''],
    faq: ['', '', '', '', ''],
    faqAns: ['', '', '', '', ''],
  });
  
  const handleInputChange = (event)=>{
    const{name,value}=event.target;

    setFormData((prevFormData)=>({
      ...prevFormData,
      [name]:value,
    }));
  }

  const handleArrayInputChange=(type,index,event)=>{
    const {value}= event.target;

    setFormData((prevFormData)=>({
      ...prevFormData,
      [type]:prevFormData[type].map((item,i)=>(i=== index ? value:item)),
    }))
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:9999/api/creditcard/postcreditcard', JSON.stringify(formData), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response && response.data) {
        console.log('Response:', response.data);
  
        if (response.status === 201) {
          console.log(`Data submitted successfully: ${response.data}`);
        }
      } else {
        console.error('Invalid response:', response);
      }
  
      setFormData({
        cardName: '',
        catergory:'',
        description: '',
        img:'',
        features: ['', '', '', '', '', '', '', ''],
        eligibility: ['', '', '', '', '', '', '', ''],
        document: ['', '', '', '', ''],
        charge: ['', '', '', '', ''],
        faq: ['', '', '', '', ''],
        faqAns: ['', '', '', '', ''],
      });
    } catch (error) {
      console.error('Error:', error);
      console.error('Response data (if available):', error.response ? error.response.data : 'N/A');
    }
  };
  
  return (
    <div className="container ">
 <form className='container 'onSubmit={handleSubmit} >
      <div className="mb-3">
        <label htmlFor="cardName" className="form-label"> Credit Card Name</label>
        <input
          type="text"
          className="form-control"
          id="cardName"
          name="cardName"
          value={formData.cardName}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="catergory" className="form-label">Catergory</label>
        <select
        type="text"
        className="form-control"
        id="catergory"
        name="catergory"
        value={formData.catergory}
        onChange={handleInputChange}
        required
        >
          {categories.map((item,index)=>(
            <option key={index} value={item}>{item}</option>
          ))}
          
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea
          className="form-control"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          
        />
      </div>
      <div className="mb-3">
        <label htmlFor="img" className="form-label">image</label>
        <textarea
          className="form-control"
          id="img"
          name="img"
          value={formData.img}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Features</label>
        {formData.features.map((feature, index) => (
          <input
            key={index}
            type="text"
            className="form-control mb-2"
            value={feature}
            onChange={(e) => handleArrayInputChange('features', index, e)}
           
          />
        ))}
      </div>
    

      <div className="mb-3">
        <label className="form-label">charge</label>
        {formData.charge.map((charge, index) => (
          <input
            key={index}
            type="text"
            className="form-control mb-2"
            value={charge}
            onChange={(e)=>handleArrayInputChange('charge',index, e)}
            
          />
        ))}
      </div>
      <div className="mb-3">
        <label className="form-label">eligibility</label>
        {formData.eligibility.map((eligibility, index) => (
          <input
            key={index}
            type="text"
            className="form-control mb-2"
            value={eligibility}
            onChange={(e)=>handleArrayInputChange('eligibility',index,e)}
            
          />
        ))}
      </div>

      <div className="mb-3">
        <label className="form-label">document</label>
        {formData.document.map((document, index) => (
          <input
            key={index}
            type="text"
            className="form-control mb-2"
            value={document}
            onChange={(e)=>handleArrayInputChange('document',index,e)}
            
          />
        ))}
      </div>

      <div className="mb-3">
        <label className="form-label">FAQ Questions</label>
        {formData.faq.map((faq, index) => (
          <input
            key={index}
            type="text"
            className="form-control mb-2"
            value={faq}
            onChange={(e)=>handleArrayInputChange('faq',index,e)}
           
          />
        ))}
      </div>

      <div className="mb-3">
        <label className="form-label">FAQ Answers</label>
        {formData.faqAns.map((faqAns, index) => (
          <input
            key={index}
            type="text"
            className="form-control mb-2"
            value={faqAns}
            onChange={(e)=>handleArrayInputChange('faqAns',index,e)}
           
          />
        ))}
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
   
  );
};

export default CreditCardForm;


import React, { useState } from 'react';


const YourComponent = () => {
  const [activeTab, setActiveTab] = useState(-1);

  const handleToggle = (idx) => {
    setActiveTab(activeTab === idx ? -1 : idx);
  };

  const renderAccordionItem = (idx, question, answer) => (
    <li key={idx} className="bg-white my-2 shadow-lg">
      <h6
        onClick={() => handleToggle(idx)}
        className="flex flex-row justify-between items-center  p-3 cursor-pointer"
      >
        <span>{question}</span>
        <svg
          className={`fill-current text-orange-700 h-6 w-6 transform transition-transform duration-500 ${
            activeTab === idx ? 'rotate-180' : ''
          }`}
          viewBox="0 0 20 20"
        >
          <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
        </svg>
      </h6>
      <div
        className="border-l-2 border-orange-600 overflow-hidden max-h-0 duration-500 transition-all"
        style={{ maxHeight: activeTab === idx ? '1000px' : '0' }}
      >
        <p className="p-3 text-gray-900">{answer}</p>
      </div>
    </li>
  );
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here, e.g., send the data to a server
    console.log('Name:', name);
    console.log('Mobile Number:', mobileNumber);
    // You can also reset the form fields if needed
    setName('');
    setMobileNumber('');
  };

  return (
    <div className="p-6">
      {/* Card Section */}
      <div className="bg-white shadow p-4 rounded-lg mb-4">
        <h2 className="text-xl font-bold mb-2">Card Title</h2>
        <p>Card Description</p>
      </div>
           {/* Contact Form */}
      <div className="bg-white shadow p-4 rounded-lg mb-4">
       
       <div className="bg-white shadow p-4 rounded-lg mb-4">
         <h2 className="text-xl font-bold mb-2">Contact Us</h2>
         <div className="row">
           <div className="col-md-6">
             <img
               src="your-image-url.jpg" // Replace with the URL of your image
               alt="Contact"
               className="img-fluid"
             />
           </div>
           <div className="col-md-6">
             <form onSubmit={handleSubmit}>
               <div className="mb-3">
                 <label htmlFor="name" className="form-label">
                   Name
                 </label>
                 <input
                   type="text"
                   className="form-control"
                   id="name"
                   value={name}
                   onChange={handleNameChange}
                   required
                 />
               </div>
               <div className="mb-3">
                 <label htmlFor="mobileNumber" className="form-label">
                   Mobile Number
                 </label>
                 <input
                   type="text"
                   className="form-control"
                   id="mobileNumber"
                   value={mobileNumber}
                   onChange={handleMobileNumberChange}
                   required
                 />
               </div>
               <button type="submit" className="btn btn-primary">
                 Submit
               </button>
             </form>
           </div>
         </div>
       </div>
       </div>
      
      {/* Features Section */}
      <div className="bg-white shadow p-4 rounded-lg mb-4">
        <h2 className="text-xl font-bold mb-2">Benefits and Features</h2>
        <p>  Description</p>
        <ul className="list-disc pl-4">
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
          {/* Add more features as needed */}
        </ul>
      </div>
      
      <div className="bg-white shadow p-4 rounded-lg mb-4">
        <h2 className="text-xl font-bold mb-2">Fees and Charges</h2>
        <ul className="list-disc pl-4">
          <li>Fees and Charges 1</li>
          <li>Fees and Charges 2</li>
          <li>Fees and Charges 3</li>
          {/* Add more features as needed */}
        </ul>
      </div>

      <div className="bg-white shadow p-4 rounded-lg mb-4">
        <h2 className="text-xl font-bold mb-2">Eligibility</h2>
        <ul className="list-disc pl-4">
          <li>Eligibility 1</li>
          <li>Eligibility 2</li>
          <li>Eligibility 3</li>
          {/* Add more features as needed */}
        </ul>
      </div>

      <div className="bg-white shadow p-4 rounded-lg mb-4">
        <h2 className="text-xl font-bold mb-2">Documents</h2>
        <ul className="list-disc pl-4">
          <li>Documents 1</li>
          <li>Documents 2</li>
          <li>Documents 3</li>
          {/* Add more features as needed */}
        </ul>
      </div>
      <div className="bg-white shadow p-4 rounded-lg mb-4">
      <div className="p- bg-light-blue">
      <div className="flex  items-start my-2">
        <div className="w-full sm:w-10/12 md:w-1/2 my-1">
          <h2 className="text-xl font-semibold text-vnet-blue mb-2">FAQ </h2>
          <ul className="flex flex-col">
            {renderAccordionItem(1, 'When will my order arrive?', 'Shipping time is set by our delivery partners...')}
            {renderAccordionItem(2, 'How do I track my order?', 'Once shipped, you’ll get a confirmation email...')}
            {renderAccordionItem(3, 'What’s your return policy?', 'We allow the return of all items within 30 days...')}
            {renderAccordionItem(4, 'How do I make changes to an existing order?', 'Changes to an existing order can be made...')}
            {renderAccordionItem(5, 'What shipping options do you have?', 'For USA domestic orders we offer FedEx and USPS shipping.')}
            {renderAccordionItem(6, 'What payment methods do you accept?', 'Any method of payments acceptable by you...')}
          </ul>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default YourComponent;

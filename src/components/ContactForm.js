import React, { useState } from 'react';
import '../assests/css/contact.css'
const ContactForm = ({ isOpen, closeModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    number:'',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
  };
  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains('modal')) {
      closeModal();
    }
  };
  return (
    <div className={`modal ${isOpen ? 'block' : 'hidden'} box fixed inset-0 mt-12 bg-gray-900 bg-opacity-50 z-50 flex items-center justify-center`} onClick={handleBackgroundClick}>
      <div className="modal-content bg-white p-8 rounded shadow-lg">
        <h2 className="">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 inputBox">
            <span>Name</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className=""
              required
            />
          </div>
          <div className="mb-4 inputBox">
            <span className="">Mob-Number</span>
            <input
              type="text"
              name="number"
              value={formData.email}
              onChange={handleChange}
              className=""
              required
            />
          </div>
          <div className="mb-4 inputBox">
            <span className="">Email</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className=""
              required
            />
          </div>
          <div className="mb-6 inputBox">
            <span className="">Message</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className=" "
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={closeModal}
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Close
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm
import React, { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button onClick={toggleDropdown} type="button" className="text-sm text-gray-300 hover:text-orange-500 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
       Banks
      </button>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-72 rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5">
          <div className="grid grid-cols-3 gap-2 p-4" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href="#" className="block text-sm text-gray-700 hover:bg-orange-500 " role="menuitem">Option 1</a>
            <a href="#" className="block text-sm text-gray-700 hover:bg-orange-500 " role="menuitem">Option 2</a>
            <a href="#" className="block text-sm text-gray-700 hover:bg-orange-500 " role="menuitem">Option 3</a>
            <a href="#" className="block text-sm text-gray-700 hover:bg-orange-500 " role="menuitem">Option 4</a>
            <a href="#" className="block text-sm text-gray-700 hover:bg-orange-500 " role="menuitem">Option 5</a>
            <a href="#" className="block text-sm text-gray-700 hover:bg-orange-500 " role="menuitem">Option 6</a>
            <a href="#" className="block text-sm text-gray-700 hover:bg-orange-500 " role="menuitem">Option 7</a>
            <a href="#" className="block text-sm text-gray-700 hover:bg-orange-500 " role="menuitem">Option 8</a>
            <a href="#" className="block text-sm text-gray-700 hover:bg-orange-500 " role="menuitem">Option 9</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

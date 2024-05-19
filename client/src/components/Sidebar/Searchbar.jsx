import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log('Searching for:', query);
    // Here you can add the search logic, e.g., making an API call or filtering a list
  };

  return (
    <div className="flex items-center mb-6">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search Chats"
        className="p-1 text-center outline-none text-lg flex-grow border border-gray-600 bg-gray-800 rounded-3xl w-12 mr-2"
      />
      <button 
        onClick={handleSearch} 
        className="p-2 text-lg text-[#ac9ff6] rounded-r flex items-center justify-center"
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default Searchbar;

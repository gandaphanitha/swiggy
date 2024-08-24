import React, { useState } from "react";
import "../assets/css/components/SearchBar.css"; // Create and style this CSS file

const SearchBar = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // This is where you would implement the actual search logic, e.g., an API call.
    // For demonstration, let's assume we have a static list of items to search from.
    const items = [
      { name: "Pizza", id: 1 },
      { name: "Burger", id: 2 },
      { name: "Sushi", id: 3 },
      { name: "Pasta", id: 4 }
    ];

    const results = items.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="search-bar-container">
      <input 
        type="text"
        placeholder="Search for items..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={onClose}>Close</button>

      <div className="search-results">
        {searchResults.map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;

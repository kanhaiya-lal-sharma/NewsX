import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      onSearch(query);
      setQuery(""); // Optional: clear after search
    }
  };

  return (
    <form onSubmit={handleSearch} style={{ textAlign: "center", margin: "20px 0" }}>
      <input
        type="text"
        placeholder="Search news..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: "10px",
          width: "60%",
          borderRadius: "5px",
          border: "1px solid gray",
          marginRight: "10px"
        }}
      />
      <button
        type="submit"
        style={{
          padding: "10px 15px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#007bff",
          color: "#fff",
          cursor: "pointer"
        }}
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;

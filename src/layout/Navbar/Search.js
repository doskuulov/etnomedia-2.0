import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import data from "../../Date/MovieData";
import { Link } from "react-router-dom";
import "../../index.css";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData =
    searchTerm.length > 0
      ? data.filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : [];

  return (
    <div className="col-span-3">
      <form className="w-full text-sm text-black bg-white  rounded flex-btn gap-4">
        <button
          type="submit"
          className="bg-amber-400 w-12 flex-colo h-8 rounded text-white"
        >
          <FaSearch />
        </button>
        <input
          className="font-medium rounded-2xl placeholder:text-black text-sm w-11/12 h-8 bg-white border-none px-2 text-black"
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </form>{" "}
      {searchTerm.length > 0 && (
        <ul>
          {filteredData.map((item) => (
            <Link className="dropdown" to={item.link} key={item.id}>
              <span className="card"> {item.name}</span>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;

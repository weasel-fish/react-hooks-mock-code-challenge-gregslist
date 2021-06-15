import React, { useState } from "react";

function Search({filterListings}) {
  const [searchString, setSearchString] = useState('')

  return (
    <form className="searchbar" onSubmit={(e) => {
      e.preventDefault()
      filterListings(searchString)
    }}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;

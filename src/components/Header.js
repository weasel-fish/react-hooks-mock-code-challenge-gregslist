import React from "react";
import Search from "./Search";

function Header({filterListings, sortListings}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search filterListings={filterListings}/>
      <button onClick={sortListings}>Sort By Location</button>
    </header>
  );
}

export default Header;

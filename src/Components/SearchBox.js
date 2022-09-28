import React from "react";

const SearchBox = ({ SearchChange }) => {
    return (
        <input className="pa3 ba b--green bg-lightest-blue ma3" type="search" name="searchbox" placeholder="search your friend" onChange={SearchChange}/>
    );
}

export default SearchBox;
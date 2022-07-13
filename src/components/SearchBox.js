import React from "react";

const SearchBox = ({onSearch}) => {
    return (
        <div>
            <input type='search' placeholder='find your robot' onChange={onSearch} className='pa3 mb4 br2 bg-lightest-blue br2' style={{fontFamily:"Arial", fontSize:"1.2em"}} />
        </div>
    );
}

export default SearchBox;
import React from "react";

const SearchBox = ({onSearch}) => {
    return (
        <div>
            <input type='search' placeholder='find your robot' onChange={onSearch} className='pa2 br2 bg-lightest-blue br2' />
        </div>
    );
}

export default SearchBox;
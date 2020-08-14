import React from 'react';

const SearchBox = (props) => {
    return(
       <div className='pa2'>
           <input className='pa3 ba b--green bg-lightest-blue' onChange={props.searchChange}
                type='search' placeholder='serach robots'></input>
       </div>     
    );
}

export default SearchBox;
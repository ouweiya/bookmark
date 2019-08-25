import React, { useContext } from 'react';
import { Context } from '../store/Provider';

const Search = () => {
  const [{ filtxt }, dispatch] = useContext(Context);

  return (
    <div>
      <input
        type='text'
        className='search'
        value={filtxt}
        onChange={e => dispatch({ type: 'filtxt', filtxt: e.target.value })}
      />
    </div>
  );
};

export default Search;

import React from 'react';
import { Input, Button } from 'semantic-ui-react';

const SearchBar = (props) => {
  const {
    keyword,
    onSearchInputChange,
    onSearchSubmit,
    onSearchInputEnter
  } = props;

  return (
    <Input 
      placeholder='Search Giphy...'
      value={keyword}
      onChange={onSearchInputChange}
      onKeyPress={onSearchInputEnter}>
      <input />
      <Button
        color='green'
        type='submit'
        onClick={onSearchSubmit}>
        Search
      </Button>
    </Input>
  );
};

export default SearchBar;

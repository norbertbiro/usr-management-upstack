import React, {useState} from 'react';
import { Form } from 'react-bulma-components';
const { Control,Input } = Form;


const SearchBar = (props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChange = (evt) => {
    return setSearchQuery(evt.target.value);
  }

  return (
    <Control>
      <Input type={'text'} onChange={onChange} value={searchQuery} placeholder={'Search...'}/>
    </Control>
  )
};

export default SearchBar;

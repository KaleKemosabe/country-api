import React, { useEffect, useState } from 'react';
import './Search.css';
import { useCombobox } from 'downshift';
import { Input } from 'antd';

function Search() {
  const [inputItems, setInputItems] = useState([])
  const [users, setUsers] = useState([])
  const [singleUser, setSingleUser] = useState('')

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all").then((response) => response.json()).then((data) => setUsers(data))
  }, [])

  const { isOpen, getMenuProps, getInputProps, getComboboxProps, highlightedIndex, getItemProps } = useCombobox({
    items: inputItems,
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        users.filter((item) => item.name.toLowerCase().startsWith(inputValue.toLowerCase())
        )
      )
    }
  })

  return <div className="Search">
    <h2 className="search-heading">Search for country details: {singleUser}</h2>
    <div className="input-field" {...getComboboxProps()}>
      <Input {...getInputProps()}
        placeholder="Search"
        enterButton="Search"
        size="large"
      />
    </div>
    <ul {...getMenuProps()}>
      {isOpen && inputItems.map((item, index) => (
          <span key={item.id} {...getItemProps({item, index})} onClick={() => setSingleUser(item.name)}>
            <li style={highlightedIndex === index ? {background: "#ede"} : {}}>
              <h4>{item.name}</h4>
            </li>
          </span>
        ))  
      }
    </ul>
  </div>

}

export default Search;
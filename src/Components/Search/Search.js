import React, { useEffect, useState } from 'react';
import './Search.css';
import { useCombobox } from 'downshift';
import { Input } from 'antd';

function Search() {
  const [inputItems, setInputItems] = useState([])
  const [countries, setCountries] = useState([])
  const [singleCountry, setsingleCountry] = useState('')

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all").then((response) => response.json()).then((data) => setCountries(data))
  }, [])

  const { isOpen, getMenuProps, getInputProps, getComboboxProps, highlightedIndex, getItemProps } = useCombobox({
    items: inputItems,
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        countries.filter((item) => item.name.toLowerCase().startsWith(inputValue.toLowerCase())
        )
      )
    }
  })

  return <div className="search">
    <h2 className="search-heading">How about the rest of the world?</h2>
    <h3>Search for country details: {singleCountry}</h3>
    <div className="input-field" {...getComboboxProps()}>
      <Input {...getInputProps()}
        placeholder="Search"
        enterButton="Search"
        size="large"
      />
    </div>
    <ul {...getMenuProps()}>
      {isOpen && inputItems.map((item, index) => (
          <span key={item.id} {...getItemProps({item, index})} onClick={() => setsingleCountry(item.name)}>
            <li style={highlightedIndex === index ? {background: "#add8e6"} : {}}>
              <h4>{item.name}</h4>
            </li>
          </span>
        ))  
      }
    </ul>
  </div>

}

export default Search;
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
            <li style={highlightedIndex === index ? {background: "rgba(255, 255, 255, 0.2)", padding: "1rem", borderRadius: "5px", boxShadow: "1px 1px 2px 2px #333333"} : {}}>
              <h3>{item.name}</h3>
              <h5>Capital: {item.capital}</h5>
              <h5>Population: {item.population}</h5>
              <img src={item.flag} alt={item.name} />
            </li>
          </span>
        ))  
      }
    </ul>
  </div>

}

export default Search;
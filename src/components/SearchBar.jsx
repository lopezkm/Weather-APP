import React, { useState } from "react";
import '../Styles/Nav.css';

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('');
    }}>
      <input className={"search-input"}
        type="text"
        placeholder="Name of the city..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input className={"button-input"} type="submit" value="Search" />
    </form>
  );
}

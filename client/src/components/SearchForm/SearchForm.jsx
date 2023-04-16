import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRecipesByName } from '../../redux/actions.js';
// import style from './SearchForm.module.css';
//* ESTE COMPONENTE DEBERÁ RECIBIR UN STRING E INDEPENDIENTEMENTE DE MAYUSCULAS O MINUSCULAS DESACHAR UNA ACTION QUE REQUIERA AL PATH CORRESPONDIENTE A NAME DEL BACK LAS RECETAS DESDE LA BASE DE DATOS Y DE LA API

const SearchForm = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getRecipesByName(search));
    setSearch('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
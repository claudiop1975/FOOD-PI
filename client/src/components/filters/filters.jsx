//* ESTE COMPONENTE DEBE REALIZAR LOS DIFERENTES FILTRADOS Y ORDENAMIENTO DELOS DATOS QUE SE ENCUENTREN EN EL ESTADO DE REDUX EN SU PROPIEDAD recipes100 RENDERIZAR EN EL ORDEN O FILTRADO SOLICITADO. PARA ELLO DEBE RENDERIZAR:
//* Botones/Opciones para filtrar por tipo de dieta, y por si su origen es de la API o de la base de datos (creados por nosotros desde el formulario).
//* Botones/Opciones para ordenar tanto ascendentemente como descendentemente las recetas por orden alfabético y por "comida saludable" (health score).
import { useSelector } from 'react-redux';
// import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { orderByName } from '../../redux/actions.js';
import { orderByScore } from '../../redux/actions.js';
import { filteredByDiet } from '../../redux/actions.js';
import { filteredByOrigin } from '../../redux/actions.js';
import SearchForm from "../SearchForm/SearchForm";


const Filters = () => {
    const dispatch = useDispatch();
    const stateDiets = useSelector((state) => state.diets)

    const handleClick = (e) => {
        e.target.value === "asc" || e.target.value === "desc" ? dispatch(orderByName(e.target.value)) : dispatch(orderByScore(e.target.value));
    };

    const handleFiltered = (e) => {
        e.target.name === "diets" ? dispatch(filteredByDiet(e.target.value)) : dispatch(filteredByOrigin(e.target.value));
    };
    
    return (
        <div>
            <div className='order__selects'>
                <button value={"asc"} onClick={handleClick}>A - Z</button>
                <button value={"desc"} onClick={handleClick}>Z - A</button>
                <button value={"moreHealthy"} onClick={handleClick}>More Healthy</button>
                <button value={"lessHealthy"} onClick={handleClick}>Less Healthy</button>
            </div>
            <div className='filter__selects'>
                <select name="diets" id="diets" onChange={handleFiltered}>
                <option value="all">Select Diets</option>
                    {stateDiets?.map((diet,key) => {
                    // console.log(diet);
                        return <option key={key} value={diet}>{diet}</option>
                    })};
                </select>
                <select name="origin" id="origin" onChange={handleFiltered}>
                    <option value="all">Select Origin</option>
                    <option value="api">API</option>
                    <option value="db">Data Base</option>
                </select>
            </div>
        </div>
    )
};
export default Filters;
    



import React from 'react';
import './App.css';
// import SimpleCardRecipe from './components/SimpleCardRecipe/SimpleCardRecipe.jsx';
// import LandingPage from './components/LandingPage/LandingPage.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
// import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import DetailedCardRecipe from './components/DetailedCardRecipe/DetailedCardRecipe.jsx';
import PostRecipeForm from './components/PostRecipeForm/PostRecipeForm.jsx';
import LandingPage2 from './components/LandingPage2/LandingPage2.jsx';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage2 />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/detail/:idRecipe" element={<DetailedCardRecipe />} />
        <Route path="/post" element={<PostRecipeForm />} />
        {/* <Route path="*" element={NotFound} /> */}
      </Routes>
    </div>
  );
}

export default App;

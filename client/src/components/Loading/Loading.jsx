//*este componente debe renderizar un pop-up con una imagen y un mensaje que diga "Loading..."
import React from 'react';
import './Loading.css';

const LoadingFn = () => {
    return (
        <div className="loading">
            <h1 className='message'>Loading...</h1>
        </div>
    )
}
export default LoadingFn;
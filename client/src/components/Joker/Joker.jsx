import React from 'react';
import styles from './Joker.module.css';

const Joker = ({ message, image }) => {
    return (
        <div style={styles.modal}>
        <div style={styles.modalContent}>
            <span style={styles.close}>&times;</span>
            <h2>{message}</h2>
            <img src={image} alt="Joker" />
        </div>
        </div>
    );
};

export default Joker;
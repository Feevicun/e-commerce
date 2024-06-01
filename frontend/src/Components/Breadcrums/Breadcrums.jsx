import React from 'react';
import './Breadcrums.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';

const Breadcrum = ({ product }) => {
  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt="arrow icon" /> Shop <img src={arrow_icon} alt="arrow icon" /> {product.category} <img src={arrow_icon} alt="arrow icon" /> {product.name}
    </div>
  );
}

export default Breadcrum;

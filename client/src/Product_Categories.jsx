import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./App.css";
import FeedbackIcon from "./assets/FeedbackIcon.png";
import Navbar from './Navbar';
import Footer from "./Footer";
import './feedback/feedback.css';

import BooksImage from './assets/Books.png';
import CarsImage from './assets/Cars.png';
import FurnitureImage from './assets/Furniture.png';
import MusicalImage from './assets/Musical.png';
import MobileImage from './assets/Mobile.png';
import FastFoodImage from './assets/FastFood.png';
import ClothingImage from './assets/Clothing.png';
import StationaryImage from './assets/Stationary.png';
import ShoesImage from './assets/Shoes.png';
import SportsImage from './assets/Sports.png';
import HomeDecorationImage from './assets/Home_Decoration.png';
import ElectronicsImage from './assets/HomeElectronics.png';

const Product_Categories = () => {
  const [animatedCategory, setAnimatedCategory] = useState(null);
  const navigate = useNavigate();

  const categoriesData = [
    [
      { src: BooksImage, alt: 'Books', text: 'Books' },
      { src: CarsImage, alt: 'Cars', text: 'Cars' },
      { src: FurnitureImage, alt: 'Furniture', text: 'Furniture' },
      { src: MusicalImage, alt: 'Musical', text: 'Musical' },
      { src: MobileImage, alt: 'Mobile', text: 'Mobile' },
      { src: FastFoodImage, alt: 'FastFood', text: 'Fast Food' }
    ],
    [
      { src: ClothingImage, alt: 'Clothing', text: 'Clothing' },
      { src: StationaryImage, alt: 'Stationary', text: 'Stationary' },
      { src: ShoesImage, alt: 'Shoes', text: 'Shoes' },
      { src: SportsImage, alt: 'Sports', text: 'Sports' },
      { src: HomeDecorationImage, alt: 'HomeDecoration', text: 'Home Decoration' },
      { src: ElectronicsImage, alt: 'HomeElectronics', text: 'Home Electronics' }
      
    ]
  ];

  const animateCategory = (index) => {
    setAnimatedCategory(index);
    navigate('/productfeedback');
  };

  return (
  <>
    <section>
    <div className="header">
        <img src={FeedbackIcon} alt="Feedback Logo" className="logo" />
        <h1>Feedback Collection System</h1>
        <img src={FeedbackIcon} alt="Customer Review" className="logo" />
        {name && <span className="name">Welcome, {name}!</span>}
      </div>
      <div>
        <Navbar />
      </div> 
      <div>
      <h1>Select a Product Category</h1>
      </div>
      {categoriesData.map((categoryGroup, index) => (
        <div className="categories" key={index}>
          {categoryGroup.map((category, idx) => (
            <div
              className={`category ${animatedCategory === idx ? 'animated' : ''}`}
              key={idx}
              onClick={() => animateCategory(idx)}
            >
              <img src={category.src} alt={category.alt} />
              <p>{category.text}</p>
            </div>
          ))}
        </div>
      ))}
    </section>
    <section className="footer">
        <Footer/>
      </section>
    </>
  );
};

export default Product_Categories;

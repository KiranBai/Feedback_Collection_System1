import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./App.css";
import FeedbackIcon from "./assets/FeedbackIcon.png";
import Navbar from './Navbar';
import Footer from "./Footer";
import './feedback/feedback.css';

import MLAIImage from './assets/ML_and_AL.png';
import BlockChainImage from './assets/BlockChain.png';
import AmazonImage from './assets/Amazon.png';
import CyberSecurityImage from './assets/Ciber.png';
import DevelopmentImage from './assets/Development.png';
import DesigningImage from './assets/Desiging.png';
import GamingImage from './assets/Gaming.png';
import ArchitectureImage from './assets/Architecture.png';
import IOSANDImage from './assets/IOSAND.png';
import MarketingImage from './assets/Marketing.png';
import ThreeDImage from './assets/3D.png';
import AnimationImage from './assets/Animation.png';

const Internship_Categories = () => {
  const [animatedCategory, setAnimatedCategory] = useState(null);
  const navigate = useNavigate();

  const categoriesData = [
    [
      { src: MLAIImage, alt: 'ML & AI', text: 'ML & AI' },
      { src: BlockChainImage, alt: 'Block Chain', text: 'Block Chain' },
      { src: AmazonImage, alt: 'Amazon', text: 'Amazon' },
      { src: CyberSecurityImage, alt: 'Cyber Security', text: 'Cyber Security' },
      { src: DevelopmentImage, alt: 'Development', text: 'Development' },
      { src: DesigningImage, alt: 'Designing', text: 'Designing' }
    ],
    [
      { src: GamingImage, alt: 'Gaming', text: 'Gaming' },
      { src: ArchitectureImage, alt: 'Architecture', text: 'Architecture' },
      { src: IOSANDImage, alt: 'IOS & AND', text: 'IOS & AND' },
      { src: MarketingImage, alt: 'Marketing', text: 'Marketing' },
      { src: ThreeDImage, alt: '3D', text: '3D' },
      { src: AnimationImage, alt: 'Animation', text: 'Animation' }
    ]
  ];

  const animateCategory = (index) => {
    setAnimatedCategory(index);
    navigate('/internshipfeedback');
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
      <h1>Select a Internship Category</h1>
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

export default Internship_Categories;


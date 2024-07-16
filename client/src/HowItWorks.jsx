
import React from 'react';
import './App.css'
import helloImage from './assets/hello.png';
import workImage from './assets/Work.png';
import laptopImage from './assets/Laptop.png';

// Step component to represent each step
const Step = ({ imageSrc, altText }) => (
  <div className="step">
    <img src={imageSrc} alt={altText} />
  </div>
);

// HowItWorks component to encapsulate the entire section
const HowItWorks = () => (
  <section className="how-it-works">
    <h2>How it works?</h2>
    <div className="steps">
      <Step imageSrc={helloImage} altText="Step 1" />
      <Step imageSrc={workImage} altText="Step 2" />
      <Step imageSrc={laptopImage} altText="Step 3" />
    </div>
  </section>
);

export default HowItWorks;
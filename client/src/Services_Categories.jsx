import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./App.css";
import FeedbackIcon from "./assets/FeedbackIcon.png";
import Navbar from './Navbar';
import Footer from "./Footer";
import './feedback/feedback.css';

import OnlineEducationImage from './assets/Online_Education.png';
import OnlineTicketBookingImage from './assets/Online_Ticket_Booking.png';
import EventPlanningImage from './assets/Event_Planing.png';
import CateringImage from './assets/Catering.png';
import HomeSecurityImage from './assets/Home_Security.png';
import PlumbingImage from './assets/Plumbing.png';
import CleaningImage from './assets/Cleaning.png';
import GardeningImage from './assets/Gardening.png';
import PaintingImage from './assets/Painting.png';
import PhotographyImage from './assets/PhotoGraphy.png';
import CarRepairImage from './assets/Car_Repair.png';
import BeautyImage from './assets/Beauty.png';
const Services_Categories = () => {
  const [animatedCategory, setAnimatedCategory] = useState(null);
  const navigate = useNavigate();

  const categoriesData = [
    [
        { src: OnlineEducationImage, alt: 'Online Education', text: 'Online Education' },
        { src: OnlineTicketBookingImage, alt: 'Online Ticket Booking', text: 'Online Ticket Booking' },
        { src: EventPlanningImage, alt: 'Event Planning', text: 'Event Planning' },
        { src: CateringImage, alt: 'Catering', text: 'Catering' },
        { src: HomeSecurityImage, alt: 'Home Security', text: 'Home Security' },
        { src: PlumbingImage, alt: 'Plumbing', text: 'Plumbing' }
      ],
      [
        { src: CleaningImage, alt: 'Cleaning', text: 'Cleaning' },
        { src: GardeningImage, alt: 'Gardening', text: 'Gardening' },
        { src: PaintingImage, alt: 'Painting', text: 'Painting' },
        { src: PhotographyImage, alt: 'Photography', text: 'Photography' },
        { src: CarRepairImage, alt: 'Car Repair', text: 'Car Repair' },
        { src: BeautyImage, alt: 'Beauty', text: 'Beauty' }
      ]
  ];

  const animateCategory = (index) => {
    setAnimatedCategory(index);
    navigate('/servicesfeedback');
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
      <h1>Select a Service Category</h1>
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

export default Services_Categories;
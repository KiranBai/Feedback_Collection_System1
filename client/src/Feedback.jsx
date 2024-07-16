import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import FeedbackIcon from "./assets/FeedbackIcon.png";
import { Link, useLocation } from "react-router-dom"; // Import useLocation hook
import IntershipFeedbackImage from './assets/InternshipFeedback.png'; // Replace with your actual image path
import productFeedbackImage from './assets/productFeedback.png'; // Replace with your actual image path
import serviceFeedbackImage from './assets/serviceFeedback.png';

function Feedback() {
  const location = useLocation(); // Use the useLocation hook to get the location object
  const { state } = location;
  const name = state ? state.name : null;

  return (
    <>
      <div className="header">
        <img src={FeedbackIcon} alt="Feedback Logo" className="logo" />
        <h1>Feedback Collection System</h1>
        <img src={FeedbackIcon} alt="Customer Review" className="logo" />
        {name && <span className="name">Welcome, {name}!</span>}
      </div>
      <div>
        <Navbar />
      </div>
      <section className="welcome-message">
        <div className="container">
          <h2>Welcome to our Feedback Collection System!</h2>
          <p>
            We value your opinion and strive to continuously improve our
            products and services to better meet your needs. Your feedback is
            invaluable in helping us understand what we're doing well and where
            we can make enhancements. Whether you've had a positive experience
            or encountered challenges, we want to hear from you.
          </p>
          <p>
            By sharing your feedback, you're not only helping us refine our
            offerings but also contributing to the overall improvement of our
            community. Your insights drive positive change and shape the future
            of our organization. We're committed to listening attentively,
            responding promptly, and taking action based on your input.
          </p>
          <p>
            Thank you for taking the time to share your thoughts with us.
            Together, we can build a better experience for everyone. Your
            feedback matters, and we're here to listen.
          </p>
        </div>
      </section>
      <div className="FCategory">
        <h1>Feedback System Categories</h1>
        <p>
          We have Multiple Categories of feedbacks. Please select the category
          that best describes your feedback.As per your Choice Select it and and
          provide us motivation to train the product according to customers
          demand.
        </p>
        <ul className="feedback-links">
          <li>
            <Link to="/Internship_Categories">
              <img src={IntershipFeedbackImage} alt="Internship Feedback" className="feedback-icon"/><br></br>
              Internships Feedback
            </Link>
          </li>
          <li>
            <Link to="/Product_Categories">
              <img src={productFeedbackImage} alt="Product Feedback" className="feedback-icon" /><br></br>
              Product Feedback
            </Link>
          </li>
          <li>
            <Link to="/Services_Categories">
              <img src={serviceFeedbackImage} alt="Service Feedback" className="feedback-icon" /><br></br>
              Service Feedback
            </Link>
          </li>
        </ul>
      </div>
      {/* Footer Section Starts */}
      <section className="footer">
        <div className="share">
          <a
            href="https://www.facebook.com/login.php"
            className="fab fa-facebook-f"
          />
          <a
            href="https://twitter.com/i/flow/login"
            className="fab fa-twitter"
          />
          <a
            href="https://www.instagram.com/accounts/login/?hl=en"
            className="fab fa-instagram"
          />
          <a
            href="https://www.linkedin.com/login"
            className="fab fa-linkedin"
          />
          <a
            href="https://www.pinterest.ph/login/"
            className="fab fa-pinterest"
          />
        </div>
        <div className="credit">
          {" "}
          created by <span>kiran Talreja</span> | all rights reserved!{" "}
        </div>
      </section>
    </>
  );
}

export default Feedback;

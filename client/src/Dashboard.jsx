import React from "react";
import "./App.css";
import FeedbackIcon from "./assets/FeedbackIcon.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HowItWorks from "./HowItWorks";
import CFeedBack from "./assets/CFeedback.png";
import { useLocation } from "react-router-dom"; // Import useLocation hook

function Dashboard() {
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
      <section className="home" id="home">
        <div className="Con-row">
          <div className="content">
            <h3>Customer's Feedback</h3>
            <p>
              We really listened to what our users wanted, both qualitatively
              listening to the words they say, and quantitatively looking at the
              behavior they take.So,We know that the best way to drive positive
              change is to learn from our mistakes and hear what our customers
              have to say. Our companies thrive off customer feedback. It helps
              us to innovate and disrupt, and keeps us relevant.
            </p>
            <a
              href="https://rapidr.io/blog/feedback-management-system/#:~:text=Enhancing%20Customer%20Experience%3A%20By%20collecting,journey%2C%20increasing%20satisfaction%20and%20loyalty."
              className="btn-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
            </a>
          </div>
          <div className="swiper booksSlider">
            <img src={CFeedBack} className="stand" alt="" />
          </div>
        </div>
        {/* Welcome message */}
     <section className="welcome-message">
        <div className="container">
          <h2>Welcome to our Feedback Collection System!</h2>
          <div>
             <HowItWorks />
         </div>
          <p>
            At Our Feedback Collection System, we're dedicated to providing top-notch
            feedback collection services to help businesses thrive and excel. Our
            platform empowers you to gather valuable insights from your customers,
            employees, and stakeholders, enabling you to make data-driven decisions
            and enhance your products, services, and operations.
          </p>
          <p>
            With our intuitive and customizable feedback forms, powerful analytics
            tools, and seamless integration options, you'll have everything you need
            to streamline your feedback collection process and drive continuous
            improvement.
          </p>
          <p>
            Whether you're seeking customer feedback, employee suggestions, or
            insights from your community, our platform is designed to meet your
            needs and exceed your expectations.
          </p>
          <p>
            Explore our dashboard to get started on your feedback journey today!
          </p>
          <a
              href="http://localhost:5173/feedback-submission"
              className="btn-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Let's Conduct Feedback
          </a>
          </div>
      </section>
      </section>
      {/* Footer Section Starts */}
      <section className="footer">
        <Footer/>
      </section>
      </>
      );
      }
      export default Dashboard;
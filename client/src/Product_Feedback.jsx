import React, { useState } from 'react';
import './feedback/feedback.css';

const Product_Feedback = () => {
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    brandName: '',
    productCategory: '',
    satisfaction: '',
    easeOfUse: '',
    features: '',
    improvements: '',
    performance: '',
    quality: '',
    recommendationRating: '',
    rating: 0,
    comments: ''
  });

  const [brandNames, setBrandNames] = useState([]);
  const [rating, setRating] = useState(0);

  const brandOptions = {
    "Books": ["Penguin Random House", "HarperCollins", "Simon & Schuster"],
    "Cars": ["Tesla", "BMW", "Toyota"],
    "Furniture": ["Ikea", "Ashley HomeStore", "Wayfair"],
    "Musical Instruments": ["Yamaha", "Fender", "Gibson"],
    "Mobile Phones": ["Apple", "Samsung", "Google"],
    "Fast Food": ["McDonald's", "Burger King", "Subway"],
    "Clothing": ["Nike", "Adidas", "H&M"],
    "Stationary": ["Staples", "Office Depot", "Moleskine"],
    "Shoes": ["Nike", "Adidas", "Puma"],
    "Sports": ["Nike", "Adidas", "Under Armour"],
    "Home Decoration": ["Ikea", "Home Depot", "Wayfair"],
    "Home Electronics": ["Panasonic", "Haier", "Sony"]
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      productCategory: category,
      brandName: '',
    }));
    if (category && brandOptions.hasOwnProperty(category)) {
      setBrandNames(brandOptions[category]);
    } else {
      setBrandNames([]);
    }
  };

  const handleRatingChange = (value) => {
    setRating(value);
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      rating: value
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [name]: value
    }));
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Submit feedback data to backend or perform other actions
//     console.log('Feedback submitted:', feedback);
//     // Optionally, reset the form state
//     setFeedback({
//       name: '',
//       email: '',
//       brandName: '',
//       productCategory: '',
//       satisfaction: '',
//       easeOfUse: '',
//       features: '',
//       improvements: '',
//       performance: '',
//       quality: '',
//       recommendationRating: '',
//       rating: 0,
//       comments: ''
//     });
//     setBrandNames([]);
//     setRating(0);
//   };
const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/submit-product_feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(feedback)
      });
      const result = await response.json();
      if (result.success) {
        console.log('Feedback submitted:', result.feedback);
        // Optionally, reset the form state
        setFeedback({
          name: '',
          email: '',
          brandName: '',
          productCategory: '',
          satisfaction: '',
          easeOfUse: '',
          features: '',
          improvements: '',
          performance: '',
          quality: '',
          recommendationRating: '',
          rating: 0,
          comments: ''
        });
        setBrandNames([]);
        setRating(0);
      } else {
        console.error('Error submitting feedback:', result.message);
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };


  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      <h2>Product Feedback</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={feedback.name} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={feedback.email} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="productCategory">Product Category:</label>
        <select id="productCategory" name="productCategory" value={feedback.productCategory} onChange={handleCategoryChange}>
          <option value="">Select category</option>
          {Object.keys(brandOptions).map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      {brandNames.length > 0 && (
        <div className="form-group">
          <label htmlFor="brandName">Brand Name:</label>
          <select id="brandName" name="brandName" value={feedback.brandName} onChange={handleChange}>
            <option value="">Select brand</option>
            {brandNames.map((brand) => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
        </div>
      )}

      <div className="form-group">
        <label htmlFor="satisfaction">Overall Satisfaction:</label>
        <select id="satisfaction" name="satisfaction" value={feedback.satisfaction} onChange={handleChange}>
          <option value="">Select satisfaction level</option>
          <option value="very-satisfied">Very satisfied</option>
          <option value="satisfied">Satisfied</option>
          <option value="neutral">Neutral</option>
          <option value="dissatisfied">Dissatisfied</option>
          <option value="very-dissatisfied">Very dissatisfied</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="easeOfUse">Ease of Use:</label>
        <select id="easeOfUse" name="easeOfUse" value={feedback.easeOfUse} onChange={handleChange}>
          <option value="">Select ease of use</option>
          <option value="very-easy">Very easy</option>
          <option value="easy">Easy</option>
          <option value="neutral">Neutral</option>
          <option value="difficult">Difficult</option>
          <option value="very-difficult">Very difficult</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="features">Features:</label>
        <select id="features" name="features" value={feedback.features} onChange={handleChange}>
          <option value="">Select features</option>
          <option value="user-interface">User interface</option>
          <option value="performance">Performance</option>
          <option value="reliability">Reliability</option>
          <option value="customization">Customization options</option>
          <option value="integration">Integration capabilities</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="improvements">Improvements:</label>
        <textarea id="improvements" name="improvements" value={feedback.improvements} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="performance">Performance:</label>
        <select id="performance" name="performance" value={feedback.performance} onChange={handleChange}>
          <option value="">Select performance</option>
          <option value="exceeded-expectations">Exceeded expectations</option>
          <option value="met-expectations">Met expectations</option>
          <option value="slightly-below-expectations">Slightly below expectations</option>
          <option value="below-expectations">Below expectations</option>
          <option value="poor">Poor</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="quality">Quality:</label>
        <select id="quality" name="quality" value={feedback.quality} onChange={handleChange}>
          <option value="">Select quality</option>
          <option value="excellent">Excellent</option>
          <option value="good">Good</option>
          <option value="average">Average</option>
          <option value="below-average">Below average</option>
          <option value="poor">Poor</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="recommendationRating">Recommendation:</label>
        <select id="recommendationRating" name="recommendationRating" value={feedback.recommendationRating} onChange={handleChange} required>
          <option value="">Select Recommendation</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="rating">Overall Rating:</label>
        <div className="rating">
          {[...Array(5)].map((_, index) => (
            <React.Fragment key={index}>
              <input
                type="radio"
                id={`star${index + 1}`}
                name="rating"
                value={index + 1}
                checked={rating === index + 1}
                onChange={() => handleRatingChange(index + 1)}
              />
              <label
                htmlFor={`star${index + 1}`}
                title={
                  index < 2 ? 'Poor' : index === 2 ? 'Neutral' : 'Excellent'
                }
                style={{ backgroundColor: rating >= index + 1 ? 'red' : 'transparent', borderRadius: '50%', padding: '5px' }}
              >
                {index < 2 ? ' ★ ' : index === 2 ? ' ★ ' : ' ★ '}
              </label>
            </React.Fragment>
          ))}
        </div>
        <p>
          Your rating: {rating === 0 ? 'Not rated' : `${rating} Star(s)`}
        </p>
      </div>

      <div className="form-group">
        <label htmlFor="comments">Comments:</label>
        <textarea id="comments" rows="4" name="comments" value={feedback.comments} onChange={handleChange}></textarea>
      </div>

      <button type="submit">Submit Feedback</button>

    </form>
  );
};

export default Product_Feedback;



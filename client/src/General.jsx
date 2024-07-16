import React, { useState } from 'react';
import './feedback/feedback.css';

function General() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [overallRating, setOverallRating] = useState('');
  const [mentorshipRating, setMentorshipRating] = useState(null);
  const [taskRating, setTaskRating] = useState(null);
  const [communicationRating, setCommunicationRating] = useState('');
  const [learningRating, setLearningRating] = useState(null);
  const [projectQualityRating, setProjectQualityRating] = useState(null);
  const [recommendationRating, setRecommendationRating] = useState('');
  const [comments, setComments] = useState('');
  const [rating, setRating] = useState(0);

  const handleRatingChange = (value) => {
    setRating(value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Send feedback data to the server or perform other actions
    console.log({
      name,
      email,
      overallRating,
      mentorshipRating,
      taskRating,
      communicationRating,
      learningRating,
      projectQualityRating,
      recommendationRating,
      comments
    });
  };

  return (
    <div className="feedback-form">
      <h2>Online Internship Feedback </h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="overallRating">Overall Experience:</label>
          <select id="overallRating" value={overallRating} onChange={(e) => setOverallRating(e.target.value)} required>
            <option value="">Select Rating</option>
            <option value="5">Excellent</option>
            <option value="4">Good</option>
            <option value="3">Average</option>
            <option value="2">Fair</option>
            <option value="1">Poor</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="mentorshipRating">Quality of Mentorship:</label>
          <input type="number" id="mentorshipRating" min="1" max="5" value={mentorshipRating} onChange={(e) => setMentorshipRating(parseInt(e.target.value))} required />
        </div>
        <div className="form-group">
          <label htmlFor="taskRating">Quality of Assigned Tasks:</label>
          <select  id="taskRating" value={taskRating} onChange={(e) => setTaskRating(e.target.value)} required >
          <option value="">Select Task Quality</option>
            <option value="3">Advanced Level</option>
            <option value="2">Intermediate Level</option>
            <option value="1">Beginner Level</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="communicationRating">Communication:</label>
          <select id="communicationRating" value={communicationRating} onChange={(e) => setCommunicationRating(e.target.value)} required>
            <option value="">Select Rating</option>
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Average">Average</option>
            <option value="Poor">Poor</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="learningRating">Learning Opportunities:</label>
          <input type="number" id="learningRating" min="1" max="5" value={learningRating} onChange={(e) => setLearningRating(parseInt(e.target.value))} required />
        </div>
        <div className="form-group">
          <label htmlFor="projectQualityRating">Project Quality:</label>
          <input type="number" id="projectQualityRating" min="1" max="5" value={projectQualityRating} onChange={(e) => setProjectQualityRating(parseInt(e.target.value))} required />
        </div>
        <div className="form-group">
          <label htmlFor="recommendationRating">Recommendation:</label>
          <select id="recommendationRating" value={recommendationRating} onChange={(e) => setRecommendationRating(e.target.value)} required>
            <option value="">Select Rating</option>
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
            >
              {index < 2 ? '★' : index === 2 ? '★' : '★'}
            </label>
          </React.Fragment>
        ))}
      </div>
      <p>
        Your rating: {rating === 0 ? 'Not rated' : `${rating} star(s)`}
      </p>
    </div>
        <div className="form-group">
          <label htmlFor="comments">Comments:</label>
          <textarea id="comments" rows="4" value={comments} onChange={(e) => setComments(e.target.value)}></textarea>
        </div>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}

export default General;

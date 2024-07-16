import React, { useState, useEffect } from 'react';
import './feedback/feedbackAnalytics.css'; // Import your CSS file for styling

const FeedbackAnalytics = () => {
  const [feedbackData, setFeedbackData] = useState([]);

  // Simulated feedback data (replace with actual data fetching)
  useEffect(() => {
    // Simulating data fetching
    const fetchedData = [
        {
            id: 1,
            name: 'Kiran Bai',
            satisfaction: 'very-satisfied',
            easeOfUse: 'easy',
            features: 'user-interface',
            overallRating: 5,
            comments: 'Excellent UI/UX.',
            createdAt: '2024-07-14T10:30:00Z'
          },
        
      {
        id: 2,
        name: 'Kajal Katapal',
        satisfaction: 'very-satisfied',
        easeOfUse: 'very-easy',
        features: 'performance',
        overallRating: 5,
        comments: 'Absolutely loved it!',
        createdAt: '2024-07-11T09:30:00Z'
      },
      {
        id: 3,
        name: 'Radhika Kumari',
        satisfaction: 'satisfied',
        easeOfUse: 'easy',
        features: 'reliability',
        overallRating: 4,
        comments: 'Reliable and user-friendly.',
        createdAt: '2024-07-10T14:45:00Z'
      },
      {
        id: 4,
        name: 'Pari kataria',
        satisfaction: 'very-satisfied',
        easeOfUse: 'very-easy',
        features: 'customization',
        overallRating: 5,
        comments: 'Highly customizable and efficient.',
        createdAt: '2024-06-13T11:20:00Z'
      },
      {
        id: 5,
        name: 'Emily  Ranika',
        satisfaction: 'dissatisfied',
        easeOfUse: 'difficult',
        features: 'integration',
        overallRating: 2,
        comments: 'Difficult to integrate with other systems.',
        createdAt: '2024-06-10T16:00:00Z'
      },
      {
        id: 6,
        name: 'Abdul Razaque',
        satisfaction: 'satisfied',
        easeOfUse: 'easy',
        features: 'user-interface',
        overallRating: 4,
        comments: 'Great experience overall.',
        createdAt: '2024-05-16T12:00:00Z'
      },
      {
        id: 7,
        name: 'Adesh Talreja',
        satisfaction: 'neutral',
        easeOfUse: 'easy',
        features: 'performance',
        overallRating: 3,
        comments: 'Average performance.',
        createdAt: '2024-05-12T13:45:00Z'
      },
      {
        id: 8,
        name: 'Updesh Talreja',
        satisfaction: 'satisfied',
        easeOfUse: 'easy',
        features: 'reliability',
        overallRating: 4,
        comments: 'Reliable and easy to use.',
        createdAt: '2024-05-09T11:20:00Z'
      },
      {
        id: 9,
        name: 'Sambhoo Ram',
        satisfaction: 'satisfied',
        easeOfUse: 'difficult',
        features: 'customization',
        overallRating: 4,
        comments: 'Hard to customize.',
        createdAt: '2024-05-05T15:30:00Z'
      },
      {
        id: 10,
        name: 'Sakshi Karera',
        satisfaction: 'very-satisfied',
        easeOfUse: 'very-easy',
        features: 'integration',
        overallRating: 5,
        comments: 'Seamless integration with other systems.',
        createdAt: '2024-05-02T09:00:00Z'
      }
      // Add more simulated feedback entries as needed
    ];

    setFeedbackData(fetchedData);
  }, []);

  // Calculate total feedback count
  const totalFeedbackCount = feedbackData.length;

  // Calculate average overall rating
  const averageRating = () => {
    if (feedbackData.length === 0) return 0;
    const totalRatings = feedbackData.reduce((sum, feedback) => sum + feedback.overallRating, 0);
    return (totalRatings / feedbackData.length).toFixed(1);
  };

  // Example function to count users who provided feedback
  const countUniqueUsers = () => {
    const uniqueUsers = new Set(feedbackData.map(feedback => feedback.name));
    return uniqueUsers.size;
  };

  return (
    <div className="feedback-analytics-container">
      <h2 className="analytics-heading">Feedback Analytics</h2>

      <div className="analytics-section">
        <h3 className="section-heading">Overview</h3>
        <div className="overview-metrics">
          <p>Total Feedback Received: {totalFeedbackCount}</p>
          <p>Average Rating: {averageRating()}</p>
          <p>Unique Users: {countUniqueUsers()}</p>
        </div>
      </div>

      <div className="analytics-section">
        <h3 className="section-heading">Feedback Trends</h3>
        {/* Implement charts or graphs to visualize trends */}
        <div className="trends-chart">
          {/* Placeholder for trends visualization */}
        </div>
      </div>

      <div className="analytics-section">
        <h3 className="section-heading">Recent Feedback</h3>
        <ul className="recent-feedback-list">
          {feedbackData.map(feedback => (
            <li key={feedback.id} className="feedback-item">
              <div className="feedback-details">
                <p className="feedback-user">{feedback.name}</p>
                <p className="feedback-rating">Rating: {feedback.overallRating} Stars</p>
                <p className="feedback-comments">"{feedback.comments}"</p>
                <p className="feedback-meta">Submitted on {new Date(feedback.createdAt).toLocaleDateString()}</p>
              </div>
              <div className="feedback-indicators">
                <div className={`satisfaction-indicator ${feedback.satisfaction}`}>
                  {feedback.satisfaction === 'very-satisfied' && 'Very Satisfied'}
                  {feedback.satisfaction === 'satisfied' && 'Satisfied'}
                  {feedback.satisfaction === 'neutral' && 'Neutral'}
                  {feedback.satisfaction === 'dissatisfied' && 'Dissatisfied'}
                  {feedback.satisfaction === 'very-dissatisfied' && 'Very Dissatisfied'}
                </div>
                <div className={`ease-of-use-indicator ${feedback.easeOfUse}`}>
                  {feedback.easeOfUse === 'very-easy' && 'Very Easy'}
                  {feedback.easeOfUse === 'easy' && 'Easy'}
                  {feedback.easeOfUse === 'neutral' && 'Neutral'}
                  {feedback.easeOfUse === 'difficult' && 'Difficult'}
                  {feedback.easeOfUse === 'very-difficult' && 'Very Difficult'}
                </div>
                <div className={`features-indicator ${feedback.features}`}>
                  {/* Add specific indicators based on features */}
                  {feedback.features === 'user-interface' && 'UI/UX'}
                  {feedback.features === 'performance' && 'Performance'}
                  {feedback.features === 'reliability' && 'Reliability'}
                  {feedback.features === 'customization' && 'Customization'}
                  {feedback.features === 'integration' && 'Integration'}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeedbackAnalytics;

import React, { useState } from 'react';
import './feedback/HelpSupport.css';

const HelpSupport = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: 'How can I submit my feedback?',
      answer: 'You can submit your feedback by logging into your account and navigating to the "Submit Feedback" section. Fill out the form and click "Submit".'
    },
    {
      question: 'Can I edit my feedback after submission?',
      answer: 'Yes, you can edit your feedback within 24 hours of submission. Go to the "My Feedback" section, select the feedback you want to edit, make your changes, and save.'
    },
    {
      question: 'How is my feedback used?',
      answer: 'Your feedback helps us improve our services and product features. It is analyzed to identify trends and areas of improvement.'
    },
    {
      question: 'Is my feedback anonymous?',
      answer: 'Yes, all feedback submissions are anonymous by default. If you wish to disclose your identity, you can do so in the comments section.'
    },
    {
      question: 'How can I view feedback reports?',
      answer: 'Feedback reports are available in the "Reports" section of your dashboard. You can filter the reports by date, category, or rating.'
    },
    {
      question: 'What should I do if I encounter a technical issue while submitting feedback?',
      answer: 'If you encounter a technical issue, please take a screenshot of the error and contact our support team at Kiran.support@feedback.com for assistance.'
    },
    {
      question: 'How frequently are feedback trends updated?',
      answer: 'Feedback trends are updated in real-time as new feedback is submitted. You can view the latest trends in the "Feedback Analytics" section.'
    }
  ];

const [supportRequest, setSupportRequest] = useState({ name: '', email: '', message: '' });

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setSupportRequest({ ...supportRequest, [name]: value });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('http://localhost:3001/submit-support_request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(supportRequest)
    });
    const result = await response.json();
    if (result.success) {
      console.log('Support request submitted:', result.request);
      // Optionally, reset the form state
      setSupportRequest({ name: '', email: '', message: '' });
      alert('Support request submitted successfully');
    } else {
      console.error('Error submitting support request:', result.message);
      alert('Error submitting support request');
    }
  } catch (error) {
    console.error('Error submitting support request:', error);
    alert('Error submitting support request');
  }
};

  return (
    <div className="help-support-container">
      <h3 className="support-heading">Help & Support</h3>

      <div className="faq-section">
        <h3 className="section-heading">Frequently Asked Questions</h3>
        <ul className="faq-list">
          {faqs.map((faq, index) => (
            <li key={index} className="faq-item">
              <h4 onClick={() => toggleQuestion(index)} className="faq-question">
                {faq.question}
              </h4>
              {activeQuestion === index && <p className="faq-answer">{faq.answer}</p>}
            </li>
          ))}
        </ul>
      </div>

      <div className="contact-section">
        <h3 className="section-heading">Contact Us</h3>
        <p>If you have any questions or need further assistance, please reach out to us:</p>
        <p>Email: <a href="mailto:Kiran.Support@feedback.com">Kiran.Support@feedback.com</a><br /></p>
        <p>Phone: <a href="tel:+92336688760">(+92) 336-688760</a></p>
      </div>

      <div className="support-form-section">
        <h3 className="section-heading">Submit a Support Request</h3>
        <form className="support-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={supportRequest.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={supportRequest.email}
            onChange={handleInputChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={supportRequest.message}
            onChange={handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default HelpSupport;


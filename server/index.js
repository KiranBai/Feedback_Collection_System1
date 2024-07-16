const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const feedbackuserModel = require('./models/feedbackuser');
const internship_feedback = require('./models/internship_feedback'); 
const product_feedback = require('./models/product_feedback');
const service_feedback = require('./models/service_feedback');
const SupportRequest = require('./models/SupportRequest');

const app = express();
app.use(express.json());
app.use(cors());

// mongoose.connect("mongodb://localhost:27017/feedbackuser", { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect("mongodb://localhost:27017/feedbackuser")
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
  });
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    feedbackuserModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json({ success: true, message: "Success", name: user.name, email: user.email });
                } else {
                    res.json({ success: false, message: "Wrong Password" });
                }
            } else {
                res.json({ success: false, message: "User not found, No record existed" });
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ success: false, message: "Internal Server Error" });
        });
});

app.post('/register', (req, res) => {
    feedbackuserModel.create(req.body)
        .then(feedbackusers => res.json(feedbackusers))
        .catch(err => res.json(err));
});

app.post('/reset-profile', (req, res) => {
    const { email, password, newName, newEmail, currentPassword, newPassword } = req.body;

    feedbackuserModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    user.name = newName;
                    user.email = newEmail;
                    if (user.password === currentPassword) {
                        user.password = newPassword;
                    }
                    user.save()
                        .then(updatedUser => res.json({ success: true, message: "Profile updated successfully", name: updatedUser.name, email: updatedUser.email }))
                        .catch(err => {
                            console.error(err);
                            res.status(500).json({ success: false, message: "Error updating profile" });
                        });
                } else {
                    res.json({ success: false, message: "Wrong current password" });
                }
            } else {
                res.json({ success: false, message: "User not found" });
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ success: false, message: "Internal Server Error" });
        });
});

app.post('/submit-internship_feedback', (req, res) => {
    internship_feedback.create(req.body)
        .then(internship_feedback => res.json({ success: true, message: "Feedback submitted successfully", internship_feedback }))
        .catch(err => {
            console.error(err);
            res.status(500).json({ success: false, message: "Error submitting feedback" });
        });
});

app.post('/submit-product_feedback', (req, res) => {
    product_feedback.create(req.body)
      .then(product_feedback => res.json({ success: true, message: "Feedback submitted successfully", product_feedback }))
      .catch(err => {
        console.error(err);
        res.status(500).json({ success: false, message: "Error submitting feedback" });
      });
  });

app.post('/submit-service_feedback', (req, res) => {
service_feedback.create(req.body)
    .then(service_feedback => res.json({ success: true, message: "Feedback submitted successfully", service_feedback }))
    .catch(err => {
    console.error(err);
    res.status(500).json({ success: false, message: "Error submitting feedback" });
    });
});

app.post('/submit-support_request', (req, res) => {
    SupportRequest.create(req.body)
      .then(request => res.json({ success: true, message: "Support request submitted successfully", request }))
      .catch(err => {
        console.error(err);
        res.status(500).json({ success: false, message: "Error submitting support request" });
      });
  });
app.listen(3001, () => {
    console.log("Server is running");
});






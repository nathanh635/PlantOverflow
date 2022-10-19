const router = require('express').Router();
const path = require('path');

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for contact page
app.get('/contact', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/contact.html'))
);

// GET Route for about me page
app.get('/aboutme', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/aboutme.html'))
);

// GET Route for market insights page
app.get('/marketinsights', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/marketinsights.html'))
);

// GET Route for buying/selling page
app.get('/buyingselling', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/buyingselling.html'))
);


// POST Route for submitting feedback
app.post('/api/feedback', (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to submit feedback`);

  // Destructuring assignment for the items in req.body
  const { email, feedbackType, feedback } = req.body;

  // If all the required properties are present
  if (email && feedbackType && feedback) {
    // Variable for the object we will save
    const newFeedback = {
      email,
      feedbackType,
      feedback,
      feedback_id: uuid(),
    };

    readAndAppend(newFeedback, './db/feedback.json');

    const response = {
      status: 'success',
      body: newFeedback,
    };

    res.json(response);
  } else {
    res.json('Error in posting feedback');
  }
});

module.exports = router;

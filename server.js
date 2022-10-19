const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// GET Route for contact page
app.get('/contact', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/contact.html'))
);

// GET Route for about me page
app.get('/aboutme', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/aboutme.html'))
);

// GET Route for market insights page
app.get('/marketinsights', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/marketinsights.html'))
);

// GET Route for buying/selling page
app.get('/buyingselling', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/buyingselling.html'))
);

//chinese routes
app.get('/c', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/c/index.html'))
);

// GET Route for contact page
app.get('/c/contact', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/c/contact.html'))
);

// GET Route for about me page
app.get('/c/aboutme', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/c/aboutme.html'))
);

// GET Route for market insights page
app.get('/c/marketinsights', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/c/marketinsights.html'))
);

// GET Route for buying/selling page
app.get('/c/buyingselling', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/c/buyingselling.html'))
);

// // Wildcard route to direct users to a 404 page
// app.get('*', (req, res) =>
//   res.sendFile(path.join(__dirname, 'public/pages/404.html'))
// );

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

// Importing the Express framework
const express = require('express');
// Creating an instance of the Express application
const app = express();
// Defining the port number
const PORT = 8080;

// Middleware to parse incoming JSON data
app.use(express.json());

// Route for the home page
app.get('/', (req, res) => {
    console.log('HOME');
    // Sending a basic HTML response for the home page
    res.send(`
    <!DOCTYPE html>
    <html>
        <head>
            <title>Home Page</title>
        </head>
        <body>
            <h1>Welcome to the Home Page</h1>
            <p>This is a basic HTML response.</p>
        </body>
    </html>
`);
});

// Route for retrieving a t-shirt
app.get('/tshirt', (req, res) => {
    console.log('tshirt');
    // Sending a JSON response with t-shirt details
    res.status(200).send({
        tshirt: '👕',
        size: 'large'
     });
});

// Route for retrieving pants
app.get('/pants', (req, res) => {
    console.log('pants');
    // Sending a JSON response with pants details
    res.status(200).send({
        pants: '👖',
        size: 'large'
     });
});

// Route for adding a logo to a t-shirt
app.post('/tshirt/:id', (req, res) => {
    console.log('tshirt id');
    // Logging the request body and parameters
    console.log(req.body);
    console.log('req.params', req.params);
    // Extracting id and logo from request parameters and body
    const { id } = req.params;
    const { logo } = req.body;

    // Checking if logo is provided, if not, sending an error response
    if (!logo) {
        res.status(418).send({ message: 'We need a logo!' });
    }

    // Sending a response confirming the t-shirt customization
    res.send({
        tshirt: `👕 with your ${logo} and ID of ${id}`,
    });
});

// Route for adding a logo to pants
app.post('/pants/:id', (req, res) => {
    console.log('pants id');
    // Extracting id and logo from request parameters and body
    const { id } = req.params;
    const { logo } = req.body;

    // Checking if logo is provided, if not, sending an error response
    if (!logo) {
        res.status(418).send({ message: 'We need a logo!' });
    }

    // Sending a response confirming the pants customization
    res.send({
        pants: `👖 with your ${logo} and ID of ${id}`,
    });
});

// Starting the server
app.listen(PORT, function (err) {
    // Handling server start-up errors
    if (err) {
        console.log('err', err);
    } else {
        console.log('---server running on', PORT);
    }
});
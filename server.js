const express = require('express');
const logger = require('morgan');
const path = require('path');

const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(logger('dev'));

// Routes
server.get('/do_a_random', (req, res) => {
    res.send(`Your number is: ${Math.floor(Math.random() * 100) + 1}`);
});

// Route to handle Mad Lib POST request
server.post('/ITC505/lab-7/', (req, res) => {
    const { noun, verb, adjective, adverb, pluralNoun } = req.body;

    if (!noun || !verb || !adjective || !adverb || !pluralNoun) {
        res.send(`
            <h1>Submission Failed</h1>
            <p>Please fill out ALL fields</p>
            <a href="/ITC505/lab-7/index.html">Go Back to Form</a>
        `);
        return;
    }

    const madLib = `
        In a ${adjective} Disney castle, a ${noun} dreamed of adventure.
        It would ${verb} ${adverb} every day with ${pluralNoun}.
        Together, they discovered magic and joy, living happily ever after!
    `;

    res.send(`
        <h1>Submission Successful</h1>
        <p>${madLib}</p>
        <a href="/ITC505/lab-7/index.html">Go Back to Form</a>
    `);
});

// Serve static files from "public" folder
const publicServedFilesPath = path.join(__dirname, 'public');
server.use(express.static(publicServedFilesPath));

// Server port configuration
let port = 80; // Default port
if (process.argv[2] === 'local') {
    port = 8080;
}

// Start the server
server.listen(port, () => console.log(`Ready on localhost:${port}!`));

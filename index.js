const express = require('express');
const app = express();
const PORT = 8080;

app.use( express.json() )

app.get('/' , (req, res) => {
    console.log('HOME')
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

app.get('/tshirt' , (req, res) => {
    console.log('tshirt')
    res.status(200).send({
        tshirt: '👕',
        size: 'large'
     })
});

app.get('/pants' , (req, res) => {
    console.log('pants')
    res.status(200).send({
        pants: '👖',
        size: 'large'
     })
});

app.post('/tshirt/:id', (req, res) => {
    // console.log('request', req)
    // console.log('response', res)
    console.log('tshirt id')
    console.log(req.body)
    console.log('req.params'. req.params)
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({ message: 'We need a logo!' })
    }

    res.send({
        tshirt: `👕 with your ${logo} and ID of ${id}`,
    });
});

app.post('/pants/:id', (req, res) => {
    console.log('pants id')
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({ message: 'We need a logo!' })
    }
    res.send({
        pants: `👖 with your ${logo} and ID of ${id}`,
    });
   
});

    

// http://0.0.0.0:8080/
// http://localhost:8080/

app.listen(PORT, function (err){
    if (err){
        console.log('err', err)
    }
    else{
        console.log('---server runnning on', PORT)
    }
})
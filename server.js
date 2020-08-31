const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            "id": 1,
            "image": "https://placeimg.com/64/64/1",
            "name": "Smith",
            "birthday": "19920219",
            "gender": "male",
            "job": "student"
        },
        {
            "id": 2,
            "image": "https://placeimg.com/64/64/2",
            "name": "Ana",
            "birthday": "19850219",
            "gender": "female",
            "job": "doctor"
        },
        {
            "id": 3,
            "image": "https://placeimg.com/64/64/3",
            "name": "John",
            "birthday": "20050219",
            "gender": "male",
            "job": "student"
        },
    ]);
})

app.listen(port, () => console.log(`Listening on port ${port}`))
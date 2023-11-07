const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/'));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.all('/get-data/:resource', async (req, res) => {
  const resource = req.params.resource;
  const inputText = req.method === 'POST' ? req.body.inputText : req.query.inputText;

  try {
    const response = await axios.get(`https://www.speedrun.com/api/v1/${resource}?name=${inputText}`);
    const apiResponse = response.data;
    res.json(apiResponse);
  } catch (error) {
    res.status(500).send('Error making the API request: ' + error.message);
  }
});
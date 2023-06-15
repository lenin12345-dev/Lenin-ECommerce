const express = require('express');
const axios = require('axios');

const app = express();

app.get('/api/data', async (req, res) => {
  try {
    const response = await axios.get('https://api.pujakaitem.com/api/products' + req.url);
    console.log(response);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(3000, () => {
  console.log('Proxy server listening on port 3000');
});
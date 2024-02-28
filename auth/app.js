const express = require('express');
const app = express();
const PORT = 8001; 


app.get('/service/auth/', (req, res) => {
  res.json({message: 'Im the Auth Micro hello mamey!'});
});

app.get('/service/auth/ping', (req, res) => {
    res.json({ message: 'pong' });
  });

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

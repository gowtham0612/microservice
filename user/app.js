const express = require('express');
const app = express();
const PORT = 8000; 


app.get('/service/user/', (req, res) => {
  res.json({message: 'Im the USER Micro hello mamey!'});
});

app.get('/service/user/ping', (req, res) => {
    res.json({ message: 'pong' });
  });

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

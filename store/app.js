const express = require('express')
const app = express();
const PORT = 8002; 


app.get('/service/store/', (req, res) => {
  res.json({message: 'Im the STORE Micro hello mamey!'});
});

app.get('/service/store/ping', (req, res) => {
    res.json({ message: 'pong' });
  });


  app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
  })
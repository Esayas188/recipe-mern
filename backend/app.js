require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const Routes = require('./routes/Recipes')
const userroutes = require('./routes/user')
const app = express();

 
// Connect to MongoDB
mongoose.connect(`${process.env.MONGO_URI}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() =>{
  console.log('connected to mongodb..');
  app.listen(process.env.PORT, () => {
    console.log('listening on port 4000...');
  });
}
)
.catch( err => console.log('could not connect to database..'))
//Enable CORS middleware
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://delicious-new.netlify.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: 'GET, POST, PUT, DELETE',
//     allowedHeaders: 'Content-Type',
//   })
// );

// Rest of your API routes and logic
// Middleware to parse JSON request bodies
app.use(express.json());
app.use('/meals',Routes);
app.use('/api/auth',userroutes);




















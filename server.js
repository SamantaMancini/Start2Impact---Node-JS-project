const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

// MOONGOOSE 7
async function dbConnect() {
  try {
    await mongoose.connect(process.env.DB);
    console.log('Db successfullt connected !!!');
  } catch (error) {
    console.log('Database connection error:', error.message)
  }

}

dbConnect()
  const port = process.env.PORT || 5000;
  
mongoose.connection.once('connected', () => {
  app.listen(port, () => {
    console.log(`App running on ${port}...`);
  });
});

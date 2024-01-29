const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
)

async function dbConnect() {
  try {
    await mongoose.connect(DB);
    console.log('Db successfully connected !!!');
  } catch (error) {
    console.log('Database connection error:', error.message);
  }
}

const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`App running on ${port}...`);
    });
    
dbConnect();
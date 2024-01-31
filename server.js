const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

async function dbConnect() {
  await mongoose.connect(DB);
  console.log('Db successfully connected !!!');
}
dbConnect();

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App running on ${port}...`);
});

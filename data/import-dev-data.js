//  node dev-data\data\import-dev-data.js --import

const fs = require('fs');

const mongoose = require('mongoose');

const dotenv = require('dotenv');
const Interaction = require('../../models/interactionModel');
const Post = require('../../models/postModel');
const User = require('../../models/userModel');

dotenv.config({ path: './config.env' });

async function dbConnect() {
  await mongoose.connect(process.env.DB);
  console.log('Db successfullt connected !!!');
}
dbConnect().catch((err) => console.log(err));

// HERE CHANGE THE FILE NAME TO CHOOSE AND IMPORT MANUALLY
const posts = JSON.parse(
  fs.readFileSync(`${__dirname}/posts.json`, 'utf-8'),
);
const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, 'utf-8'));
const interactions = JSON.parse(fs.readFileSync(`${__dirname}/interactions.json`, 'utf-8'));

const importData = async () => {
  try {
    await Post.create(posts);
    await User.create(users, { validateBeforeSave: false });
    await Interaction.create(interactions);
    console.log('Data succsefully loaded! ❎ ');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

const deleteData = async () => {
  try {
    await Post.deleteMany();
    await Interaction.deleteMany();
    await User.deleteMany();
    console.log('Data succsefully deleted! ✅ ');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
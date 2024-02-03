
const fs = require('fs');

const mongoose = require('mongoose');

const dotenv = require('dotenv');
const Product = require('../models/productModel');
const Order = require('../models/orderModel');
const User = require('../models/userModel');

dotenv.config({ path: './config.env' });

async function dbConnect() {
    await mongoose.connect(process.env.DATABASE);
    console.log('Connected to database');
}

dbConnect().catch((err) => console.log(err));

const products = JSON.parse(
    fs.readFileSync(`${__dirname}/products.json`, 'utf-8'),
    );
const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, 'utf-8'));
const orders = JSON.parse(fs.readFileSync(`${__dirname}/orders.json`, 'utf-8'));

const importData = async () => {
    try {
        await Product.create(products);
        await Order.create(orders);
        await User.create(users, { validateBeforeSave: false });
        console.log('Data successfully loaded');
        process.exit();
    } catch (error) {
        console.log(error)
    }
}

const deleteData = async () => {
    try {
        await Product.deleteMany();
        await Order.deleteMany();
        await User.deleteMany();
        console.log('Data successfully deleted');
        process.exit();
    } catch (error) {
        console.log(error)
    }
}

if (process.argv[2] === '--import') {
    importData();
} else if (process.argv[2] === '--delete') {
    deleteData();
}
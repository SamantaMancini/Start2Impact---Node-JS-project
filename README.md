# Orizon API Node JS:

API built from scratch with Node.js and Express for the travel agency Orizon.

## :bulb: How it works

The API ha three data Schemas:
- Users: data of the subscripted users
- Products: data of the products
- Orders: data on which users and which
  products they have inserted in the specific order
 
Using the correct ENDPOINTS you can Create, Read, Update or Delete (CRUD) what do you
want. Finally, you can search through the intervals with some queries. For this project
where used Node.js (with Express framework) and MongoDB database.

## 📚: Libraries

- Express (framework for use Middlewares)
- dotEnv (environment variables)
- express-mongo-sanitize (Data sanitization against NoSQL query injection)
- helmet (Set security HTTP headers)
- xss (Data sanitazation agains XSS)
- hpp (Prevent parameter pollution)
- morgan (Middleware for HTTP requests)
- express-rate-limit (Middleware for Limit request)
- nodemon
- prettier, eslint

## :floppy_disk: Installation

First of all, you need Node.js installed.
If you don't have it, you can download it here:
[Node.js](https://nodejs.org/en)<br>
After the installation, you're ready to go.

### 1 - Clone the repository

`git clone https://github.com/SamantaMancini/Start2Impact---Node-JS-project`

### 2 - Install the dependencies

`npm install`

## 3 - MongoDB:

- Go to [MongoDB](https://www.mongodb.com/atlas/database) and click "Try free" to start the account creation process.
- Create an account or log in if you already have a MongoDB account.
- After logging in, click on "Build a Cluster" to start creating a new cluster, which is the environment where your MongoDB databes will run.
- During the cluster creation, you will have the opportunity to customize settings such as the cluster location, size and advanced options.
- After creating the cluster, click on "Database Access" in the left-hand menu and then "Add New Database User" to create a new database user.
  Here you can define the username and password for accessing the database.
- Next, click on "Network Access" in the left-hand menu and then "Add IP Adress" to allow access to your cluster from specific IP addresses. You can add your IP address so that you can access the cluster from home or the office.

### 4 - Environment variable

Copy the `.env.example file` in the project's root folder and rename it `config.env`, add your string DATABASE (in MongoDB click on "Database" in the left-hand menu, click on "Connect" and then on "Drivers" copy and paste the string).
Example:
PORT=3000
DATABASE=mongodb+srv://dbSamy:<password>@cluster0.1ehyp7z.mongodb.net/ORIZON-API?retryWrites=true&w=majority

### 5 - Import Data

### 6 - Start it!

- `npm run start` for production
- `npm run dev` for development

### 7 - Postman

### 8 - CRUD 
- GET (Read all files or ID)
- POST (Create a new file)
- PATCH (Edit a file)
- DELETE (delete a file)


## :e-mail: Contact Me

You can find my Linkedin profile here: (https://www.linkedin.com/in/samantamancini/)

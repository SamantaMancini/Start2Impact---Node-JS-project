# Orizon API Node JS: 
API built from scratch with Node.js and Express for the travel agency Orizon.
## :bulb: How it works
In the test folder 
## :computer: Languages
- Javascript
- Node JS
  
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

## MongoDB: 
- Go to [MongoDB](https://www.mongodb.com/atlas/database) and click "Try free" to start the account creation process.
- Create an account or log in if you already have a MongoDB account. 
- After logging in, click on "Build a Cluster" to start creating a new cluster, which is the environment where your MongoDB databes will run.
- During the cluster creation, you will have the opportunity to customize settings such as the cluster location, size and advanced options.
- After creating the cluster, click on "Database Access" in the left-hand menu and then "Add New Database User" to create a new database user.
Here you can define the username and password for accessing the database.
- Next, click on "Network Access" in the left-hand menu and then "Add IP Adress" to allow access to your cluster from specific IP addresses. You can add your IP address so that you can access the cluster from home or the office.

## :floppy_disk: Installation

First of all, you need Node.js installed.
If you don't have it, you can download it here:
[Node.js](https://nodejs.org/en)<br>
After the installation, you're ready to go.

### 1 - Clone the repository

`git clone https://github.com/MiraiTsukiGames/S2I-JS-Advanced.git`

### 2 - Install the dependencies

`npm install`

### 3 - Environment variable

Copy the `.env.example file` in the project's root folder and rename it `config.env`, add YOUR URL DATABASE (in MongoDB click on "Database" in the left-hand menu, click on "Connect" and then on "Drivers" copy and paste the string).
add YOUR DATABASE_PASSWORD.

### 4 - Start it!

- `npm run start` for production
- `npm run dev` for development

### 5 - Postman
For convenience, i recommend using Postman. Here is the link to the project:

## :e-mail: Contact Me

You can find my Linkedin profile here: (https://www.linkedin.com/in/samantamancini/)

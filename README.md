
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

Copy the `.env.example file` in the project's root folder and rename it `config.env`, add your string DATABASE (in MongoDB click on "Database" in the left-hand menu, click on "Connect" and then on "Drivers" copy and paste the string). <br/> Example: <br/>
`PORT=3000`
`DATABASE=mongodb+srv://dbSamy:madadw45y54@cluster0.1ehyp7z.mongodb.net/ORIZON-API?retryWrites=true&w=majority`

### 5 - Import Data [Optional]
Imported the JSON data in a file called 'import-API.js' in the 'dev' folder.
You can use it by using the command `node ./dev/import-API.js --import` to automatically import all the data into the database. Alternatively, you can delete the data using the command `node ./dev/import-API.js --delete`.

### 6 - Start it!

- `npm run start` for production
- `npm run dev` for development

### 7 - Postman
Using a service like Postman, you can test the ENDPOINTS in CRUD mode. For convenience, I'm sharing my project at this link. I have already set the localhost variable to port 3000, but you can delete it and set the port to 5000. It works for both development and production modes, but you need download Postman. <br/>
[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://god.gw.postman.com/run-collection/32496480-b99fe1f0-da45-437e-9d4b-c8170f72492e?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D32496480-b99fe1f0-da45-437e-9d4b-c8170f72492e%26entityType%3Dcollection%26workspaceId%3D2d4d3248-42c4-48a2-a817-78423c635e51)

### 8 - CRUD

Example CRUD

for get all users:
- GET {{LOCALHOST}}/api/v1/users

for create a user:
- POST {{LOCALHOST}}/api/v1/users

for update a user:
- PATCH {{LOCALHOST}}/api/v1/users/user:id

for delete a user:
- DELETE {{LOCALHOST}}/api/v1/users/user:id

for get a product or order by ID:
- GET {{LOCALHOST}}/api/v1/products/product:id

for get an order by product name:
- GET {{LOCALHOST}}/api/v1/orders/getOrdersByProductName?productNames={name products}

for get an order by date:
- GET {{LOCALHOST}}/api/v1/orders?createdAt={order date}


## :e-mail: Contact Me

You can find my Linkedin profile here: (https://www.linkedin.com/in/samantamancini/)

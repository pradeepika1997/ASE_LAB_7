# Customer CRUD application using MEAN

## Introduction:
Creating basic CRUD functions for adding, getting, updating, removing customers data using MEAN( MongoDB, express, Angular, NodeJS) frameworks. 

## Main Objective:
### Task-1: 
Creating backend API which interacts with MongoDB database and allows to use API functions to get, update, delete and add customer details.
### Task-2: 
Creating User Interface to access/modify customer data (adding, viewing, updating and deleting operations).

## Steps for implementation of above mentioned tasks:
### Task-1: Creating Backend API that interacts with MongoDB
1) Installed the following js file using node package manager
`npm install express --save`    
`npm install body-parser --save`     
`npm install cors --save`    
`npm install mongoose --save`     

Installing nodemon to automatically detect any changes in the js files and recompile the backend API files.
`npm install --save -g nodemon`     
Make sure that all the dependencies are added in the package.json file.

2) Implementing the main file( server.js/index.js)
Importing the required packages like express, body-parser, MongoDB, cors
Connecting to the MongoDB database
importing the required database schema models and the routing service js file
Telling the js file to listen on port 4000 ( which is the backend API ) 
Final server.js file source code:
![](https://github.com/sindhusha-t/ASE-Lab-Assignments/raw/master/LAB-7/customer-mean-app/Documentation/Screenshots/server%20js%20file.png)

3) Created the MongoDB database connection config file (db.js)
![](https://github.com/sindhusha-t/ASE-Lab-Assignments/raw/master/LAB-7/customer-mean-app/Documentation/Screenshots/Db%20config%20file.png)

4) Created Schema file ( which connects to the collection and updates the documents )  - Customers.js
![](https://github.com/sindhusha-t/ASE-Lab-Assignments/blob/master/LAB-7/customer-mean-app/Documentation/Screenshots/Customer%20Schema.png)

5) Running `node server` or `nodemon` to listen on port 4000 and successfully connect to the MongoDB database.
![](https://github.com/sindhusha-t/ASE-Lab-Assignments/raw/master/LAB-7/customer-mean-app/Documentation/Screenshots/running%20nodemon.png)

### Task-2: Creating User Interface and sends requests to the backend api based on the CRUD operation.
1) Created basic html files for adding, editing, Viewing the list of customer details.
2) Created customer service file provides functions like 'addCustomer, getCustomer, editCustomer, updateCustomer, deleteCustomer)
These functions connect to the localhost on port 4000 and does the required operations connecting to MongoDB 
3) Implemented type script files for all 3 components that use customer service functions to do the required operations.
4) Running `ng serve -o` command 

User Interface:
1) Home Page:
![](https://github.com/sindhusha-t/ASE-Lab-Assignments/raw/master/LAB-7/customer-mean-app/Documentation/Screenshots/Home%20page.png)
2) Adding Customer Page:
![](https://github.com/sindhusha-t/ASE-Lab-Assignments/raw/master/LAB-7/customer-mean-app/Documentation/Screenshots/Add%20Customer.png)
3) Viewing Customer details:
![](https://github.com/sindhusha-t/ASE-Lab-Assignments/raw/master/LAB-7/customer-mean-app/Documentation/Screenshots/View%20Customers.png)
4) Updating Customer Details:
![](https://github.com/sindhusha-t/ASE-Lab-Assignments/raw/master/LAB-7/customer-mean-app/Documentation/Screenshots/Edit%20Customer.png)
5) Deleting Customer Details:
![](https://github.com/sindhusha-t/ASE-Lab-Assignments/raw/master/LAB-7/customer-mean-app/Documentation/Screenshots/View%20after%20delete.png)

### Conclusion:
We have learnt how to create CRUD application using MEAN and how to create API using MongoDB, express and nodejs.

## Task responsibilities:
Sindhusha Tiyyagura: Created Backend API that connects to MongoDB and does CRUD operations
Pradeepika Kolluru: Created User Interface for the Customer CRUD operations.
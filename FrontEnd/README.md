# BookME 

BookME is a web application for hotel listings and booking, inspired by Airbnb. This application is built with the MEAN stack, which consists of MongoDB, Express, Angular, and Node.js. Non-registered users can view the home page and catalog, but cannot see property details or make bookings. Registered users can list properties, book properties, and write reviews.

<p align="center">
  <img src="https://user-images.githubusercontent.com/95815081/224548931-650f252e-0be2-4d3f-8052-67530888be80.png" />
</p>

## Getting Started

To get started with BookME, you will need to have Node.js, Angular CLI, and MongoDB installed on your computer. You can install Node.js from the official website, and Angular CLI can be installed via npm using the following command:

`npm install -g @angular/cli`

You can download and install MongoDB from the official website, or use a cloud-based MongoDB service such as MongoDB Atlas.

After installing the necessary software, you can clone this repository and install the dependencies:

`git clone https://github.com/blackair23/Angular-Project.git`

`cd Angular-Project`

`npm install`

## Running the App

To run the application, you will need to start both the front-end and back-end servers. In one terminal window, navigate to the /FrontEnd directory and run the following command:

`ng serve`

This will start the Angular development server and make the application available at http://localhost:4200.

In another terminal window, navigate to the /RestApi directory and run the following command:

`npm start`

This will start the Node.js/Express server and connect to the MongoDB database. The server will be available at http://localhost:3030.

## Features

### Non-Registered Users

   - View home page and catalog
   - Cannot see property details or make booking
   
### Registered Users

   - Register and login
   - List properties
   - Book properties
   - Write reviews
   
## Technologies Used

   - Angular: Front-end framework
   - Node.js/Express: Back-end framework
   - MongoDB: Database
   - Multer: File uploading
   
   
   
   
   

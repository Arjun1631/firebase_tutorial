# Firebase Tutorial Project

## Overview

This project demonstrates how to create a simple website using Firebase as a backend to store user information. The application allows users to submit their name, email, and a message, which will be saved to a Firebase Firestore database. This tutorial covers setting up Firebase, connecting it to a web application, and implementing basic form functionality.

## Features

- User-friendly form to collect name, email, and message.
- Data storage in Firebase Firestore.
- Real-time updates and data retrieval from the database.
- Basic validation for user inputs.

## Technologies Used

- **HTML**: Structure the web page.
- **CSS**: Style the web page.
- **JavaScript**: Handle form submission and interact with Firebase.
- **Firebase**: Backend service for data storage and management.

## Setup Instructions

### Step 1: Firebase Setup

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Create a new project.
3. Enable Firestore Database in your project.
4. Add a new web app to your project.
5. Copy the Firebase configuration code.

### Step 2: Project Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/firebase-tutorial-project.git
    ```

2. Navigate to the project directory:
    ```bash
    cd firebase-tutorial-project
    ```

3. Open the `index.html` file and replace the Firebase configuration placeholder with your copied configuration code.

### Step 3: Install Dependencies (if applicable)

If you're using any package managers (like npm or yarn) or build tools (like Webpack), make sure to install the necessary dependencies.

### Step 4: Run the Project

1. Open the `index.html` file in your web browser.
2. Fill in the form with your name, email, and message.
3. Click the submit button to save the data to Firebase.

## Example Code Snippet

Here's a simple JavaScript code snippet to handle form submission and save data to Firestore:

```javascript
// Initialize Firebase
const firebaseConfig = {
    // Your Firebase configuration
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    db.collection('messages').add({
        name: name,
        email: email,
        message: message
    })
    .then(() => {
        console.log('Message sent!');
        document.getElementById('contactForm').reset();
    })
    .catch((error) => {
        console.error('Error sending message: ', error);
    });
});

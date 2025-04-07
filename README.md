# Payment Integration App with React Native

## Overview

The **Payment Integration App** is a mobile application built using **React Native**. This app demonstrates how to integrate the **Paystack** payment gateway, allowing users to browse products, select items to buy, and securely make payments using Paystack. The app is user-friendly and works on iOS, Android, and web platforms through Expo.

## Key Features

1. **Home Screen**: 
   - Displays a list of products, each with a description and price.
   - Users can see the available products at a glance.

2. **Payment Screen**:
   - Users can enter their email and initiate payments through Paystack.
   - Each product has its own payment screen for a smooth transaction process.

3. **Paystack Integration**: 
   - The app uses the Paystack API to securely process payments, ensuring that your payment information is safe.

4. **Cross-Platform Support**:
   - The app works on iOS, Android, and web platforms, providing versatility for users.

## Technologies Used

To build this application, the following technologies were used:

- **React Native**: The main framework for creating mobile applications.
- **Expo**: A tool that simplifies the development and deployment process.
- **React Navigation**: Helps with moving between different screens in the app.
- **Paystack API**: Handles all payment processing securely.
- **Axios**: A library for making HTTP requests to interact with the Paystack API.

## Prerequisites

Before you can run the app on your machine, make sure you have the following installed:

1. **Node.js** (version 16 or higher).
2. **Expo CLI**: You can install it globally on your computer using the command:
  
   npm install -g expo-cli
  

3. **Git**: For downloading the project from GitHub.
4. **Paystack Secret Key**: You’ll need an actual Paystack secret key for payment processing, which you should replace in the application's code. 

## Installation Steps

Follow these steps to set up and run the project locally:

1. **Clone the Repository**: Download the code for this app from GitHub. Open your terminal and type:

   git clone https://github.com/eungobs/payment-button.git


2. **Navigate to the Project Directory**: Change into the project folder with:
 
   cd payment-button


3. **Install Dependencies**: Download all the necessary packages for the app by typing:
  
   npm install


4. **Set Up Paystack**: Open the `PaymentScreen.js` file and replace the existing placeholder for `PAYSTACK_SECRET_KEY` with your actual Paystack secret key.

5. **Run the App**: 

   - For an **iOS device**, type:
   
     npm run ios

   - For an **Android device**, type:
    
     npm run android
 
   - For **web**, type:
 
     npm run web
   

6. **Start the Development Server**: Finally, to work with the app, you can also start the server by running:

   npm start
 

## How to Use the App

### Home Screen
- When you open the app, you’ll see the **Home Screen**, which lists all available products along with their descriptions and prices.
- To purchase an item, tap the **"Buy Now"** button next to the desired product.

### Payment Screen
- After selecting a product, you’ll be taken to the **Payment Screen**.
- Here you can see product details including an image, description, and price.
- Enter your email address in the provided field, as it is required for processing your payment.
- Tap the **"Pay Now"** button to begin the payment process.

### Paystack Payment Process
- When you tap **"Pay Now"**, the app will:
  - Call the Paystack API to start a transaction.
  - Redirect you to the Paystack payment page in your web browser (this is done securely).
- You don't need to manually enter any card details, as Paystack manages that for you.
- Once the payment is successful, you will see a confirmation message.

### Payment Confirmation
- If the payment is successful, an alert will say **"Payment Initiated"**.
- You will follow a link to complete the payment.
- If the payment fails, an alert will inform you**"Payment Failed"**, and you can try again or return to the **Home Screen**.

## Testing the App

You can use test card information provided by Paystack to simulate payments without using real money. Here’s an example of test card details:

- **Card Number**: 408 408 408 408 408 1
- **Expiry Date**: Any future date (e.g., 12/25)
- **CVV**: 408
- **PIN**: 0000 (if asked)

## Troubleshooting

- **Email Not Entered**: If you try to proceed without entering your email, the **"Pay Now"** button will be disabled.
- **Payment Errors**: Ensure you’re using valid test card details and check your internet connection if payments fail.
- **App Crashes**: If the app crashes, try restarting it or clearing the cache using the command:

  npm start --reset-cache


## Project Structure

Here’s how the files in the project are organized:


payment-button/
├── App.js                         # Main entry point of the app 
├── screens/                       
│   ├── HomeScreen.js              # Displays the list of products 
│   └── PaymentScreen.js           # Handles the payment process 
├── package.json                   # Lists all dependencies and scripts 
├── package-lock.json              # Lock file for dependencies 
└── README.md                      # Project documentation 
```

## Dependencies

This project uses the following packages:

- **React Native**: The core library for building the mobile app.
- **Expo**: Simplifies the development and deployment processes.
- **React Navigation**: Manages navigation between screens in the app.
- **Paystack API**: Handles secure payment processing.
- **Axios**: Used for making HTTP requests to interact with the Paystack API.


# Payment Integration App with React Native

## Overview

The Payment Integration App is a cool mobile application built using **React Native**. Imagine if you could browse awesome products, pick things you want to buy, and then pay for them securely—this app does just that! It uses the **Paystack payment gateway** to handle payments. The best part? This app works perfectly on iOS and Android phones, and even on the web thanks to **Expo**!

## Key Features

1. **Home Screen**:
   - When you open the app, you’ll see a list of products with their descriptions and prices.
   - It’s easy for users to look at all the products at once.

2. **Payment Screen**:
   - After choosing a product, users can enter their email to start paying using Paystack.
   - Each product has its own screen to make paying easy and smooth.

3. **Paystack Integration**:
   - The app uses something called the **Paystack API** to keep your payment information safe while you buy items.

4. **Cross-Platform Support**:
   - The app doesn’t just work on phones; it can also run on the web! So, users have lots of ways to use it.

## Technologies Used

To create this app, we used several important tools:

- **React Native**: This is like the magic tool that helps us build mobile apps.
- **Expo**: This tool makes it easier to develop and share our app.
- **React Navigation**: Think of this as a map that helps us move between different parts (or screens) of the app.
- **Paystack API**: This helps us handle payments safely.
- **Axios**: This is a helper that makes it easy to send messages (requests) to the Paystack API.

## Prerequisites

Before you can run the Payment Integration App on your computer, you need to make sure you have a few things ready:

1. **Node.js**: This is like a tool that runs JavaScript code. Make sure you have version 16 or higher installed.
2. **Expo CLI**: This is a command-line tool that you can install on your computer. You can do this easily by opening a terminal and running this command:
   
   npm install -g expo-cli
   

3. **Git**: This is a tool that helps you easily download projects from the internet (like from GitHub).

4. **Paystack Secret Key**: You’ll need a special key from Paystack for payment processing. This should be replaced in the app’s code.

## Installation Steps

Now let’s go step by step to set up and run the app on your machine!

### Step 1: Clone the Repository

First, we need to get the code for this app from GitHub. This is like copying a recipe from a book. Open your terminal (it’s like a command center for your computer) and type this command:

git clone https://github.com/eungobs/payment-button.git

This will make a copy of the app code on your computer.

### Step 2: Navigate to the Project Directory

Now, we need to go into the folder where the app is kept. Type this in your terminal:

cd payment-button


### Step 3: Install Dependencies

Next, we need to download all the special tools (packages) that our app needs to run. Type this command in your terminal:

npm install


### Step 4: Set Up Paystack

Now, we need to tell the app about our **Paystack secret key**. Open the file named `PaymentScreen.js` and find where it says `PAYSTACK_SECRET_KEY`. Replace that with your actual Paystack secret key from your Paystack account.

### Step 5: Run the App

Finally, let’s see our app in action! Depending on where you want to run it (your phone or web), you will type one of the following commands:

- For an **iOS device**:
  
  npm run ios
  

- For an **Android device**:
  
  npm run android
  

- For **web**:
  
  npm run web
  

### Step 6: Start the Development Server

To work with the app while developing it, start the server with:```
npm start

## How to Use the App

1. **Home Screen**:
   - When you open the app, you’ll see a list of products with their descriptions and prices.
   - If you want to buy something, tap the "Buy Now" button next to the product you like.

2. **Payment Screen**:
   - After picking a product, you’ll go to the Payment Screen.
   - Here, you’ll see the product details such as an image, description, and price.
   - Enter your email address where it says—this is needed for processing your payment.
   - Tap the "Pay Now" button to start the payment.

3. **Paystack Payment Process**:
   - When you tap "Pay Now", the app will ask Paystack to start a transaction.
   - You’ll be taken to the Paystack payment page in your web browser securely.
   - Don’t worry! You don’t have to enter card details manually; Paystack will handle that for you!
   - Once the payment is successful, you’ll see a confirmation message.

4. **Payment Confirmation**:
   - If everything goes well, you will see an alert saying "Payment Initiated".
   - You will follow a link to complete your payment.
   - If there’s an issue, you’ll see an alert saying "Payment Failed". You can try again or go back to the Home Screen.

## Testing the App

You can even test the app without spending real money! Use the test card information provided by Paystack. Here’s an example of what you can use:

- **Card Number**: 408 408 408 408 408 1
- **Expiry Date**: Any future date (for example, 12/25)
- **CVV**: 408
- **PIN**: 0000 (if it asks)

## Troubleshooting

- **Email Not Entered**: If you forget to enter your email, the "Pay Now" button will be dull and will not work.
- **Payment Errors**: Make sure you are using the right test card information, and check your internet connection if payments don't go through.
- **App Crashes**: If the app crashes, try shutting it down and starting again. You can also clear the app's cache by running:

  npm start --reset-cache


## Project Structure

Here's how the files in the project are organized:

payment-button/
├── App.js                  # Main entry point of the app
├── screens/
│   ├── HomeScreen.js       # Displays the list of products
│   └── PaymentScreen.js     # Handles the payment process
├── package.json            # Lists all dependencies and scripts
├── package-lock.json       # Lock file for dependencies
└── README.md               # Project documentation


## Dependencies

This project uses the following packages:

- **React Native**: The main library used to build the mobile app.
- **Expo**: This tool helps us make and share the app easily.
- **React Navigation**: This helps us move between different screens in the app.
- **Paystack API**: This safely manages the payment processing.
- **Axios**: This helps us send requests to the Paystack API.


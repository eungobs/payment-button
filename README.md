Payment Integration App with React Native 

This project is a React Native application that demonstrates how to integrate the Paystack payment gateway into a mobile app. It allows users to browse products, select one, and securely make payments using Paystack. The app uses Expo for easy development and deployment, React Navigation for seamless navigation, and Axios for making API requests to Paystack.

Features
Home Screen: Displays a list of products with their descriptions and prices.

Payment Screen: Allows users to enter their email and initiate payments using Paystack.

Paystack Integration: Uses the Paystack API to securely process payments.

Cross-Platform Support: Works on iOS, Android, and web (via Expo).

Technologies Used
React Native: For building the mobile app.

Expo: For simplifying development and deployment.

React Navigation: For handling navigation between screens.

Paystack API: For processing payments securely.

Axios: For making HTTP requests to the Paystack API.

Prerequisites
Before running the project, ensure you have the following installed:

Node.js (v16 or higher)

Expo CLI (install globally using npm install -g expo-cli)

Git (for version control)

Paystack Secret Key: Replace the placeholder key in the code with your actual Paystack secret key.

Installation
Follow these steps to set up and run the project locally:

Clone the Repository:

git clone https://github.com/eungobs/payment-button.git
cd payment-button
Install Dependencies:

npm install
Set Up Paystack:

Replace the PAYSTACK_SECRET_KEY in the PaymentScreen.js file with your actual Paystack secret key.

Run the App:

For iOS:

npm run ios
For Android:

npm run android
For Web:


npm run web
Start the Development Server:


npm start
How to Use the App
1. Home Screen
When the app opens, you'll see the Home Screen.

This screen displays a list of products with their names, prices, and descriptions.

To proceed to payment, tap the "Buy Now" button next to the product you want to purchase.

2. Payment Screen
After selecting a product, you'll be redirected to the Payment Screen.

On this screen:

Product Details: The product's image, description, and price are displayed.

Email Input: Enter your email address in the provided field. This is required for Paystack to process the payment.

Pay Now Button: Tap the "Pay Now" button to initiate the payment process.

3. Paystack Payment Process
After tapping "Pay Now", the app will:

Call the Paystack API to initialize a transaction.

Redirect you to the Paystack payment page in a web browser.

No Manual Card Entry Required: The payment process is handled automatically by Paystack, and you won't need to enter card details manually.

Once the payment is successful, you'll see a confirmation message.

4. Payment Confirmation
If the payment is successful:

You'll see an alert saying "Payment Initiated".

Follow the link provided to complete the payment.

If the payment fails:

You'll see an alert saying "Payment Failed".

You can retry the payment or go back to the Home Screen.

Testing the App
Use test cards provided by Paystack to simulate payments without using real money.

Example test card details:

Card Number: 408 408 408 408 408 1

Expiry Date: Any future date (e.g., 12/25)

CVV: 408

PIN: 0000 (if prompted)

Troubleshooting
Email Not Entered: If you try to proceed without entering an email, the "Pay Now" button will be disabled.

Payment Errors: If the payment fails, ensure you're using valid test card details or check your internet connection.

App Crashes: Restart the app or clear the cache using npm start --reset-cache.

Project Structure

payment-button/
├── App.js                # Main entry point of the app
├── screens/
│   ├── HomeScreen.js     # Displays the list of products
│   └── PaymentScreen.js  # Handles the payment process
├── package.json          # Lists all dependencies and scripts
├── package-lock.json     # Lock file for dependencies
├── README.md             # Project documentation

Dependencies
The project uses the following dependencies:

React Native: Core library for building the app.

Expo: Simplifies development and deployment.

React Navigation: Handles navigation between screens.

Paystack API: For processing payments securely.

Axios: For making HTTP requests to the Paystack API.
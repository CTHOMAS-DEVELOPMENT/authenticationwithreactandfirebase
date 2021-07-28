# Generic authentication module

This module can be used with all projects. 
If your happy to allow firebase to store your valid registered users then this is the place to start.

The 'application' you log into (using 100% this code) is the desktop component and you could use that as
your starting point for your bespoke. Note that the desktop is an update profile component for any email change, but can be expanded to change any other variable such as a user's image. 

You will have to swap out the variables in the firebase.js file and create your own (See https://firebase.google.com/)
but alter. You will need to create a .env file containing these references for production.
Note that React environment variables all have to start with REACT_APP_ (eg: REACT_APP_FIREBASE_API_KEY)

Note this authentication module supports all "expected functionality" including "forgot password" so users clicking "forgot password" will recieve an email for reset.

### Demo

Feel free to make users and configure them with the demo application:
https://authenticationwithreactandfirebase.surge.sh/

Note: you'll need to click the "Sign up" link on the first visit


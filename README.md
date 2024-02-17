# DHIS2-OpenCPU-App

This app is designed to demonstrate integration between DHIS2 and OpenCPU, allowing users to make HTTP requests to an OpenCPU server and display the responses within the DHIS2 platform.

Files and Usage
index.html
The entry point for the app, containing the structure of the form used to send requests to the OpenCPU server. It includes fields for specifying the HTTP method and the endpoint, and a submit button to initiate the request.

main.js
This JavaScript file contains the logic for handling form submissions, constructing the request to the OpenCPU server, handling the response, and displaying it to the user. It uses the Fetch API to asynchronously make the request and process the response.

style.css
A simple stylesheet file that provides basic styling for the app. It ensures that the response from the OpenCPU server is presented in a readable format.

manifest.webapp
A configuration file specific to DHIS2 apps, which includes metadata about the app such as its name, description, version, and the paths necessary for DHIS2 to properly recognize and run the app.

Usage
To use the app, simply load it within the DHIS2 instance, navigate to the app through the DHIS2 apps menu, and you will be presented with a form. Enter the desired endpoint and choose the HTTP method (GET or POST). When you submit the form, the app will display the response from the OpenCPU server.

Local Development
For local development, you may need to disable CORS in your browser to allow the app to make requests to the OpenCPU server. This is typically only necessary if the OpenCPU server does not include the appropriate CORS headers in its responses.

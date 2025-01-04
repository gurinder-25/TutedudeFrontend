# Frontend Component of Assessment

## Project Overview
This is the frontend component of the Assessment given to me by Tutedude.

## Features
- **User Authentication**: Includes login and signup pages.
- **Dashboard**: Displays simulation results and key performance indicators.
- **Recommendations**: Provides suggestions to improve car performance.
- **Responsive Design**: Fully optimized for various screen sizes.

## Technologies Used
- **HTML5**: Structure and content.
- **CSS3**: Styling and layout.
- **JavaScript**: Interactivity and dynamic content.

---

## File Structure
```
frontend/
|-- index.html            # Landing page
|-- login.html            # Login page for user authentication
|-- signup.html           # Signup page for new users
|-- dashboard.html        # Dashboard displaying results and statistics
|-- recommendation.html   # Recommendations based on simulation performance
|-- css/
|   |-- styles.css        # Main stylesheet
|-- js/
    |-- main.js           # Main JavaScript file
```

---

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/gurinder-25/TutedudeFrontend
   ```

2. Open any `.html` file in a browser to preview the pages. Use a local server (e.g., [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for VS Code) to avoid CORS issues when loading external resources.

3. Link the frontend with the backend:
   - Update the API endpoints in `main.js` to point to the backend server.

---

## Pages Overview

### 1. **Landing Page (index.html)**
   - Brief introduction and navigation links to Login and Signup pages.

### 2. **Login Page (login.html)**
   - Allows existing users to log in.
   - Fields:
     - Email
     - Password

### 3. **Signup Page (signup.html)**
   - Allows new users to create an account.
   - Fields:
     - Name
     - Email
     - Password

### 4. **Dashboard (dashboard.html)**
   - Displays key performance metrics of the simulation.
   - Includes graphs and data visualizations.

### 5. **Recommendations Page (recommendation.html)**
   - Provides actionable insights based on the simulation.

---

## CSS File: styles.css
- Handles the styling for all pages.
- Includes reusable components like buttons, headers, and forms.

---

## JavaScript File: main.js
- Manages interactivity and data fetching.
- Handles API requests to fetch and display data.

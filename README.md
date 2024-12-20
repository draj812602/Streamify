# Dashboard and DataTable Application

## Overview

This project implements a dashboard with metrics and a data table featuring search, sorting, and filtering functionality. The application uses React, Bootstrap, Context API, and custom hooks for performance optimization.

## Features

1. **Dashboard Metrics**: Displays key metrics such as Total Users, Active Users, Total Streams, Revenue, and Top Artist with corresponding Bootstrap cards.
2. **Search Functionality**: A search bar is used to filter through the data (song name, artist, date, streams, user ID).
3. **Data Table**: Displays recent streams in a responsive table with sorting functionality on Song Name, Artist, and Stream Count.
4. **Debounced Search**: Implemented custom hook for debouncing the search requests to optimize performance.

## Setup and Start the App

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v14 or above)
- **npm** (Node Package Manager)

### Steps to Set Up

1. **Clone the Repository**:

   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install Dependencies**:
   Run the following command to install the required dependencies:

   ```bash
   npm install
   ```

3. **Start the Application**:
   To run the app in development mode, use the following command:

   ```bash
   npm start
   ```

   This will start the development server, and you can access the app in your browser at `http://localhost:3000`.

4. **Build the Application for Production**:
   If you want to build the app for production, use:

   ```bash
   npm run build
   ```

   This will create a production-ready build in the `build/` folder.

## Project Structure

- `src/components`: Contains the individual components for the dashboard, search bar, data table, and more.
- `src/contextApi`: Includes the context API setup for global state management.
- `src/staticData`: Contains static data (like `recentStreams`) used in the application.
- `src/styles`: Contains the custom SCSS files for styling.
- `src/App.js`: The main entry point of the application.

## Libraries and Tools Used

- **React**: Frontend library for building the user interface.
- **Bootstrap**: Frontend framework for responsive layout and styling.
- **Context API**: For global state management (search term).
- **Custom Hooks**: For debouncing search input and optimizing performance.

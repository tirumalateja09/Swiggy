# Food Delivery App (Swiggy Clone) Project

## Project Overview

This project is a clone of the popular food delivery application, Swiggy. Built using React, Redux Toolkit, and various modern web technologies, this application allows users to browse food items, add them to a cart, and proceed to checkout with integrated payment options. The project showcases a variety of UI components and state management techniques, making it a comprehensive example of a full-stack web application.

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Project Structure](#project-structure)
6. [Key Components](#key-components)
7. [State Management](#state-management)
8. [Payment Integration](#payment-integration)
9. [UI/UX Design](#uiux-design)
10. [Conclusion](#conclusion)

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Redux Toolkit**: A state management tool that simplifies the process of managing global state in React applications.
- **React Router DOM**: A library for routing in React applications, allowing for navigation between different components.
- **Axios**: A promise-based HTTP client for making API requests.
- **JSON Server**: A simple way to create a REST API using a JSON file for mock data.
- **Razorpay**: A payment gateway for processing online payments.
- **Tailwind CSS**: A utility-first CSS framework for styling components.
- **Material-UI**: A popular React UI framework for building Accordian
- **Swiper**: A modern mobile touch slider with hardware-accelerated transitions.

## Features

- User authentication (login/signup) using JSON Server.
- Shimmer UI for loading states.
- Search and sort functionality for products.
- Responsive design with Tailwind CSS.
- Cart management with Redux Toolkit.
- Payment integration using Razorpay.
- Dynamic routing with React Router DOM.

## Installation

To install and run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Food Delivery
   ```
   Install dependencies:
   bash
   npm install
   npm install json-server

Start the JSON server (in a separate terminal):
bash
npx json-server db.json
Start the React application:
bash
npm start

Open your browser and navigate to http://localhost:3000.
Usage
Home Page: Browse through various food items.
Search Bar: Use the search functionality to find specific products.
Product Sorting: Sort products based on different criteria.
Cart Management: Add or remove items from the cart.
Checkout: Proceed to payment using Razorpay.


# Key Components

- **Shimmer UI**: The Shimmer UI provides a placeholder loading effect while data is being fetched. This enhances user experience by indicating that content is on its way.

- **Footer**: A footer component that provides additional navigation and information about the application.

- **Swiper Slides**: Utilizes the Swiper library to create a responsive carousel for showcasing featured items or promotions.

- **Material-UI Accordion**: An accordion component from Material-UI is used for displaying additional information in a collapsible format, improving the organization of content.

- **Tailwind CSS**: Tailwind CSS is used throughout the project for styling, allowing for rapid UI development with utility classes.

- **React Router DOM**: React Router DOM is employed for navigation between different pages and components, enabling a single-page application experience.

- **Redux Toolkit**: Redux Toolkit is used for managing the global state of the application, particularly for cart management and user authentication.

- **Payment Integration with Razorpay**: The application integrates Razorpay for processing payments, providing a seamless checkout experience.

- **Login/Signup with JSON Server**: User authentication is handled through a mock API created with JSON Server, allowing users to sign up and log in.

- **Tab Name Change**: Dynamic tab names are implemented to reflect the current page or section, enhancing usability.

- **Mock Data in JSON Server**: Mock data is served using JSON Server, which simulates a real API for development and testing purposes.

- **State Lifting**: State lifting is used to manage shared state between components, ensuring that data flows correctly throughout the application.

- **Search and Sort of Products**: The application includes functionality to search for products and sort them based on various criteria, enhancing user experience.

# Conclusion

This Swiggy clone project demonstrates the use of modern web technologies to build a fully functional food delivery application. It showcases best practices in state management, UI design, and payment integration, making it a valuable resource for developers looking to enhance their skills in React and related technologies. Feel free to explore the code and modify it to suit your needs!

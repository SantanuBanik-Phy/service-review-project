<div align="center">
  <img height="200" src="https://raw.githubusercontent.com/SantanuBanik-Phy/service-review-project/refs/heads/main/src/assets/service-review.png"  />
</div>

# Service Review System



This is a full-stack web application that allows users to review and interact with various services. Users can add services, write reviews, manage their reviews, and explore reviews of services they've added. Built with a focus on user experience and clean design, this platform provides a seamless and intuitive way to navigate and discover services while fostering a vibrant community.

## Live URL

[https://b10-a11.web.app/](https://b10-a11.web.app/)

## Key Features

*  **User Authentication:** Secure user registration and login with email/password and Google authentication powered by Firebase.
*  **Service Management:** Effortless addition, modification, and removal of services with detailed information and images.
*  **Comprehensive Review System:** Write detailed reviews with ratings, facilitating informed decision-making for other users.
*  **Personalized User Dashboard:** A dedicated space for users to manage their added services and submitted reviews.
*  **Dynamic Search and Filter:** Easily find services using keywords and refine results by category for a streamlined search experience.
*  **Interactive Community Forum:** Engage with other users, discuss services, ask questions, and share valuable insights.
*  **Responsive Design:** Seamlessly adapts to various screen sizes, ensuring optimal usability on all devices.
*  **Visually Appealing UI:** Designed with a focus on aesthetics and user-friendliness, incorporating smooth animations and transitions.

## Technologies Used

*  **Frontend:**
    *  React: JavaScript library for building user interfaces.
    *  Tailwind CSS: Utility-first CSS framework for rapid UI development.
    *  DaisyUI: Component library built on top of Tailwind CSS for pre-designed UI elements.
    *  Framer Motion: Animation library for creating smooth transitions and interactive elements.
    *  Axios: Promise-based HTTP client for making API requests.
    *  Firebase Authentication: Secure authentication service provided by Google.
*  **Backend:**
    *  Node.js: JavaScript runtime environment for server-side development.
    *  Express.js: Minimalist web framework for Node.js.
    *  MongoDB: NoSQL database for flexible and scalable data storage.
    *  JWT (JSON Web Token): Industry-standard for secure authentication and authorization.

## NPM Packages Used

*  `axios`: For making HTTP requests.
*  `cors`: For enabling Cross-Origin Resource Sharing.
*  `daisyui`: For UI components.
*  `dotenv`: For loading environment variables.
*  `express`: For building the web server.
*  `firebase`: For authentication.
*  `framer-motion`: For animations.
*  `jsonwebtoken`: For generating JWTs.
*  `mongodb`: For interacting with MongoDB.
*  `react-countup`: For animated counters.
*  `react-helmet`: For managing document head.
*  `react-hook-form`: For form management.
*  `react-photo-view`: For image zoom.
*  `react-rating`: For star ratings.
*  `react-router-dom`: For routing and navigation.
*  `swal2`: For SweetAlert2 modals and notifications.
*  `toastify`: For toast notifications.
*  `tailwindcss`: For styling.

## Installation and Setup

1. Clone the repository: `git clone https://github.com/your-username/service-review-system.git`
2. Install dependencies:
    * Client-side: `cd service-review-client && npm install`
    * Server-side: `cd service-review-server && npm install`
3. Set up environment variables:
    * Create `.env` files in both client and server directories.
    * Add your Firebase config, MongoDB URI, and other sensitive information.
    * **Client-side (.env)**
    ```bash
    REACT_APP_FIREBASE_API_KEY=<Your Firebase API Key>
    REACT_APP_FIREBASE_AUTH_DOMAIN=<Your Firebase Auth Domain>
    REACT_APP_FIREBASE_PROJECT_ID=<Your Firebase Project ID>
    REACT_APP_FIREBASE_STORAGE_BUCKET=<Your Firebase Storage Bucket>
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<Your Firebase Messaging Sender ID>
    REACT_APP_FIREBASE_APP_ID=<Your Firebase App ID>
    ```
4. Run the application:
    * Start the development server (client-side): `npm start`
    * This will start the application in development mode at `http://localhost:3000`.
5. Backend setup:
    * Ensure you have MongoDB running locally or use a cloud-based MongoDB service like MongoDB Atlas.
    * Set up your backend by following the backend-specific instructions in the repository (if applicable).
    * Start the server (server-side): `node index.js`

## Future Improvements

*  Service Categories: Implement service categories for better organization and filtering.
*  Rating System: Enhance the rating system by adding detailed feedback options.
*  User Profiles: Introduce more user profile features for a more personalized experience.
*  Admin Panel: Create an admin panel for managing services and user reviews.

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests.


## Acknowledgments

*  **React:** React is an open-source JavaScript library maintained by Facebook and the community.
*  **Firebase:** Firebase is a platform developed by Google for creating mobile and web applications.
*  **MongoDB:** MongoDB is a NoSQL database that provides high availability and scalability.
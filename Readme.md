TravelMate
TravelMate is a Tour Management System that allows users to explore, book, and review tours. With secure authentication and seamless payment integration, it's the perfect platform for your travel adventures.


#Features:-
Explore Tours: Browse through various tour packages and find the one that suits you.
User Authentication: Sign up, log in, and manage your account securely using JWT-based authentication.
Tour Booking: Book your favorite tours with a few clicks, and pay securely using Stripe.
Reviews & Ratings: Leave feedback on the tours you take and check out reviews from other users.
Admin Dashboard: For tour managers to add, update, or delete tours and view bookings.

#Tech Stack:-
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JWT, bcrypt
Payment: Stripe API
Deployment: Heroku
Setup & Installation

#Prerequisites
Node.js (v12+)
MongoDB (or use MongoDB Atlas)
Stripe API Key (for payment processing)



#Steps to Run the Project
1--Clone the repository:
git clone https://github.com/yourusername/TravelMate.git
cd TravelMate

2--Install dependencies:
npm install

3--Set up your .env file with the necessary environment variables:
JWT_SECRET (Your secret key for JWT authentication)
STRIPE_SECRET_KEY (Your Stripe secret key)
MONGO_URI (Your MongoDB connection URI)

4--Start the server:
npm start
Access the backend at http://localhost:5000 in your browser.

#API Documentation
POST /api/auth/signup - Register a new user
POST /api/auth/login - Log in with credentials
GET /api/tours - Get a list of available tours
GET /api/tours/:id - Get details of a specific tour
POST /api/bookings - Book a tour (requires authentication)
POST /api/reviews - Add a review for a tour (requires authentication)

# TravelMate

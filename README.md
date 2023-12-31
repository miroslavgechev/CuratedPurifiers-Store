# Project Name

#CuratedPurifiers Store

## Description

#CuratedPurifiers is an online store that offers a curated range of indoor air purifiers to enhance the indoor air quality and provide a healthy living environment. The platform allows users to signup and signin, providing a personalized shopping experience. Users can browse through the curated collection of purifiers, view detailed product information, add items to their cart, checkout, and see placed orders.

## Features

- User Authentication: Registration and login functionality for personalized access to the store.
- Product Catalog: A well-curated selection of indoor air purifiers.
- Product Details: Detailed information and specifications and image for each purifier.
- Shopping Cart: Users can add multiple items to their cart and review their selections before checkout.
- Checkout Process: dummy checkout process, ready made for integration with a payment gateway.
- Order History: Users can view a list of all their placed orders with order details.

## Screenshots

- Catalog Page

<img src="./screenshots/catalog.png" width="500" alt="Catalog"> | <img src="./screenshots/catalog-mobile-view.png" height="280" alt="Catalog-mobile-view">

- Product Page

<img src="./screenshots/product.png" width="500" alt="Product"> | <img src="./screenshots/product-mobile-view.png" height="280" alt="Product-mobile-view">

- Cart Page

<img src="./screenshots/cart.png" width="500" alt="Cart"> | <img src="./screenshots/cart-mobile-view.png" height="280" alt="Cart-mobile-view">

## Installation

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Run `ng serve` for a dev server.
4. Navigate to `http://localhost:4200/` in your browser.

5. You can access a running version of the app on this link: https://purifiers.netlify.app

## Technologies Used

- Angular 16
- TypeScript
- HTML/CSS/Responsive Design
- Firebase Realtime Database (with REST API)
- Third-party libraries

# Code Structure

## Auth Module

The `AuthModule` handles authentication-related features in the application.

#### Components

- `SignInComponent`: Responsible for user sign-in functionality.
- `SignUpComponent`: Handles user registration functionality.

#### Services

- `AuthService`: Provides methods for authentication, login, and registration.
- `SignOutService`: Handles user sign-out functionality.

#### Validators

- `EmailValidator`: Custom validator to validate email input.
- `PasswordMatchValidator`: Custom validator to validate password match.

## Core Module

The `CoreModule` contains core components and services used throughout the application.

#### Components

- `FooterComponent`: Renders the footer of the application.
- `HeaderComponent`: Renders the header of the application.
- `PageNotFoundComponent`: Renders the 404 error page.

## Feature Module

The `FeatureModule` contains different features of the application.

#### Components

- `AboutComponent`: Renders information about the application.
- `CartComponent`: Displays the items in the user's shopping cart.
- `CatalogComponent`: Displays the catalog of products available.
- `DetailsComponent`: Displays details of a selected product.
- `ProfileComponent`: Displays user profile information.

#### Services

- `CartDataService`: Manages cart data and operations.
- `OrderDataService`: Manages order data and operations.

#### Directives

- `OnMouseHoverDirective`: Adds functionality on mouse hover.

## Shared Module

The `SharedModule` contains shared components, directives, pipes, and services.

#### Guards

- `AuthGuard`: Protects routes that require authentication.
- `NotAuthGuard`: Protects routes that should not be accessible to authenticated users.

#### Interceptors

- `ApiInterceptor`: Handles HTTP requests and responses.

#### Components

- `LoaderComponent`: Displays a loading indicator during asynchronous operations.
- `LoaderSmallComponent`: A smaller version of the loader component.

#### Pipes

- `ElapsedTimePipe`: Converts a date into elapsed time.

#### Services

- `ApiService`: Handles API calls.
- `GlobalErrorHandlerService`: Handles global error handling.
- `IsCartEmptyService`: Checks if the cart is empty.
- `IsUserLoggedInService`: Checks if the user is logged in.
- `PreviousUrlService`: Keeps track of the previous URL.
- `UtilityService`: Contains utility methods.

#### Constants

- `Constants`: Contains application constants.

## Types

The `Types` folder contains TypeScript type definitions and interfaces used in the application.

## Assets

The `Assets` folder holds static assets like images, fonts, etc.

## CSS

The `CSS` folder contains global CSS files for styling the application.

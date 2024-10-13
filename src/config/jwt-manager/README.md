# ManageJWT Singleton Class

The `ManageJWT` singleton class is a TypeScript class designed to manage JSON Web Tokens (JWT) in a React application. It provides functionality for refreshing access tokens, handling token expiration, and setting up automatic token refresh mechanisms.

## Features

- **Token Refresh:** Automatically refreshes access tokens using the provided refresh token.
- **Token Expiration Handling:** Checks for token expiration and triggers token refresh when necessary.
- **Timeout Management:** Sets up timeouts for refreshing tokens based on expiration times.

## Installation

No specific installation steps are required for the `ManageJWT` class. Simply import and use it in your React application.

```typescript
import JwtManagerSingleton from './path/to/ManageJWT';
```

## Usage

### Initialization

Initialize the ManageJWT instance with an error handler for token refresh failures:

```typescript
JwtManagerSingleton.init({
  onRefreshAccessTokenError: error => {
    console.error('Error refreshing access token:', error);
  },
});
```

### Token Refresh

To manually trigger the token refresh process, you can call the handleRefreshToken() method:

```typescript
JwtManagerSingleton.handleRefreshToken();
```

### Token Expiration Check

The checkAccessToken() method checks if the access token is expired and handles the token refresh process accordingly.

#### Singleton Pattern

The ManageJWT class follows the Singleton design pattern to ensure that only one instance of the class is created throughout the application.

##### Example

```typescript
import JwtManagerSingleton from './path/to/ManageJWT';

// Initialize the ManageJWT instance
JwtManagerSingleton.init({
  onRefreshAccessTokenError: error => {
    console.error('Error refreshing access token:', error);
  },
});

// Manually trigger token refresh
JwtManagerSingleton.handleRefreshToken();
```

# React and Spring Boot Integration

This project demonstrates how to connect a React frontend with a Spring Boot backend. The React app sends an HTTP request to the Spring Boot API and displays the response in the browser. CORS configuration has been set up to allow the frontend to communicate with the backend.

## Features

- React app sends a GET request to the Spring Boot backend.
- Displays a response from the backend on the frontend.
- Handles CORS issues by configuring Spring Boot to allow requests from `http://localhost:3000`.
- Graceful error handling in case of failed API requests.

## Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js**: [Download and install Node.js](https://nodejs.org/).
- **Java 17 or later**: [Download and install Java](https://adoptopenjdk.net/).
- **Maven**: For building and running the Spring Boot project. [Download Maven](https://maven.apache.org/download.cgi).

## Backend Setup (Spring Boot)

1. Clone or download the backend project from the repository.
2. Navigate to the `SpringReactConnect` folder.
3. Ensure the backend dependencies are installed by running:

    ```bash
    mvn clean install
    ```

4. Run the Spring Boot application:

    ```bash
    mvn spring-boot:run
    ```

5. The backend will be available at `http://localhost:8080/api/hello`. Ensure the backend is up and running.

---

## Frontend Setup (React)

1. Navigate to the `react-frontend` folder (or create one using `create-react-app` if not done already).
2. Install necessary dependencies:

    ```bash
    npm install axios
    ```

3. Ensure the frontend is configured to request the backend API at `http://localhost:8080/api/hello`.
4. Start the React app:

    ```bash
    npm start
    ```

5. The React app will be available at `http://localhost:3000`.

---

## CORS Configuration

- The Spring Boot backend is configured to handle CORS by allowing requests from `http://localhost:3000`.
- The backend uses the `@CrossOrigin` annotation on the controller method and has a global CORS configuration.

---

## Troubleshooting

### CORS Error

If you encounter a CORS error, make sure that:
1. The Spring Boot backend has the `@CrossOrigin` annotation or global CORS configuration.
2. The frontend React app is running on `http://localhost:3000`.

### Backend Not Responding

Ensure the Spring Boot server is running on `http://localhost:8080`. You can check this by opening the browser and navigating to `http://localhost:8080/api/hello`.

### Proxy Setup in React (Optional)

If you'd like to avoid manually specifying the backend URL in React, you can set up a proxy in `package.json`:

```json
"proxy": "http://localhost:8080"

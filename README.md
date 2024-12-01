# Drink Manager Project

A full-stack project for managing drink data, built with a **NestJS** backend, a **React Native** mobile app, and a **Core Components** library for shared entities and interfaces.

## Table of Contents
- [Overview](#overview)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Backend (NestJS)](#backend-nestjs)
- [Frontend (React Native)](#frontend-react-native)
- [Core Components](#core-components)
- [License](#license)

---

## Overview

- **Backend**: A NestJS server exposing a GraphQL API for CRUD operations on drink data.
- **Frontend**: A React Native app that lists and displays drink information.
- **Core**: A shared library with common entities and interfaces.

---

## Project Structure

```plaintext
drink-manager/ 
├── backend/ # NestJS GraphQL API 
├── mobile-app/ # React Native application 
└── core/ # Shared entities and interfaces
```

---

## Getting Started

### Prerequisites
- **Node.js** (v14+)
- **npm** or **yarn**
- **React Native CLI** (for mobile app)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/username/drink-manager.git
    cd drink-manager
    ```

2. **Install dependencies:**

    ```bash
    # Backend
    cd backend
    npm install

    # Core
    cd ../core
    npm install

    # Mobile App
    cd ../mobile-app
    npm install
    ```

3. **Run the backend server:**

    ```bash
    cd ../backend
    npm run start:dev
    ```

4. **Run the mobile app:**

    ```bash
    cd ../mobile-app
    npx react-native run-android   # For Android
    npx react-native run-ios       # For iOS
    ```

---

## Backend (NestJS)

### Description
A NestJS application that provides a GraphQL API for managing drink data. It includes endpoints for creating, reading, updating, and deleting drinks.

### Features
- **GraphQL API**: Query and mutate drink data.
- **CRUD Operations**: Fully functional drink management.
- **Validation**: Ensures data integrity with decorators.

### Commands
- **Start development server:**

    ```bash
    npm run start:dev
    ```

- **Access GraphQL Playground:**  
  Visit `http://localhost:3000/graphql`.

---

## Frontend (React Native)

### Description
A cross-platform mobile app built with React Native. It fetches and displays drink data from the backend.

### Features
- **Drink List**: Displays a list of drinks.
- **Detail View**: View more details about each drink.
- **Offline Support** (optional): Cache drink data locally.

### Commands
- **Run on Android:**

    ```bash
    npx react-native run-android
    ```

- **Run on iOS:**

    ```bash
    npx react-native run-ios
    ```

---

## Core Components

### Description
A shared library that includes core entities and interfaces used in both the backend and frontend to ensure consistent types.

### Usage
- **Importing in Backend:**

    ```javascript
    import { Drink } from '../core/entities';
    ```

- **Importing in Frontend:**

    ```javascript
    import { Drink } from '../core/entities';
    ```

### Commands
- **Build core package:**

    ```bash
    npm run build
    ```

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

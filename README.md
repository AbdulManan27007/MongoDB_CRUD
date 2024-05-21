# MongoDB Practice with Express

## Overview

This project demonstrates a basic CRUD application using Node.js, Express, and MongoDB. It allows you to create, read, update, and delete users in a MongoDB database.

## Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/mongodbpractice.git
    cd mongodbpractice
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Ensure MongoDB is running locally on port 27017.

## Usage

- **Start the server:**
    ```sh
    node app.js
    ```
    The server will run on http://localhost:3000.

- **Endpoints:**
    - Create a user: `GET /create`
    - Read all users: `GET /read`
    - Update a user: `GET /update`
    - Delete a user: `GET /delete`

## Examples

### Create a User

Navigate to `http://localhost:3000/create` to create a user with:
- Name: Awais
- Email: awais@gmail.com
- Username: awais

### Read Users

Navigate to `http://localhost:3000/read` to view all users.

### Update a User

Navigate to `http://localhost:3000/update` to update a user with username `abdulmanan4066` to name `Abdul Manan Ilyas`.

### Delete a User

Navigate to `http://localhost:3000/delete` to delete the user with username `awais`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

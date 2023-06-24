# CSES Web Dev Set Up Guide

1. Download [Node](https://nodejs.org/en) and npm if you don't have them (run `node -v` and `npm -v` to check).
2. Clone the repository on the `main` branch and open the project in VSCode.
3. Install VSCode extensions Eslint and Prettier (for linting and formatting).

## FrontEnd

3. Go to the `project/frontend` directory.
4. Run `npm install` to install all the node packages.
5. Run `npm start` to run the React App and check if you can see the rendered site at http://localhost:3000/

## BackEnd

6. Go to the `project/backend` directory.
7. Run `npm install` to install all the node packages.
8. Run `npm start` to start the backend server and check there is no error in the terminal.
9. Make a copy of the `.env.example` file and rename it `.env`.

## Development

- Prior to any local development, you should pull the latest code from `main` and work on your separate branch.
- Your branch name should be in the format: `(feature/bug)/github_username/(FE/BE)-feature_name`.
- An example of a good branch name: `feature/Will-Hsu/FE-Buttons` or `bug/Will-Hsu/FE-ButtonsDebug`.

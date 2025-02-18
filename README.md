# CSES Web Dev Set Up Guide

1. Download [Node](https://nodejs.org/en) and npm if you don't have them (run `node -v` and `npm -v` to check).
2. Clone the repository on the `main` branch and open the project in VSCode.
3. Install VSCode extensions Eslint and Prettier (for linting and formatting).

## Add .env files
4. Ask Nikhil or Sithu for the contents of these files, which you will add to your local repository.

## BackEnd

5. Go to the `project/backend` directory.
6. Run `npm install` to install all the node packages.
7. Run `npm start` to start the backend server and check there is no error in the terminal.

## FrontEnd

8. Go to the `project/frontend` directory.
9. Run `npm install` to install all the node packages.
10. Run `npm start` to run the React App and check if you can see the rendered site at http://localhost:3000/

## Development

- Prior to any local development, you should pull the latest code from `main` and work on your separate branch.
- Your branch name should be in the format: `(feature/bug)/github_username/(FE/BE)-feature_name`.
- An example of a good branch name: `feature/Will-Hsu/FE-Buttons` or `bug/Will-Hsu/FE-ButtonsDebug`.

## Concept

This is my portfolio.

## Backlog
- En tant qu’administrateur, je souhaite stocker les informations de mes projets et mon compte dans une base de donnée → US_dataBase
- En tant qu’administrateur, je souhaite pouvoir modifier mes projects → US_projectMVC
- En tant qu’administrateur, je souhaite pouvoir m’authentifier afin de les modifier via le front → US_adminMVC
- En tant qu’utilisateur, je souhaite naviguer efficacement entre les pages → US_navBar
- En tant qu’utilisateur, je souhaite être bien accueilli → US_Home
- En tant qu’utilisateur, je souhaite pouvoir visualiser les projets → US_projects
- En tant qu’utilisateur, je souhaite pouvoir m’informer sur la créatrice de ces projets → US_aboutMe
- En tant qu’administrateur, je souhaite pouvoir ajouter, modifier & supprimer un projet → US_adminBoard

## Setup & Use

### Project Initialization

- In VSCode, install plugins **Prettier - Code formatter** and **ESLint** and configure them
- Clone this repo, enter it
- Run command `npm run setup`
- _NB: To launch the backend server, you'll need an environment file with database credentials. You'll find a template one in `backend/.env.sample`_

### Available Commands

- `setup` : Initialization of frontend and backend, as well as all toolings
- `migrate` : Run the database migration script
- `dev` : Starts both servers (frontend + backend) in one terminal
- `dev-front` : Starts the React frontend server
- `dev-back` : Starts the Express backend server
- `lint` : Runs validation tools, and refuses unclean code (will be executed on every _commit_)
- `fix` : Fixes linter errors (run it if `lint` growls on your code !)

## FAQ

### Tools

- _Concurrently_ : Allows for several commands to run concurrently in the same CLI
- _Husky_ : Allows to execute specific commands that trigger on _git_ events
- _Vite_ : Alternative to _Create-React-App_, packaging less tools for a more fluid experience
- _ESLint_ : "Quality of code" tool, ensures chosen rules will be enforced
- _Prettier_ : "Quality of code" tool as well, focuses on the styleguide
- _ Airbnb Standard_ : One of the most known "standards", even though it's not officially linked to ES/JS
- _Nodemon_ : Allows to restart the server everytime a .js file is udated

# To-Do List

## To start this project

Clone repo Tab:

```sh
git clone https://github.com/sabbirchowdhury12/node-js-to-do-list.git
```

open the code editor (vs code)

```sh
npm i
```

Inital setup (You can change your port and database connection)

```sh
port = 5000
MONGO_URL = "mongodb://127.0.0.1:27017/todo-list"
```

To run the project

```sh
npm start
```

Server running on

```sh
http://localhost:5000/
```

## APIS

| TASK          | APIS                                              |
| ------------- | ------------------------------------------------- |
| Base Api      | http://localhost:5000/ (if port = 5000)           |
| Add Task      | http://localhost:5000/task ( POST )               |
| Get All Task  | http://localhost:5000/task ( GET )                |
| Update Task   | http://localhost:5000/task/:id ( PATCH )          |
| Delete Task   | http://localhost:5000/task/:id ( DELETE )         |
| Complete Task | http://localhost:5000/task/complete/:id ( PATCH ) |

### Task Data

```sh
  "title": "Home Work",
  "description": "lorem ipsum lorem ipsum lorem ipsum"
```

## Technologies

- Express
- MongoDb

## Code Structure

- index.js ( main file where the app is running. And also connect mongodb database)
- model --> taskModel.js ( create a schema for task )
- router --> taskToutes.js ( apis endpoint for task )
- controller --> taskController.js ( code all functionality of task )

## Key decisions / My work flow

- set up projects with express and mongodb
- create file and structure it.
- create github repository and connect it
- create a schema for task
- make routes for task
- implement the funtionality of the task
- error handling
- clean code
- testing

I started the project and divided the project into some parts. And I complete these parts one after another.

In this post, we'll take a look at building an API using the AdonisJS framework. We'll specifically be looking at the [AdonisJS v5 Release Preview](https://preview.adonisjs.com/) and how we can create a simple REST API that handles some CRUD operations on a  Database

Because we're going to be creating a REST API, you should have some experience making HTTP Requests, for our purposes we can use a website called [Postwoman](https://postwoman.io/) to interact with our API, but you can also use any other tool you prefer

# About AdonisJS

AdonisJS is an opinionated, Typescript-first web framework that provides a lot more "out of the box" functionality than the traditional framework or library in the Node.js ecosystem and is more comparable to something like .NET's WebAPI or MVC Framework than things like Express or Next in Node.js

Some of the built-in features and decisions that stand out for me are:

- First-class Typescript support
- Class-based controllers
- Class-Based SQL ORM
- Dependency Injection
- Request Body Validation
- Authentication
- Server-side View Rendering

There are a lot more features, and it would be impractical for me to talk about all of them in a single post. Overall, the framework seems to be very complete at this point

# Prerequisites

We'll be using a Node.js and a SQL Database for this post, so if you're going to follow along with this post you will need to have a couple of things installed:

- [Node.js and NPM](http://nodejs.org/)
- Any Supported SQL Database:
	- MySQL
	- SQLite
	- Microsoft SQL Server
	- PostgreSQL
	- MariaDB
	- OracleDB	

Alternatively, you can run a Docker image for the database which may be easier, I'll be using Postgres via Docker with VSCode

> To learn more about VSCode Dev Containers you can look at [my previous post](/blog/2020/25-07/developing-in-a-container-vscode/) on how to use Dev Containers

# Initialize an Application

Now that we've got all our necessary dependencies installed, we can initialize an application using the `npm init` command:

> During the initialization the CLI will ask you what type of project to initialize, be sure to select `API Server`

```bash
npm init adonis-ts-app my-api
```

The above command is made up of the following parts:

1. `npm init` which is the npm command that will run an initialization script from the provided package
2. `adonis-ts-app` which is the package to be used for initialization
3. `my-api` is the name of the folder/project we want to create

Once the project has been configured, navigate into the project directory:

```bash
cd my-api
```

And start the app:

```bash
npm start
```

# The Ace CLI

AdonisJS makes use of a command-line application called `ace`, `ace` can be used to do common tasks as well as custom tasks that we define. By default, it can scaffold controllers, commands, and a bunch of other things as well as run and build an AdonisJS application

# Environment Variables

AdonisJS Makes use of Environment Variables do set the application configuration, in your generated files you should see a file named `.env`, this file contains the environment variables used by the application. Looking at this file will give us an idea of our current configuration:

`.env`

```bash
PORT=3333
HOST=0.0.0.0
NODE_ENV=development
APP_KEY=mE8zN8V_7PzazKfv9_ds-8CGjVRLA2wo
```

At the moment, we can see that our application will be listening on host `0.0.0.0` and port `3333`, this means that we can access our application from our browser at `http://localhost:3333`

If we open this page on our browser we will see the adonis logs kicked off in our command line, something like this:

```bash
ℹ  info      cleaning up build directory build
ℹ  info      copy .env,ace build
☐  pending   compiling typescript source files
✔  success   built successfully
ℹ  info      copy .adonisrc.json build
…  watch     watching file system for changes
ℹ  info      starting http server
✔  create    ace-manifest.json
[1595755199986] INFO  (my-app/1531 on 47f057d8722c): started server on 0.0.0.0:3333
```

The first request may take some time, this is because the server is still starting itself up. In the meantime, however, let's discuss how we'll be accessing our API

# Making Requests

> You will need to use [Postwoman](https://postwoman.io/) or something similar when making requests

Now that our application is running, we can start making requests to our API. By default, AdonisJS sets up a `hello-world` route at the base of our application (the `/` route`)

We can reach this endpoint by simply making a `GET` request to `http://localhost:3333` which will return the following:

```json
{
  "hello": "world"
}
```

AdonisJS can define routes using a method similar to libraries like Express.js, the "Hello World" route is defined in the `start/routes.ts` file and has the following:

`routes.ts`

 ```ts
import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})
```

The `Route.get` portion states that this is a `GET` route on the `/` path with an `async` handler function that returns an object

However, for this post, we won't be defining our route's handler functions like this. We're going to make use of `controllers`

# Controllers

AdonisJS uses `controllers` to structure our API. This makes use of a `class` which contains functions intended to work as an interface between the HTTP request and the work we want to do via a `provider`

We will simply state which `controller` and `method` we want to use in our `routes.ts` file instead of containing all the handler logic in that file

To generate a controller we can use `ace`. We will use `ace` to create a `UsersContoller`.

First, stop your running application with `ctrl + c` in the terminal, then use the following `ace` command to generate a `User` `controller`:

```bash
node ace make:controller User
```

This will generate an `app/Controllers/Http/UsersController.ts` file with the following contents:

`UsersController.ts`

```ts
export default class UsersController {
}
```

Which exports a class called `UsersController` with no default functionality

We can create any functions inside of here that we want to, and then map these functions to routes. For now, let's add a `get` function that will put some placeholder data into. We'll update this later to use our database

A few things to note about the function we're going to create:

- The function is asynchronous, so if there are any long-running operations it won't block other things from running
- The name of the function is `get` and it has no parameters
- The function returns an array of objects that represents a `User`

`UsersController.ts`

```ts
export default class UsersController {
    public async get() {
        return [
            {
                id: 1,
                name: "Bob Smith",
                email: "bob@smithmail.com"
            }
        ]
    }
}

```

Now that we have defined our function, we can add a `route` that will cause this function to be called. We do this by adding the following in the `routes.ts` file:

```ts
Route.get('users', 'UsersController.get')
```

We can then run `npm start` from the command line and make a `GET` request to `http://localhost:3333/users` which should return our user:

```json
[
  {
    "id": 1,
    "name": "Bob Smith",
    "email": "bob@smithmail.com"
  }
]
```

# Database

Now that we've got some basic understanding of how AdonisJS maps routes to functionality, we can connect our application to a Database

To add database functionality, we first want to install the `adonisjs/lucid` package to our application. Behind the scenes, AdonisJS makes use of `Lucid` for connecting to and working with databases

```bash
npm i @adonisjs/lucid@alpha
```

And then run the following command to initialize it:

```bash
node ace invoke @adonisjs/lucid
```

Which should give the following output:

```
   create    config/database.ts
   update    .env
   update    tsconfig.json { types += @adonisjs/lucid }
   update    .adonisrc.json { commands += @adonisjs/lucid/build/commands }
   update    .adonisrc.json { providers += @adonisjs/lucid } 
✔  create    ace-manifest.json
```

If you open your `.env` file you will see the configuration for a `sqlite` database

`.env`

```bash
# ... other config
DB_CONNECTION=sqlite
DB_HOST=127.0.0.1
DB_USER=lucid
DB_PASSWORD=lucid
DB_NAME=lucid
```

You can follow the general database setup information on the [AdonisJS Docs](https://preview.adonisjs.com/guides/database/setup) to set yours up, but I'll be using Postgres as I've mentioned before

To use Postgress, you need to install the `pg` package from npm:

```bash
npm i pg
```

Then configure your application to use Postgres. We will first update our `.env` file to have our database credentials:

`.env`

```bash
DB_CONNECTION=pg
DB_HOST=db
DB_USER=user
DB_PASSWORD=pass
DB_NAME=data
DB_PORT=5432
```

Once you've configured your database connection information in the `.env` file, our database connection information will be taken care of by AdonisJS

These environment variables are used in the `config/database.ts` file, we can see them in the `pg` part of the file

`database.ts`

```ts
  ...
    pg: {
      client: 'pg',
      connection: {
        host: Env.get('DB_HOST', '127.0.0.1') as string,
        port: Number(Env.get('DB_PORT', 5432)),
        user: Env.get('DB_USER', 'lucid') as string,
        password: Env.get('DB_PASSWORD', 'lucid') as string,
        database: Env.get('DB_NAME', 'lucid') as string,
      },
      healthCheck: true,
    },
  ...
```

In the `database.ts` file above, look for the section for your relevant database, and set the `healthCheck` property to `true`

Now that we've set things up, we can create a health-check route that will enable us to view the current status of our database connection. We will add a handler for this in the `routes.ts` file:

```ts
import HealthCheck from '@ioc:Adonis/Core/HealthCheck'
// ... existing file content

Route.get('health', async ({ response }) => {
  const report = await HealthCheck.getReport()
  return report.healthy ? response.ok(report) : response.badRequest(report)
})
```

Once you've done all the above, start the development server again with `npm start`

Then make a `GET` request to `http://localhost:3333/health` to view your health-check information

```json
{
  "healthy": true,
  "report": {
    "env": {
      "displayName": "Node Env Check",
      "health": {
        "healthy": true
      }
    },
    "appKey": {
      "displayName": "App Key Check",
      "health": {
        "healthy": true
      }
    },
    "lucid": {
      "displayName": "Database",
      "health": {
        "healthy": true,
        "message": "All connections are healthy"
      },
      "meta": [
        {
          "connection": "pg",
          "message": "Connection is healthy",
          "error": null
        }
      ]
    }
  }
}
```

In the `lucid` section we will see if our database connection is working or any applicable error information.

# Defining Models

Once we've configured our database, we will want to interact with the data in it. Lucid makes use of `models` essentially as proxies for database tables. We can generate a `model` for our `User` with `ace` as follows:

> Stop your development server with `ctrl + c` before running this:

```bash
node ace make:model User
```

The above script will have generated a `User` model class in the `app/Models/User.ts` file that extends `BaseModel`. All models must do this. The generated `User.ts` file looks like this:

`User.ts`

```ts
import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
```

Note the `@column` decorators, these are used to map columns in our database to our model fields. We'll add a field for our user's `name` and `email` as follows:

`User.ts`

```ts
export default class User extends BaseModel {
 // ... other stuff in class
  @column()
  public name: String
  
  @column()
  public email: String
}
```

> Any properties or methods defined in a class without the `@column` decorator will not be mapped to the database, we can just use these as normal functions in the class and implement utilities from them

# Migrating the Database

At this point, our database does not contain a `user` table, which will be used to store our data for the `User` model. We need to create a Database Migration which will add the required table and fields.

`ace` provides us with a method to scaffold a migration file. To create this file we will run the following command:

```bash
node ace make:migration users
```

Which will have created a `database/migrations/SOME_ID_users.ts` file with the following:

`*_users.ts`

```ts
import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
```

The generated file (above) contains an `up` function which will create a `users` table with an `id` as well as `createdAt` and `updatedAt` fields.  We will need to modify the `up` function to add our new fields as well:

```ts
export default class Users extends BaseSchema {
  ...
  
  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamps(true)

      // our added fields
      table.string('name').notNullable()
      table.string('email').unique().notNullable()
    })
  }
  
  ...
```

Once we've defined our migration script we can run the migration using `ace` as follows:

```bash
node ace migration:run
```

> If there is an error in a migration script, we can rollback the migration with `node ace migration:rollback`


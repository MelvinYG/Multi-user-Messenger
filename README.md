# Multi-user-Messenger

This is a full stack chat-application made using **Node** and **Express** for backend, **React** and **Tailwind CSS** for frontend, **PostgreSQL** with **Drizzle ORM** for database management, and **Socket.io** for real-time chat and other features.

## Local Setup
``` git clone https://github.com/MelvinYG/Multi-user-Messenger.git ```

* Backend setup
``` cd server```

Then, run ``` npm install``` to install all dependencies and connect to your local PostgreSQL database with Drizzle ORM

Then, run migration by running command:

```npm run db:generate```
Then, push migration data to actuarial local database by running command:

```npm run db:migrate```

After that, run server:
```nodemon index.js```

* Frontend setup
Open a new terminal

Then, ``` cd client ```

``` npm install ```

Then, run the dev server,

``` npm run dev ``` (hosted at port 5173)


## User Interface:

![image](https://github.com/user-attachments/assets/8ee62cf5-3005-4485-ba8c-fdca9507137c)

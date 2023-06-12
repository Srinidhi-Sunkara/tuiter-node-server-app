import express from 'express'
import cors from 'cors'
import session from "express-session";


import HelloController from "./controllers/hello-controller.js"
import UserController from "./users/users-controller.js"
import TuitsController from "./controllers/tuits/tuits-controller.js";
import AuthController from "./users/auth-controller.js";


const app = express()

const allowedOrigins = [
  'http://localhost:3000',
  'https://tuiter-node-server-app-k5pw.onrender.com/'
];

// app.use(cors())
app.use(
    cors({
      credentials: true,
      origin: allowedOrigins,
    })
   );

app.use(
session({
    secret: "any string",
    resave: false,
    saveUninitialized: true,
})
);

   
app.use(express.json());


TuitsController(app);
HelloController(app);
UserController(app);
AuthController(app);

// app.listen(4000)
app.listen(process.env.PORT || 4000);
const express = require('express');
const signInRouter = require('./routes/signIn');
const verifyToken = require('./middlewares/verifyToken');

const app = express();

app.use("/auth/verify", verifyToken);
app.use("/auth", signInRouter);

app.listen(4242, console.log("Server is listening at 4242 port"));
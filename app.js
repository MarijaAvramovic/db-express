const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
 
const usersRouter = require("./routes/users");
app.use("/", usersRouter);

app.listen(3000, () => console.log("Server running"));
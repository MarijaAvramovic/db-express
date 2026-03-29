const db = require("../db/queries");

exports.getUsers = async (req, res) => {
  const users = await db.getAllUsernames();
   console.log(users);
res.render("index", { title: "Users List", users });


};

// GET /new
exports.createUserGet = (req, res) => {
  res.render("form", { title: "Add User" });
};

// POST /new
exports.createUserPost = async (req, res) => {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
};
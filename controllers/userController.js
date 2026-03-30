const db = require("../db/queries");


exports.getUsers = async (req, res) => {
 
  const users = await db.getAllUsernames();
   console.log(users);

  const searchQuery = req.query.username || null;
  const searchResults = await db.searchUser(searchQuery);

  console.log(searchResults);
res.render("index", { title: "Users List", users, searchResults });


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
 
exports.deleteUsers = async (req, res) => {
  await db.deleteUsers();
  res.redirect("/");
};
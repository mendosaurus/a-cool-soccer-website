const mongoose = require("mongoose");
const User = require("../models/user");

const dbName = "soccer-website";
mongoose.connect(`mongodb://localhost/${dbName}`);

const users = [
  {
    name: "taro",
    password: "taro"
  },
  {
    name: "max",
    password: "max"
  }
];

User.create(users, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${users.length} users`);
  mongoose.connection.close();
});

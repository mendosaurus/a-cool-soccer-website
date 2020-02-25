const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: String,
    password: String
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

router.get("/users/add", (req, res, next) => {
  res.render("book-add");
});

const User = mongoose.model("User", userSchema);

module.exports = User;

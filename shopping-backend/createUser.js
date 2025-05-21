const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User");

mongoose.connect("mongodb://127.0.0.1:27017/myshop_login");

async function createUser() {
  const hashedPassword = await bcrypt.hash("09032006KDob", 10);
  const newUser = new User({
    email: "test3@gmail.com",
    password: hashedPassword,
  });

  await newUser.save();
  console.log("✅ User created");
  mongoose.disconnect();
}

createUser();


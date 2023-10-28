const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String, //-> toplama çıkarma yapmayacağımız için değeri number olarak almamıza gerek yok.
      require: true,
    },
  },
  { timestamps: true } //-> oluşturduğu zamanı otomatik not alır
);

// UserSchema.methods.createAuthToken = function () {
//   return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
//     expiresIn: "5d",
//   });
// };

const User = mongoose.model("users", UserSchema);

module.exports = User;

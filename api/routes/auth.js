const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");

//register
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Gelen E-Postda adresi başka kullanıcı tarafından kullanılıyor mu kontrolü
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json("Bu e-posta adresi zaten kullanılıyor.");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    // const token = user.createAuthToken() //models içinde oluşturduğumuz methodu çağırıyoruz. !!GELEN user özerinden methodu çağırıyoruz.
    // res.header("x-auth-token" , token ).status(200).json("A new user created successfully"); 
    res.status(200).json("A new user created successfully"); 

  } catch (error) { 
    res.status(500).json(error);
  }
});

//login
router.post("/login" ,async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json("User not found");
    }
    const validatePassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validatePassword) {
      return res.status(403).json("Invalid Password");
    }

    // const token = user.createAuthToken() //models içinde oluşturduğumuz methodu çağırıyoruz.
    res.status(200).json({user}); //-> !! burda süslü parentez kullanmasak direk cath bloğuna atacaktı
  
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;

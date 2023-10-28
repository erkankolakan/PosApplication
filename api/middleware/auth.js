// const jwt = require("jsonwebtoken")


// module.exports = (req, res, next) => {
//     const token = req.header("x-auth-token")
//     if (!token) {
//         res.status(401).json("yetkiniz yok")
//         res.redirect('/login')
//     }

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET) //-> token bilgisini çözüyoruz, çözdüğümüz token ile payload bilgisi geliyor. yani bizim jwt tokende sakladığımız bilgiler.
//         req.user = decoded
//     } catch (error) {
//         res.status(500).json("hatalı token")
//     }

//     next()
// }
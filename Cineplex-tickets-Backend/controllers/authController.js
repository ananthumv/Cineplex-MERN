const jwt = require("jsonwebtoken");

var jwtSecret = "mysecrettoken";

module.exports = function (req, res, next) {
	//Get token from header
	const token = req.header("x-auth-token");

	//Check if there is no token in the header
	if (!token) {
		return res.status(401).json({ msg: "No token, authorization denied" });
	}

	//Verify token
	try {
		const decoded = jwt.verify(token, jwtSecret);
		req.user = decoded.user;
		next();
	} catch (err) {
		res.status(401).json({ msg: "Token is not valid" });
	}
};




// const jwt = require("jsonwebtoken");

// async function verifyToken(req, res, next) {
//   console.log(req.cookies);

//   console.log("verify route called");

//   const authHeader = req.headers["authorization"];

//   let token = null;

//   if (authHeader) {
//     const authHeaderToArray = authHeader.split(" ");

//     token = authHeaderToArray[1];
//   }
//   console.log(token)

//   if (token == null) return res.sendStatus(401);

//   jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {

//     // console.log(err);
//     console.log(err);

//     if (err) return res.sendStatus(403);

//     req.user = user;
//     next();
//   });
// }

// // module.exports = verifyToken;

// // function roleCheck(req, res, next) {
// //   console.log(req.user)
// //   if (req.user.role === "admin") {
// //     next();
// //   } else {
// //     res.status(403).send("forbidden");
// //   }
// // }

// module.exports = {
//   verifyToken
// //   ,
// //   roleCheck,
// };


const express = require('express')
const router = express.Router()
const User = require('../models/user')
const { check, validationResult } = require("express-validator");
// const {verifyToken, roleCheck} = require("../controllers/authController");
const verifyToken = require("../controllers/authController");


const bcrypt = require("bcrypt");
const saltRounds = 10;

const jwt = require("jsonwebtoken");

var jwtSecret = "mysecrettoken"


// router.get("/", verifyToken, roleCheck, async (req, res) => {
//     try {
//       const users = await User.find();
//       res.json(users);
//     } catch (err) {
//       res.send("Error " + err);
//     }
//   });
router.get("/",  async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.send("Error " + err);
    }
  });
  

//   router.get("/:id",  async (req, res) => {
//     try {
//       const users = await User.findById(req.params.id);
//       res.json(users);
//     } catch (err) {
//       res.send("Error " + err);
//     }
//   });



  router.get("/profile", verifyToken, async (req, res) => {
    try {
      const user = await User.findById(req.user.id);
      res.json(user);
    } catch (err) {
      res.send("Error ");
    }
  });



router.post('/',
[
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
        "number",
        "Please include a valid number"
    ).isLength({ min: 10, max: 12}),
    check(
        "password",
        "Please enter password with 6 or more characters"
    ).isLength({ min: 6 }),
], 

async(req,res) => {
    const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
    const { name, email,number, password } = req.body
    // const user = new User({
    //     name: req.body.name,
    //     email: req.body.email,
    //     number: req.body.number,
    //     password: req.body.password,
    //     seatsSelected: req.body.seatsSelected
    // })
    try{
        let user = await User.findOne({ email });
			if (user) {
				res.status(400).json({ errors: [{ msg: "User already exists" }] });
			}
            user = new User({
                name,
                email,
                number,
                password
            })
            user.password = await bcrypt.hash(password, saltRounds)
			await user.save();
            const payload = {
				user: {
                    email: user.email,
					id: user.id
				},
			};

			jwt.sign(payload, jwtSecret, { expiresIn: "1800s" }, (err, token) => {
				if (err) throw err;
				res.json({ token });
			})


            // user = new User({
			// 	name,
			// 	email,
			// 	password,
			// });

        // const a1 = await user.save()
        // console.log(a1)
        // res.json(a1)
    }catch(err){
        console.error(err.message);
		res.status(500).send("Signup Failed");
    }
})


router.get("/login", verifyToken, async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select("password");
		res.json(user);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});


router.post("/login",
    [
        check("email", "Please include a valid email").isEmail(),
        check("password", "Password is required").exists(),
    ],
    async (req, res) => {
        const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
        const { email, password } = req.body;


        try {
            let user = await User.findOne({ email });

			if (!user) {
				return res
					.status(400)
					.json({ errors: [{ msg: "Invalid Credentials" }] });
			}

			const isMatch = await bcrypt.compare(password, user.password);

			if (!isMatch) {
				return res
					.status(400)
					.json({ errors: [{ msg: "Invalid Credentials" }] });
			}

			//Return jsonwebtoken
			const payload = {
				user: {
                    email: user.email,
					id: user.id
				},
			};

			jwt.sign(payload, jwtSecret, { expiresIn: "1800s" }, (err, token) => {
				if (err) throw err;
				res.json({ token });
			});
        } catch (err) {
            res.status(404).send("login Failed");
            console.log(err);
        }
  });
  



module.exports = router
import UsersModel from "../models/users.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const ADD_USER = async (req, res) => {
  try {
    //randomaiseris pagal kurį password bus heshinamas
    const salt = bcryptjs.genSaltSync(10);

    const hash = bcryptjs.hashSync(req.body.password, salt);

    const user = new UsersModel({
      fullName: req.body.fullName,
      email: req.body.email,
      password: hash,
    });

    const response = await user.save();

    res.status(201).json({ message: "user was added", response: response });
  } catch (err) {
    console.error("ERROR: ", err);
    res.status(500).json({ response: "Something went wrong!" });
  }
};

const LOGIN = async (req, res) => {
  try {
    const user = await UsersModel.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ message: "Bad email or password" });
    }

    const isPasswordMach = bcryptjs.compareSync(
      req.body.password,
      user.password
    );
    if (!isPasswordMach) {
      return res.status(401).json({ message: "Bad email or password" });
    }

    //autenfikacijos raktas
    const token = jwt.sign(
      { email: user.email, usesId: user._id },
      // eslint-disable-next-line no-undef
      process.env.JWT_SECRET,
      { expiresIn: "365d" }
    );

    res.status(200).json({ message: "Log ok", token: token });
  } catch (err) {
    console.error("ERROR: ", err);
    res.status(500).json({ response: "Something went wrong!" });
  }
};

export { ADD_USER, LOGIN };

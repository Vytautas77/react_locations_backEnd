import jwt from "jsonwebtoken";

const authenticateUser = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Bad auth" });
  }
  // eslint-disable-next-line no-undef
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Bad auth" });
    }
    req.body.userId = decoded.usesId;
  });
  return next();
};

export default authenticateUser;

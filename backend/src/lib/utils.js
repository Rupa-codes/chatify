import jwt from "jsonwebtoken";
import { ENV } from "./env.js";
export const generateToken = (userId, res) => {
 
  const token = jwt.sign({ userId }, ENV.JWT_SECRET, {
    expiresIn: "7d",
  });

  // res.cookie("jwt", token, {
  //   maxAge: 7 * 24 * 60 * 60 * 1000, // MS
  //   httpOnly: true, // prevent XSS attacks: cross-site scripting
  //   sameSite: "strict", // CSRF attacks
  //   secure: ENV.NODE_ENV === "development" ? false : true,
  // });
res.cookie("jwt", token, {
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  httpOnly: true,
  secure: ENV.NODE_ENV === "production", // true on Render
  sameSite: "none", // allow cross-site cookie
});

  return token;
};

// http://localhost
// https://dsmakmk.com
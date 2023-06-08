import { sign, verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "token.01";

const generateToken = (id: string) => {
  const jwt = sign({ id }, JWT_SECRET, {
    expiresIn: "1h"
  });

  return jwt;
};

const verifyToken = (jwt: string) => {
  const tokenIsValid = verify(jwt, JWT_SECRET);
  return tokenIsValid;
};

export { generateToken, verifyToken };

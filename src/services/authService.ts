import prisma from "../config/prisma";
import type Auth from "../interfaces/auth.interface";
import { encrypt, verified } from "../utils/bcrypt.handle";

const createUser = async (userData: Auth): Promise<User> => {
  const existingEmails = await prisma.users.findMany({
    select: {
      email: true
    }
  });

  const emailExists = existingEmails.some(
    (user) => user.email === userData.email
  );

  if (emailExists) {
    return "El email ya está registrado en la base de datos";
  }
  const passHash = await encrypt(userData.password);
  const createdUser = await prisma.users.create({
    data: {
      email: userData.email,
      username: userData.username,
      password: passHash
    }
  });

  return createdUser;
};

const loginUser = async (email, password) => {
  const checkUser = await prisma.users.findFirst({
    where: {
      email
    }
  });

  if (checkUser == null) {
    return { false: "User not found" };
  }

  const passwordHash = checkUser.password;
  const isCorrect = await verified(password, passwordHash);

  if (!isCorrect) {
    return { false: "Incorrect password " };
  }

  return checkUser;
};

export { createUser, loginUser };

import prisma from "../config/prisma";
import type Auth from "../interfaces/auth.interface";

export const createUser = async (userData: Auth): Promise<User> => {
  const existingEmails = await prisma.users.findMany({
    select: {
      email: true
    }
  });

  const emailExists = existingEmails.some(
    (user) => user.email === userData.email
  );

  if (emailExists) {
    console.log("El email ya está registrado en la base de datos");
    throw new Error("El email ya está registrado en la base de datos");
  }

  const createdUser = await prisma.users.create({
    data: {
      email: userData.email,
      username: userData.username,
      password: userData.password
    }
  });

  console.log("Usuario creado", createdUser);
  return createdUser;
};

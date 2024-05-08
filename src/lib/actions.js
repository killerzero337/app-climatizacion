"use server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { signIn, signOut } from "@/auth";
import { getUserByEmail } from "@/lib/data";

// REGISTER
export async function register(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  console.log(email);
  // Comprobamos si el usuario ya está registrado
  const user = await getUserByEmail(email);

  if (user) {
    return { error: "El email ya está registrado" };
  }

  // Encriptamos password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Guardamos credenciales en base datos
  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return { success: "Registro correcto" };
}

// LOGIN credentials
export async function login(formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  // Comprobamos si el usuario está registrado
  const user = await getUserByEmail(email);

  if (!user) {
    return { error: "Usuario no registrado." };
  }

  // Comparamos password
  const matchPassword = await bcrypt.compare(password, user.password);

  if (user && matchPassword) {
    // && user.emailVerified
    await signIn("credentials", { email, password, redirectTo: "/auth/logout" });
    // return { success: "Inicio de sesión correcto" }
  } else {
    return { error: "Credenciales incorrectas." };
  }
}

// LOGIN google
export async function loginGoogle() {
  try {
    await signIn("google", { redirectTo: "/auth/logout" });
  } catch (error) {
    throw error;
  }
}

// LOGOUT
export async function logout() {
  try {
    await signOut({ redirectTo: "/" });
  } catch (error) {
    throw error;
  }
}

"use server";

import { login, signUp } from "@/services/auth.service";
import { User } from "@/types";
import { redirect } from "next/navigation";

const userLogin = async (
  prevState: { errors: string[] },
  formData: FormData
) => {
  const email = formData.get("email")?.toString() || "";
  const password = formData.get("password")?.toString() || "";
  const errors: string[] = [];

  if (!password.length) {
    errors.push("The password should not be empty");
  }
  const user: User = {
    email,
    password,
  };
  const result = await login(user);
  if (result.statusCode == 404) {
    errors.push("This user not exist on our system");
  }
  if (result.statusCode == 401) {
    errors.push(result.response.error);
  }

  if (errors.length) {
    return {
      errors,
    };
  }

  redirect(`/dashboard`);
};

const newSignUp = async (
  prevState: { errors: string[] },
  formData: FormData
) => {
  const email = formData.get("email")?.toString() || "";
  const password = formData.get("password")?.toString() || "";
  const errors: string[] = [];

  if (!password.length) {
    errors.push("The password should not be empty");
  }
  const user: User = {
    email,
    password,
  };
  const result = await signUp(user);
  if (result.statusCode == 400) {
    errors.push(...(Object.values(result.response.error).flat() as string[]));
  }
  if (result.statusCode == 409) {
    errors.push(result.response.error);
  }

  if (errors.length) {
    return {
      errors,
    };
  }

  redirect(`/dashboard`);
};

export { newSignUp, userLogin };

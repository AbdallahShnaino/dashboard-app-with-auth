import { User } from "@/types";
import { cookies } from "next/headers";

interface IResponse {
  statusCode: number;
  response: any;
}
async function postData(url: string, data: User) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const responseData = await response.json(); // Parse JSON response
  return { status: response.status, data: responseData }; // Return status and data
}

export async function signUp(user: User) {
  const response = await postData("http://127.0.0.1:5000/api/auth/signup", {
    email: user.email,
    password: user.password,
  });
  (await cookies()).set("session-key", response.data.access_token, {
    httpOnly: true,
  });
  return {
    statusCode: response.status,
    response: response.data,
  };
}

export async function login(user: User): Promise<IResponse> {
  const response = await postData("http://127.0.0.1:5000/api/auth/login", {
    email: user.email,
    password: user.password,
  });
  (await cookies()).set("session-key", response.data.access_token, {
    httpOnly: true,
  });
  return {
    statusCode: response.status,
    response: response.data,
  };
}

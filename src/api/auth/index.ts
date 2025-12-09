import axios from "axios"

export interface SignInRequest {
  email: string;
  password: string;
}

export const AuthApi = {
  signIn: async ({ email, password }: SignInRequest) => {
    const { data } = await axios.post("login", {
      email,
      password
    });

    return data;
  }
}
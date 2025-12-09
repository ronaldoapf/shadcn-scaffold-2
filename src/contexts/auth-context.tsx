import { AuthApi } from "@/api/auth";
import { createContext, useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextProps {
  user: any | null;
  login: (data: LoginProps) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

interface AuthProviderProps {
  children: ReactNode
}

interface LoginProps {
  email: string;
  password: string;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)


  const navigate = useNavigate()

  async function login(data: LoginProps) {
    setIsLoading(true)
    await AuthApi.signIn(data)
      .then(data => {
        setUser(data)

        localStorage.setItem("shadcn-scaffold-token", data.token)
        localStorage.setItem('shadcn-scaffold-user', JSON.stringify(data.user));
        navigate("/app")
      })
      .catch(() => setIsLoading(false));
  }

  async function logout() {
    setUser(null);
    localStorage.removeItem('shadcn-scaffold-token');
    localStorage.removeItem('shadcn-scaffold-user');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      isLoading
    }}>
      {children}
    </AuthContext.Provider>
  )
}
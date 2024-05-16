import { useRecoilState } from "recoil";
import { loginState } from "../data/recoilAtoms";
import { useEffect } from "react";

export const useAuth = () => {
  const [auth, setAuth] = useRecoilState(loginState);

  useEffect(() => {
    const storedAuth = localStorage.getItem("auth");
    if (storedAuth) {
      setAuth(JSON.parse(storedAuth));
    }
  }, []);

  const login = (access_token: string, refresh_token: string) => {
    setAuth({
      isLoggedIn: true,
      access_token,
      refresh_token,
    });
    localStorage.setItem(
      "auth",
      JSON.stringify({ isLoggedIn: true, access_token, refresh_token })
    );
  };

  const logout = () => {
    setAuth({
      isLoggedIn: false,
      access_token: null,
      refresh_token: null,
    });
    localStorage.removeItem("auth");
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  };

  return { auth, login, logout };
};

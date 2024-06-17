import { useRecoilState } from "recoil";
import { loginState } from "../data/recoilAtoms";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const [auth, setAuth] = useRecoilState(loginState);
  const navigate = useNavigate();

  useEffect(() => {
    const storedAuth = localStorage.getItem("auth");
    if (storedAuth) {
      setAuth(JSON.parse(storedAuth));
    }
  }, []);

  const login = (
    access_token: string,
    refresh_token: string,
    user_name: string,
    school_name: string,
    major_name: string,
    admission_date: number,
    user_id: number,
    major_id: number
  ) => {
    setAuth({
      isLoggedIn: true,
      access_token,
      refresh_token,
      user_name,
      school_name,
      major_name,
      admission_date,
      user_id,
      major_id,
    });
    localStorage.setItem(
      "auth",
      JSON.stringify({
        isLoggedIn: true,
        access_token,
        refresh_token,
        user_name,
        school_name,
        major_name,
        user_id,
        major_id,
      })
    );
  };

  const logout = () => {
    setAuth({
      isLoggedIn: false,
      access_token: null,
      refresh_token: null,
      user_name: null,
      school_name: null,
      major_name: null,
      admission_date: null,
      user_id: null,
      major_id: null,
    });
    localStorage.removeItem("auth");
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user_name");
    localStorage.removeItem("school_name");
    localStorage.removeItem("major_name");
    localStorage.removeItem("user_id");
    localStorage.removeItem("major_id");
    alert("로그아웃 되었습니다.");
    navigate("/login");
    window.location.reload();
  };

  return { auth, login, logout };
};

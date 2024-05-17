import { atom } from "recoil";
import { StudentData } from "../types/Types";

export const studentDataState = atom<StudentData>({
  key: "studentDataState", // 상태를 식별하기 위한 고유한 키입니다.
  default: {
    user_name: "장장장",
    school_name: "단국대학교",
    major_name: "소프트웨어학과",
    student_id: 32203928,
    major_id: 0,
    home_id: "",
    home_password: "",
    home_password_check: "",
    email: "",
    phonenumber: "",
    admission_date: 0,
  },
});

export const loginState = atom({
  key: "loginState",
  default: {
    isLoggedIn: false,
    access_token: null as string | null,
    refresh_token: null as string | null,
    user_name: null as string | null,
    school_name: null as string | null,
    major_name: null as string | null,
    admission_date: null as number | null,
    user_id: null as number | null,
  },
});

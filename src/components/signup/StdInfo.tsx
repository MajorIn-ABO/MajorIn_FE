import { useState } from "react";
import "../../styles/signup/StdInfo.scss";
import { useRecoilState } from "recoil";
import { studentDataState } from "../../data/recoilAtoms";

const StdInfo = () => {
  const [studentData, setStudentData] = useRecoilState(studentDataState);
  const [passwordMatch, setPasswordMatch] = useState<boolean | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setStudentData((prevData) => ({
      ...prevData,
      [name]: name === "admission_date" ? parseInt(value) : value,
    }));

    if (name === "home_password_check") {
      const password = studentData["home_password"];
      setPasswordMatch(password === value);
    }
  };

  return (
    <div>
      <h1>기본 정보</h1>
      <form className="signup-form">
        <label htmlFor="id">아이디</label>
        <input
          required
          type="text"
          id="id"
          name="home_id"
          onChange={handleChange}
        />
        <label htmlFor="pw">비밀번호</label>
        <p className="caution">
          숫자, 대문자, 소문자, 특수문자 등을 조합하여 8자리 이상으로 비밀번호를
          설정해주세요.
        </p>
        <input
          required
          type="password"
          id="pw"
          autoComplete="new-password"
          name="home_password"
          onChange={handleChange}
        />
        <label htmlFor="pw-check">
          비밀번호 확인
          {passwordMatch !== null && (
            <span className={passwordMatch ? "same" : "no-same"}>
              {passwordMatch
                ? "비밀번호가 일치합니다"
                : "비밀번호가 일치하지 않습니다"}
            </span>
          )}
        </label>
        <input
          required
          type="password"
          id="pw-check"
          name="home_password_check"
          autoComplete="new-password"
          onChange={handleChange}
        />
        <label htmlFor="email">이메일</label>
        <input
          required
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
        />
        <label htmlFor="phone">전화번호</label>
        <input
          required
          type="tel"
          id="phone"
          name="phonenumber"
          onChange={handleChange}
        />
        <label htmlFor="year">입학년도</label>
        <select
          required
          id="year"
          name="admission_date"
          onChange={handleChange}
        >
          <option value="">--연도를 선택하세요--</option>
          {Array.from({ length: 30 }, (_, index) => {
            const year = new Date().getFullYear() - index;
            return (
              <option key={year} value={year}>
                {year}
              </option>
            );
          })}
        </select>
      </form>
    </div>
  );
};

export default StdInfo;

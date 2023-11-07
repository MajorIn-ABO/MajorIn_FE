import { useState } from "react";
import "../../styles/signup/SchoolInfo.scss";

const SchoolInfo: React.FC<{ moveToNextStep: () => void }> = ({
  moveToNextStep,
}) => {
  const [selection, setSelection] = useState(""); // State to hold the radio button selection

  const handleSelectionChange = (event: any) => {
    setSelection(event.target.value);
  };

  let textToShow = "";
  let textColor = "";
  if (selection === "yes") {
    textToShow =
      '학적 정보가 일치하다면 “다음으로" 버튼으로 회원가입을 이어서 진행해주세요.';
    textColor = "#0FA958";
  } else if (selection === "no") {
    textToShow =
      "학적 정보가 일치하지 않다면 파일 선택 후 다시 한 번 학생증을 업로드해주세요.";
    textColor = "#FF8181";
  }
  return (
    <div>
      <h1>학적 정보</h1>
      <p className="sub-title">
        학생증 인증이 정상적으로 이루어지면 이름, 학교, 학과, 학번이 자동으로
        입력됩니다.
      </p>
      <section className="school-content">
        <div>
          <p>이름</p>
          <p>장**</p>
        </div>
        <div>
          <p>학교</p>
          <p>단국대학교</p>
        </div>
        <div>
          <p>학과</p>
          <p>소프트웨어학과</p>
        </div>
        <div>
          <p>학번</p>
          <p>32203928</p>
        </div>
      </section>
      <div className="match">
        <p>입력된 학적 정보가 일치한가요?</p>
        <div>
          <input
            type="radio"
            id="yes"
            value="yes"
            checked={selection === "yes"}
            onChange={handleSelectionChange}
          />
          <label htmlFor="yes">예</label>
          <input
            type="radio"
            id="no"
            value="no"
            checked={selection === "no"}
            onChange={handleSelectionChange}
          />
          <label htmlFor="no">아니오</label>
        </div>
      </div>
      <p style={{ color: textColor, fontSize: "0.8rem" }}>{textToShow}</p>
      <button className="next-button" onClick={moveToNextStep}>
        다음으로
      </button>
    </div>
  );
};

export default SchoolInfo;

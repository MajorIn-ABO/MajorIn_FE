import { useState } from "react";
import { postData } from "../../api/postData";
import { useRecoilState } from "recoil";
import { studentDataState } from "../../data/recoilAtoms";
import "../../styles/signup/SchoolInfo.scss";

const SchoolInfo: React.FC<{ moveToNextStep: () => void }> = ({
  moveToNextStep,
}) => {
  const [studentData, setStudentData] = useRecoilState(studentDataState);

  const [major, setMajor] = useState({
    major: studentData.major_name,
    major_category_name: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMajor((prevMajor) => {
      const updatedMajor = {
        ...prevMajor,
        major: studentData.major_name,
        major_category_name: e.target.value,
      };
      console.log(updatedMajor);
      return updatedMajor;
    });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!major.major_category_name) {
      alert("학과를 선택해주세요.");
      console.log(major);
      return;
    }
    if (!major.major) {
      alert("학생증을 인증하세요.");
      console.log(major);
      return;
    }
    const responseData = await postData("/check_major/", major);
    if (responseData.message) {
      const { major_id } = responseData;
      setStudentData((prevData) => ({
        ...prevData,
        major_id,
      }));
      console.log(studentData);
      moveToNextStep();
    } else {
      alert(
        "해당 학과에 대해 선택된 게시판을 이용할 수 없습니다. 다시 선택해주세요."
      );
    }
  };

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
          <p>{studentData.user_name}</p>
        </div>
        <div>
          <p>학교</p>
          <p>{studentData.school_name}</p>
        </div>
        <div>
          <p>학과</p>
          <p>{studentData.major_name}</p>
        </div>
        <div>
          <p>학번</p>
          <p>{studentData.student_id}</p>
        </div>
      </section>
      <div className="match">
        <h1>학과 게시판 선택</h1>
        <div>
          <span>학과에 맞는 게시판을 선택하세요.</span>
          <select
            required
            value={major.major_category_name}
            onChange={handleChange}
          >
            <option value="">-- 카테고리를 선택하세요 --</option>
            <option value="IT">IT</option>
            <option value="경영">경영</option>
          </select>
        </div>
      </div>
      <button className="next-button" onClick={(e) => handleSubmit(e)}>
        다음으로
      </button>
    </div>
  );
};

export default SchoolInfo;

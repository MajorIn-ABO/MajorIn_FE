import "../../styles/signup/SignUpBtn.scss";
import styled from "styled-components";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { studentDataState } from "../../data/recoilAtoms";
import { postSignUpData } from "../../api/postData";
import { useState } from "react";
import Modal from "./Modal";

const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const SignUpBtn: React.FC<{ moveToBeforeStep: () => void }> = ({
  moveToBeforeStep,
}) => {
  const studentData = useRecoilValue(studentDataState);
  const resetStudentData = useResetRecoilState(studentDataState);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(studentData);
    const responseData = await postSignUpData("/users/register/", studentData);
    if (responseData === "성공") {
      setModalMessage("회원가입 성공");
      resetStudentData();
    } else {
      setModalMessage("회원가입 실패");
    }
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <BtnContainer>
      <button className="before-button" onClick={moveToBeforeStep}>
        이전으로
      </button>
      <button className="signup-button" onClick={handleSubmit}>
        회원가입
      </button>
      <Modal isOpen={modalOpen} onClose={closeModal} message={modalMessage} />
    </BtnContainer>
  );
};

export default SignUpBtn;

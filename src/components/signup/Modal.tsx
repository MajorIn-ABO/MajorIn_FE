import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ModalPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #ffffff;
  padding: 40px;
  border-radius: 15px;
`;

const ResultText = styled.p`
font-size: 1.5rem;
font-weight; 700;
text-align: center;
`;

const GoButton = styled.button`
  width: 100%;
  background-color: #1b1c3a;
  border-radius: 5px;
  color: #ffffff;
  font-weight: 700;
  font-size: 1rem;
  padding: 10px;
  margin-top: 30px;
`;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, message }) => {
  const navigate = useNavigate();
  if (!isOpen) return null;

  let buttonLabel;
  let onClickHandler;

  if (message === "회원가입 성공") {
    buttonLabel = "로그인으로 이동";
    onClickHandler = () => navigate("/login");
  } else if (message === "회원가입 실패") {
    buttonLabel = "회원가입 다시하기";
    onClickHandler = onClose;
  }

  return (
    <ModalPage>
      <ModalContent>
        <ResultText>{message}</ResultText>
        <GoButton onClick={onClickHandler}>{buttonLabel}</GoButton>
      </ModalContent>
    </ModalPage>
  );
};

export default Modal;

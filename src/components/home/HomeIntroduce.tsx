import styled from "styled-components";

const IntroduceImg = styled.img`
  width: 100%;
  height: 80vh;
`;

const HomeIntroduce = () => {
  return (
    <div>
      <IntroduceImg src={require("../../assets/img/Group 79.png")} alt="img" />
      <IntroduceImg src={require("../../assets/img/Group 80.png")} alt="img" />
    </div>
  );
};

export default HomeIntroduce;

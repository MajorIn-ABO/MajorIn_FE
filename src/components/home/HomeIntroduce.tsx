import Group79 from "@/assets/img/Group 79.png";
import Group80 from "@/assets/img/Group 80.png";
import styled from "styled-components";

const IntroduceImg = styled.img`
  width: 100%;
  height: 80vh;
`;

const HomeIntroduce = () => {
  return (
    <div>
      <IntroduceImg src={Group79} alt="img" />
      <IntroduceImg src={Group80} alt="img" />
    </div>
  );
};

export default HomeIntroduce;

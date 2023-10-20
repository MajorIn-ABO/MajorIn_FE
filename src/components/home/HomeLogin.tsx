import "../../styles/home/HomeLogin.scss";

const HomeLogin = () => {
  return (
    <div className="login-container">
      <div className="logo">
        <img src={require("../../assets/img/appLogo.png")} alt="logo" />
      </div>
      <div className="login">
        <input type="text" placeholder="아이디" />
        <input type="password" placeholder="패스워드" />
        <input type="button" value="로그인" />
      </div>
      <div className="login-bottom">
        <p>아이디 찾기</p>
        <p>패스워드 찾기</p>
        <p>회원가입</p>
      </div>
    </div>
  );
};

export default HomeLogin;

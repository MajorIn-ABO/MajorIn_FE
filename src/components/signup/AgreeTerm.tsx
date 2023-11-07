import AgreeFirst from "../../data/AgreeFirst";
import "../../styles/signup/AgreeTerm.scss";

const AgreeTerm = () => {
  return (
    <div>
      <h1>약관 동의</h1>
      <div className="agree-content">
        <div className="agree-all">
          <input type="checkbox" id="all" />
          <label htmlFor="all">
            이용약관, 개인정보 수집 및 이용, 개인정보 제 3자 제공 동의에 모두
            동의합니다.
          </label>
        </div>
        <div className="agree-first">
          <input type="checkbox" id="first" />
          <label htmlFor="first">
            이용약관 동의 <span>(필수)</span>
          </label>
          <AgreeFirst />
        </div>
        <div className="agree-second">
          <input type="checkbox" id="second" />
          <label htmlFor="second">
            개인정보 수집 및 이용 동의서 <span>(필수)</span>
          </label>
          <AgreeFirst />
        </div>
        <div className="agree-third">
          <input type="checkbox" id="third" />
          <label htmlFor="third">
            개인정보 제 3자 정보 제공 동의{" "}
            <span className="choice">(선택)</span>
          </label>
          <AgreeFirst />
        </div>
      </div>
    </div>
  );
};

export default AgreeTerm;

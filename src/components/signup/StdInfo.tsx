import "../../styles/signup/StdInfo.scss";

const StdInfo = () => {
  return (
    <div>
      <h1>기본 정보</h1>
      <form className="signup-form">
        <label htmlFor="id">아이디</label>
        <input type="text" id="id" />
        <label htmlFor="pw">비밀번호</label>
        <input type="password" id="pw" />
        <label htmlFor="pw-check">비밀번호 확인</label>
        <input type="password" id="pw-check" />
        <label htmlFor="email">이메일</label>
        <input type="email" id="email" />
        <label htmlFor="phone">전화번호</label>
        <input type="tel" id="phone" />
        <label htmlFor="year">입학년도</label>
        <select id="year">
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

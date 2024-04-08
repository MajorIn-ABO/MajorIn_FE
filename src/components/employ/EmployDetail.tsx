import { useParams } from "react-router-dom";
import data, { EmployData } from "../../data/EmployData";
import "../../styles/employ/EmployDetail.scss";

const EmployDetail = () => {
  const { employId } = useParams();
  const parsedStudyId = employId ? parseInt(employId) : undefined;
  const selectedData = data.find((item) => item.employId === parsedStudyId);
  if (!selectedData) {
    return <div>해당 컨텐츠를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="employ-detail-container">
      <span className="category">{selectedData.recruit}</span>
      <h1>{selectedData.info}</h1>
      <div className="info-container">
        <div className="img">
          <img src={selectedData.img} alt="logo" />
        </div>
        <div className="info">
          <h2>{selectedData.company}</h2>
          <div className="field-container">
            <div className="field-info">
              <h3>직무형태</h3>
              <p>{selectedData.job_type}</p>
            </div>
            <div className="field-info">
              <h3>근무지역</h3>
              <p>{selectedData.area}</p>
            </div>
            <div className="field-info">
              <h3>학력조건</h3>
              <p>{selectedData.edu_lv}</p>
            </div>
            <div className="field-info">
              <h3>직무키워드</h3>
              <p>{selectedData.job_keywords}</p>
            </div>
            <div className="field-info">
              <h3>등록일</h3>
              <p>{selectedData.published}</p>
            </div>
            <div className="field-info">
              <h3>마감일</h3>
              <p>{selectedData.deadline}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployDetail;

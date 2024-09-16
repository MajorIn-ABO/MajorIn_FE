import "@/styles/mentoring/MentorWrite.scss";
import { MentorWriteData } from "@/types/Types";
import { useState } from "react";
import { postTextData } from "@/api/postData";
import { useNavigate } from "react-router-dom";

const MentorWrite = () => {
  const [title, setTitle] = useState("");
  const [mentoringCategory, setMentoringCategory] = useState("");
  const [description, setDescription] = useState("");
  const [placeType, setPlaceType] = useState("");
  const [period, setPeriod] = useState({ start: "", end: "" });
  const [day, setDay] = useState<string[]>([]);
  const [menteeNum, setMenteeNum] = useState(0);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "mentoringCategory":
        setMentoringCategory(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "placeType":
        setPlaceType(value);
        break;
      case "menteeNum":
        setMenteeNum(parseInt(value, 10));
        break;
      default:
        break;
    }
  };

  const handlePeriodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPeriod((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    setDay((prev) =>
      checked ? [...prev, id] : prev.filter((day) => day !== id)
    );
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formattedPeriod = `${period.start} - ${period.end}`;

    const postData = {
      title: title,
      mentoring_category: mentoringCategory,
      description: description,
      place_type: placeType,
      period: formattedPeriod,
      day: day,
      mentee_num: menteeNum,
    };

    console.log(postData);

    try {
      const response = await postTextData(
        "/mentorings/mentor/posts/create/",
        postData
      );
      if (response) {
        alert("글 등록에 성공하였습니다.");
        navigate("/main/mentoring/all");
      }
    } catch (error) {
      console.error("Error posting data:", error);
      alert("글 등록에 실패하였습니다.");
    }
  };

  return (
    <div className="mentor-write-container">
      <h1>✏️ 멘토링 신청글 작성</h1>
      <p>모집하고 싶은 멘토링에 관한 내용을 작성해주세요.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">제목</label>
        <input
          type="text"
          className="title"
          name="title"
          id="title"
          value={title}
          onChange={handleInputChange}
        />
        <label htmlFor="subject">주제 (학습, 취업, 대인관계, ...)</label>
        <input
          type="text"
          className="subject"
          name="mentoringCategory"
          id="subject"
          value={mentoringCategory}
          onChange={handleInputChange}
        />
        <label htmlFor="description">내용</label>
        <textarea
          className="description"
          name="description"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>진행방식</label>
        <div className="select">
          <input
            type="radio"
            id="online"
            name="placeType"
            value="온라인"
            checked={placeType === "온라인"}
            onChange={handleInputChange}
          />
          <label htmlFor="online">온라인</label>
          <input
            type="radio"
            id="offline"
            name="placeType"
            value="오프라인"
            checked={placeType === "오프라인"}
            onChange={handleInputChange}
          />
          <label htmlFor="offline">오프라인</label>
        </div>
        <label htmlFor="period">멘토링 기간</label>
        <div className="period">
          <span>시작날짜</span>
          <input
            type="date"
            id="period"
            name="start"
            value={period.start}
            onChange={handlePeriodChange}
          />
          <span>종료날짜</span>
          <input
            type="date"
            id="period"
            name="end"
            value={period.end}
            onChange={handlePeriodChange}
          />
        </div>
        <label htmlFor="day">멘토링 진행 요일</label>
        <div className="day-checkbox">
          <input
            type="checkbox"
            id="월요일"
            name="day"
            checked={day.includes("월요일")}
            onChange={handleDayChange}
          />
          <label htmlFor="월요일">월요일</label>
          <input
            type="checkbox"
            id="화요일"
            name="day"
            checked={day.includes("화요일")}
            onChange={handleDayChange}
          />
          <label htmlFor="화요일">화요일</label>
          <input
            type="checkbox"
            id="수요일"
            name="day"
            checked={day.includes("수요일")}
            onChange={handleDayChange}
          />
          <label htmlFor="수요일">수요일</label>
          <input
            type="checkbox"
            id="목요일"
            name="day"
            checked={day.includes("목요일")}
            onChange={handleDayChange}
          />
          <label htmlFor="목요일">목요일</label>
          <input
            type="checkbox"
            id="금요일"
            name="day"
            checked={day.includes("금요일")}
            onChange={handleDayChange}
          />
          <label htmlFor="금요일">금요일</label>
          <input
            type="checkbox"
            id="토요일"
            name="day"
            checked={day.includes("토요일")}
            onChange={handleDayChange}
          />
          <label htmlFor="토요일">토요일</label>
          <input
            type="checkbox"
            id="일요일"
            name="day"
            checked={day.includes("일요일")}
            onChange={handleDayChange}
          />
          <label htmlFor="일요일">일요일</label>
        </div>
        <label htmlFor="mentee_num">
          참여인원
          <input
            type="number"
            id="mentee_num"
            name="menteeNum"
            value={menteeNum}
            onChange={handleInputChange}
          />
          명
        </label>
        <div className="button-zip">
          <button>취소</button>
          <button onClick={handleSubmit}>등록</button>
        </div>
      </form>
    </div>
  );
};

export default MentorWrite;

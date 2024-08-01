import { useState, useEffect } from "react";
import { ReactComponent as CloseIcon } from "../../assets/icon/close.svg";
import { ReactComponent as StarIcon } from "../../assets/icon/review-star.svg";
import "../../styles/mentoring/MentorAll.scss";
import { fetchNoMajorTokenData } from "../../api/fetchData";
import { MentoringData } from "../../types/Types";

const data = [
  {
    img: "https://watermark.lovepik.com/photo/20211202/large/lovepik-foreign-teacher-smiles-and-writes-a-blackboard-picture_501383572.jpg",
    name: "장현정",
    title: "멘토링 제목",
    content:
      "멘토링 내용 멘토링 내용 멘토링 내용 멘토링 내용 멘토링 내용 멘토링 내용",
    max: 5,
    apply_count: 4,
  },
  {
    img: "https://watermark.lovepik.com/photo/20211202/large/lovepik-foreign-teacher-smiles-and-writes-a-blackboard-picture_501383572.jpg",
    name: "장현정",
    title: "멘토링 제목",
    content:
      "멘토링 내용 멘토링 내용 멘토링 내용 멘토링 내용 멘토링 내용 멘토링 내용",
    max: 5,
    apply_count: 4,
  },
  {
    img: "https://watermark.lovepik.com/photo/20211202/large/lovepik-foreign-teacher-smiles-and-writes-a-blackboard-picture_501383572.jpg",
    name: "장현정",
    title: "멘토링 제목",
    content:
      "멘토링 내용 멘토링 내용 멘토링 내용 멘토링 내용 멘토링 내용 멘토링 내용",
    max: 5,
    apply_count: 4,
  },
  {
    img: "https://watermark.lovepik.com/photo/20211202/large/lovepik-foreign-teacher-smiles-and-writes-a-blackboard-picture_501383572.jpg",
    name: "장현정",
    title: "멘토링 제목",
    content:
      "멘토링 내용 멘토링 내용 멘토링 내용 멘토링 내용 멘토링 내용 멘토링 내용",
    max: 5,
    apply_count: 4,
  },
];

const MentorAll = () => {
  const [mentoringData, setMentoringData] = useState<MentoringData[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [recommendation, setRecommendation] = useState("");
  const [rating, setRating] = useState(0);

  const fetchUserData = async () => {
    const storedAuth = localStorage.getItem("auth");
    const auth = storedAuth ? JSON.parse(storedAuth) : null;
    const userId = auth ? auth.user_id : null;
    const data = await fetchNoMajorTokenData(`/profile/mentorings/${userId}/`);
    if (data) {
      setMentoringData(data);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleRating = (index: number) => {
    setRating(index + 1);
  };

  const handleRecommendation = (choice: string) => {
    setRecommendation(choice);
  };

  return (
    <div className="mentor-list-container">
      <div className="mentor">
        <h1>"멘토"로 참여중인 프로그램</h1>
        <div className="container">
          {mentoringData.map((item, index) => (
            <div className="mentoring-content" key={index}>
              <div className="img-box">
                <img
                  src={
                    "https://watermark.lovepik.com/photo/20211202/large/lovepik-foreign-teacher-smiles-and-writes-a-blackboard-picture_501383572.jpg"
                  }
                  alt="user"
                />
              </div>
              <div className="content-box">
                <div>
                  <h1>👩🏻‍🏫&nbsp;{item.user_name}</h1>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <span>신청인원 | / {item.mentee_num} 명</span>
                </div>
                <div className="button">
                  <button>확정</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mentee">
        <h1>"멘티"로 참여중인 프로그램</h1>
        <div className="container">
          {data.map((item, index) => (
            <div className="mentoring-content" key={index}>
              <div className="img-box">
                <img src={item.img} alt="user" />
              </div>
              <div className="content-box">
                <div>
                  <h1>👩🏻‍🏫&nbsp;{item.name}</h1>
                  <h2>{item.title}</h2>
                  <p>{item.content}</p>
                  <span>
                    신청인원 | {item.apply_count} / {item.max} 명
                  </span>
                </div>
                <div className="button">
                  <p onClick={openModal}>후기 남기기</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && (
        <div className="modal-background">
          <div className="modal-container">
            <div className="top">
              <h1>멘토링에 대한 후기를 작성해주세요.</h1>
              <CloseIcon onClick={closeModal} style={{ cursor: "pointer" }} />
            </div>
            <form className="middle">
              <h1>멘토링 제목</h1>
              <div className="star">
                {[...Array(5)].map((_, index) => (
                  <div
                    key={index}
                    onClick={() => handleRating(index)}
                    style={{ cursor: "pointer" }}
                    className={index < rating ? "filled" : ""}
                  >
                    <StarIcon />
                  </div>
                ))}
              </div>
              <label htmlFor="review">멘토에게 하고 싶은 말</label>
              <textarea id="review" />
              <div className="recommend">
                <p>다른 멘티에게 추천하나요?</p>
                <div>
                  <span
                    onClick={() => handleRecommendation("no")}
                    className={recommendation === "no" ? "selected" : ""}
                  >
                    아니오
                  </span>
                  <span
                    onClick={() => handleRecommendation("yes")}
                    className={recommendation === "yes" ? "selected" : ""}
                  >
                    예
                  </span>
                </div>
              </div>
              <button>후기 등록</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MentorAll;

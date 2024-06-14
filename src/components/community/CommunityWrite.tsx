import "../../styles/community/CommunityWrite.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { postTokenData } from "../../api/postData";
import { CommunityWriteData } from "../../types/Types";

const CommunityWrite = () => {
  const [writeData, setWriteData] = useState<CommunityWriteData>({
    title: "",
    contents: "",
    category_name: "",
    imgfile: new File([], ""),
  });
  const [fileName, setFileName] = useState("");
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setWriteData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setWriteData((prevData) => ({
        ...prevData,
        imgfile: file,
      }));
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", writeData.title);
    formData.append("contents", writeData.contents);
    formData.append("category_name", writeData.category_name);
    formData.append("imgfile", writeData.imgfile);

    const responseData = await postTokenData("/boards/posts/create/", formData);
    if (responseData) {
      alert("글 등록이 완료되었습니다.");
      navigate("/");
    }
  };

  const handleBackClick = () => {
    navigate("/community");
  };

  return (
    <div className="community-container">
      <h1>✏️ 커뮤니티 글 작성</h1>
      <p className="title-description">
        커뮤니티 게시판에 질문할 내용, 공유하고 싶은 내용을 작성해주세요.
      </p>
      <form className="community-form">
        <label>제목</label>
        <input
          type="text"
          className="title"
          name="title"
          value={writeData.title}
          onChange={handleChange}
        />
        <label>내용</label>
        <textarea
          className="content"
          name="contents"
          value={writeData.contents}
          onChange={handleChange}
        />
        <div>
          <label>카테고리 선택</label>
          <select
            name="category_name"
            value={writeData.category_name}
            onChange={handleChange}
          >
            <option value="학과질문">학과질문</option>
            <option value="잡담/수다">잡담/수다</option>
            <option value="인턴리뷰">인턴리뷰</option>
            <option value="대외활동">대외활동</option>
            <option value="우리학교는">우리학교는</option>
          </select>
        </div>
        <div>
          <label>사진 첨부</label>
          <div className="filebox">
            <input
              type="text"
              placeholder="사진 첨부"
              value={fileName}
              readOnly
            />
            <label htmlFor="file">파일찾기</label>
            <input type="file" id="file" onChange={handleFileChange} />
          </div>
        </div>
        <div className="button-zip">
          <button onClick={handleBackClick}>취소</button>
          <button onClick={handleSubmit}>등록</button>
        </div>
      </form>
    </div>
  );
};

export default CommunityWrite;

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "@/styles/study/StudyWrite.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postTextData } from "@/api/postData";

const StudyWrite = () => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["blockquote", "link"],
      [{ align: [] }, { color: [] }, { background: [] }],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "blockquote",
    "link",
    "align",
    "color",
    "background",
  ];

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [currentHashtag, setCurrentHashtag] = useState<string>("");
  const navigate = useNavigate();

  const handleHashtagChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentHashtag(event.target.value);
  };

  const handleHashtagKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addHashtag(currentHashtag);
      setCurrentHashtag("");
    }
  };

  const addHashtag = (hashtag: string) => {
    if (hashtag.trim() !== "") {
      setHashtags([...hashtags, hashtag.trim()]);
    }
  };

  const removeHashtag = (index: number) => {
    const updatedHashtags = [...hashtags];
    updatedHashtags.splice(index, 1);
    setHashtags(updatedHashtags);
  };

  const goBack = () => {
    navigate("/main/study");
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const postData = {
      title,
      contents,
      hashtags,
    };

    const response = await postTextData("/studys/posts/create/", postData);
    if (response) {
      alert("글 등록에 성공하였습니다.");
      navigate("/main/study");
    }
  };

  return (
    <div className="study-write-container">
      <h1>✏️ 스터디 모집 글 작성</h1>
      <p>스터디원을 모집하기 위한 글을 작성해주세요.</p>
      <form className="study-form">
        <input
          className="title"
          type="text"
          placeholder="제목의 핵심 내용을 요약해주세요."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <ReactQuill
          modules={modules}
          formats={formats}
          value={contents}
          onChange={setContents}
        />
        <div className="hashtags">
          {hashtags.map((tag, index) => (
            <span key={index} className="category">
              #{tag}
              <span
                onClick={() => removeHashtag(index)}
                className="remove-hashtag"
              >
                X
              </span>
            </span>
          ))}
          <input
            type="text"
            placeholder="태그를 입력하세요.(최대 10개)"
            value={currentHashtag}
            onChange={handleHashtagChange}
            onKeyPress={handleHashtagKeyPress}
          />
        </div>
        <div className="button">
          <button onClick={goBack}>취소</button>
          <button onClick={handleSubmit}>등록</button>
        </div>
      </form>
    </div>
  );
};

export default StudyWrite;

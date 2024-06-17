import { ReactComponent as ImgIcon } from "../../assets/icon/img-search.svg";
import BookSearch from "./BookSearch";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { bookState } from "../../data/recoilAtoms";
import { useRecoilState } from "recoil";
import { postTokenData } from "../../api/postData";

const TradeWrite: React.FC = () => {
  const [damage, setDamage] = useState<string>("");
  const [book, setBook] = useRecoilState(bookState);

  const handleDamageChange = (value: string) => {
    setDamage(value);
    setBook((prevBook) => ({
      ...prevBook,
      damage_level: value,
    }));
  };

  const imgBoxes = [1, 2, 3, 4];
  const [imgPreviews, setImgPreviews] = useState<(string | undefined)[]>([
    "",
    "",
    "",
    "",
  ]); // 이미지 미리보기 URL을 저장하는 배열

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = event.target.files?.[0]; // 선택된 파일 가져오기
    if (file) {
      const reader = new FileReader(); // 파일을 읽는 객체 생성
      reader.onloadend = () => {
        const imgPreview = reader.result as string; // 파일을 읽어서 URL로 변환
        const updatedPreviews = [...imgPreviews]; // 기존의 이미지 미리보기 URL 배열 복사
        updatedPreviews[index] = imgPreview; // 해당 인덱스의 이미지 미리보기 URL 업데이트
        setImgPreviews(updatedPreviews); // 이미지 미리보기 URL 배열 업데이트
      };
      reader.readAsDataURL(file); // 파일을 읽어서 URL로 변환
      setBook((prevBook) => ({
        ...prevBook,
        imgfile: file, // 파일을 Recoil 상태에 저장
      }));
    }
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBook((prevBook) => ({
      ...prevBook,
      price: event.target.value,
    }));
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBook((prevBook) => ({
      ...prevBook,
      description: event.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", book.title);
    formData.append("author", book.author);
    formData.append("publisher", book.publisher);
    formData.append("origin_imgfile", book.origin_imgfile);
    formData.append("price", book.price);
    formData.append("description", book.description);
    formData.append("damage_level", book.damage_level);
    if (book.imgfile) {
      formData.append("imgfile", book.imgfile);
    }

    const responseData = await postTokenData(
      "/usedbooktrades/book/create/",
      formData
    );
    if (responseData) {
      alert("글 등록이 완료되었습니다.");
      navigate("/main/trade");
    }
  };

  const navigate = useNavigate();
  const goBack = () => {
    navigate("/main/trade");
  };

  return (
    <div className="trade-write-container">
      <h1>📖 책 판매하기</h1>
      <form>
        <h1>🔎 판매할 책 검색</h1>
        <BookSearch />
        <div className="additional-info">
          <label>손상도</label>
          <ul>
            <li
              onClick={() => handleDamageChange("없음")}
              className={damage === "없음" ? "selected" : ""}
            >
              ・ 없음
            </li>
            <li
              onClick={() => handleDamageChange("적음")}
              className={damage === "적음" ? "selected" : ""}
            >
              ・ 적음
            </li>
            <li
              onClick={() => handleDamageChange("많음")}
              className={damage === "많음" ? "selected" : ""}
            >
              ・ 많음
            </li>
          </ul>
        </div>
        <div className="additional-info">
          <label htmlFor="price">판매 가격</label>
          <input
            type="number"
            id="price"
            placeholder="단위 (원)"
            onChange={handlePriceChange}
          />
        </div>
        <div className="additional-info">
          <label>실제 사진</label>
          <div className="img-boxes">
            {imgBoxes.map((_, index) => (
              <div key={index} className="img-box">
                <label htmlFor={`file${index + 1}`}>
                  {imgPreviews[index] ? (
                    <img src={imgPreviews[index]} alt="미리보기" />
                  ) : (
                    <ImgIcon />
                  )}
                </label>
                <input
                  type="file"
                  id={`file${index + 1}`}
                  onChange={(e) => handleFileChange(e, index)}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="additional-info">
          <label htmlFor="info">추가 정보</label>
          <input type="text" id="info" onChange={handleDescriptionChange} />
        </div>
        <div className="button-zip">
          <button onClick={goBack}>취소</button>
          <button onClick={handleSubmit}>등록</button>
        </div>
      </form>
    </div>
  );
};

export default TradeWrite;

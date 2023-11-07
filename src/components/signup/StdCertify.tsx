// 학생증 인증 컴포넌트
import { useState, ChangeEvent } from "react";
import { ReactComponent as ImgIcon } from "../../assets/icon/img-search.svg";
import "../../styles/signup/StdCertify.scss";

const StdCertify = () => {
  const [selectedImage, setSelectedImage] = useState<
    string | ArrayBuffer | null
  >(null);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h1>학생증 인증</h1>
      <div className="certify-content">
        <p>
          카드 또는 모바일 학생증을 스캔하거나 사진으로 찍어 첨부해주세요.
          <br />
          대학교, 이름, 학과, 학번이 필수적으로 기입되어 있어야 하며, 이를
          제외한 정보는
          <br />
          가려주셔도 됩니다. 필수 기입 정보가 학생증 없을 경우 인증이 진행되지
          않을 수 있습니다.
        </p>
        <div className="certify-img">
          {selectedImage ? (
            <img src={selectedImage as string} alt="uploaded" />
          ) : (
            <>
              <ImgIcon />
              <p>학생증 사진을 업로드 해주세요.</p>
            </>
          )}
        </div>
        <div className="filebox">
          <input type="text" placeholder="학생증 사진 첨부" />
          <label htmlFor="file">파일찾기</label>
          <input type="file" id="file" onChange={handleImageUpload} />
        </div>
      </div>
    </div>
  );
};

export default StdCertify;

export interface EmployData {
  employId: number;
  recruit: string; // 모집중 여부
  published: string; // 등록일
  deadline: string; // 마감일
  company: string; // 기업명
  img: string; // 기업 이미지
  info: string; // 공고 내용
  job_keywords: string; // 직무 키워드
  job_type: string; // 직무 형태
  area: string; // 근무지
  edu_lv: string; // 학력 조건
}

const data: EmployData[] = [
  {
    employId: 1,
    recruit: "모짐 마감",
    published: "23.09.31",
    deadline: "23.09.31",
    company: "카카오(KaKao)",
    img: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
    info: "신규 서비스 플랫폼 기획자(경력) 채용1",
    job_keywords:
      "IT 개발, 데이터, 프론트엔드, 백엔드, 데이터관리, 데이터분석, 인프라 구축",
    job_type: "정규직",
    area: "성남시 분당구",
    edu_lv: "대학(4년제) 졸업",
  },
  {
    employId: 2,
    recruit: "모짐 마감",
    published: "23.09.31",
    deadline: "23.09.31",
    company: "카카오(KaKao)",
    img: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
    info: "신규 서비스 플랫폼 기획자(경력) 채용2",
    job_keywords: "IT 개발, 데이터",
    job_type: "정규직",
    area: "성남시 분당구",
    edu_lv: "대학(4년제) 졸업",
  },
  {
    employId: 3,
    recruit: "모짐 마감",
    published: "23.09.31",
    deadline: "23.09.31",
    company: "카카오(KaKao)",
    img: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
    info: "신규 서비스 플랫폼 기획자(경력) 채용3",
    job_keywords: "IT 개발, 데이터",
    job_type: "정규직",
    area: "성남시 분당구",
    edu_lv: "대학(4년제) 졸업",
  },
  {
    employId: 4,
    recruit: "모짐 마감",
    published: "23.09.31",
    deadline: "23.09.31",
    company: "카카오(KaKao)",
    img: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
    info: "신규 서비스 플랫폼 기획자(경력) 채용4",
    job_keywords: "IT 개발, 데이터",
    job_type: "정규직",
    area: "성남시 분당구",
    edu_lv: "대학(4년제) 졸업",
  },
  {
    employId: 5,
    recruit: "모짐 마감",
    published: "23.09.31",
    deadline: "23.09.31",
    company: "카카오(KaKao)",
    img: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
    info: "신규 서비스 플랫폼 기획자(경력) 채용5",
    job_keywords: "IT 개발, 데이터",
    job_type: "정규직",
    area: "성남시 분당구",
    edu_lv: "대학(4년제) 졸업",
  },
  {
    employId: 6,
    recruit: "모짐 마감",
    published: "23.09.31",
    deadline: "23.09.31",
    company: "카카오(KaKao)",
    img: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
    info: "신규 서비스 플랫폼 기획자(경력) 채용6",
    job_keywords: "IT 개발, 데이터",
    job_type: "정규직",
    area: "성남시 분당구",
    edu_lv: "대학(4년제) 졸업",
  },
];

export default data;

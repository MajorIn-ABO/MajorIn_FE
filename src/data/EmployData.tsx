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
    deadline: "24.05.31",
    company: "카카오(KaKao)",
    img: "https://t1.kakaocdn.net/kakaocorp/corp_thumbnail/Kakao.png",
    info: "신규 서비스 플랫폼 기획자(경력) 채용",
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
    deadline: "24.06.12",
    company: "우아한 형제들",
    img: "https://img.woowahan.com/www/common/baemin.jpg",
    info: "[Tech] 배민메뉴시스템팀 서버 개발자",
    job_keywords: "IT 개발, 데이터",
    job_type: "정규직",
    area: "성남시 분당구",
    edu_lv: "대학(4년제) 졸업",
  },
  {
    employId: 3,
    recruit: "모짐 마감",
    published: "23.09.31",
    deadline: "24.06.13",
    company: "현대자동차",
    img: "https://yt3.googleusercontent.com/NTfSoI2nA6-kMbTxVoDYm1Ii21sZWwV0hw3NLbzYE-7HcYiF5OVfSdFf6BNE7tC6ok5FFeKyZA=s900-c-k-c0x00ffffff-no-rj",
    info: "[ICT] Infra Security Engineer - 보안정책 관리 /보안성 검토",
    job_keywords: "IT 개발, 데이터",
    job_type: "정규직",
    area: "성남시 분당구",
    edu_lv: "대학(4년제) 졸업",
  },
  {
    employId: 4,
    recruit: "모짐 마감",
    published: "23.09.31",
    deadline: "24.06.21",
    company: "SK Telecom",
    img: "https://www.sktelecom.com/images/seo/skt-seo.jpg",
    info: "6월 JT 개발 직군 채용",
    job_keywords: "IT 개발, 데이터",
    job_type: "정규직",
    area: "성남시 분당구",
    edu_lv: "대학(4년제) 졸업",
  },
  {
    employId: 5,
    recruit: "모짐 마감",
    published: "23.09.31",
    deadline: "24.05.31",
    company: "토스(Toss)",
    img: "https://framerusercontent.com/images/EhEElRcoy4v5Y9uyUj3XkTWg.jpg",
    info: "IT Planning Manager",
    job_keywords: "IT 개발, 데이터",
    job_type: "정규직",
    area: "성남시 분당구",
    edu_lv: "대학(4년제) 졸업",
  },
  {
    employId: 6,
    recruit: "모짐 마감",
    published: "23.09.31",
    deadline: "24.06.01",
    company: "Naver",
    img: "https://wimg.mk.co.kr/news/cms/202311/03/news-p.v1.20231103.d4ee94d7f4ab4ea887536033551298ae.png",
    info: "[NAVER Cloud] Document Understanding 연구",
    job_keywords: "IT 개발, 데이터",
    job_type: "정규직",
    area: "성남시 분당구",
    edu_lv: "대학(4년제) 졸업",
  },
];

export default data;

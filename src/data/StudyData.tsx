export interface StudyData {
  studyId: number;
  recruiting: string;
  title: string;
  description: string;
  hashtags: string[];
  school: string;
  date: string;
  chat: number;
  like: number;
  write: number;
  interest: string;
  comments?: CommentData[];
}

export interface CommentData {
  commentId: number;
  writer: string;
  date: string;
  content: string;
}

const data: StudyData[] = [
  {
    studyId: 1,
    recruiting: "모집중",
    title: "리액트 JS, 타입스크립트 스터디 모집",
    description: `
      시간 : 매주 토요일 오후 12:30 ~ 15:00
      장소 : 사당 스터디 룸(오프라인) ➡ 협의 가능해요
      언어 : Java, Kotlin, Javascript 등(Java 사용해요)
      지원 하기 전에 ➕
      ☑ 문제는 자바로 풀어요.
      ☑ 실력은 중요하지 않아요.
      ☑ 열정이 더 중요해요.
      ☑ 재는 분 싫어요. (참여할게요 후에 안오시거나 연락두절 🙅‍♀ )
      ☑ 2월 3일부터 바로 참여 가능하신 분만 연락주세요.
      커리큘럼
      🏁 1주차 스택
      🏁 2-3주차 큐, 덱
      🏁 4주차 DFS, 백트래킹 ➡ 현재 여기까지 진행했어요.
      👨‍💻 DP 누적합 그리디 이분탐색 ....... 그래프와 순회 다익스트라
      ➡ 앞으로 진행할 알고리즘들이에요.
       
      
      🔥 진행 방식
      Pair Programming
      🐱 만나서 같이 문제를 풀어요.
      🗣 한명이 오더를 내리면 나머지 한명은 코딩을 해요.
      주 1회 과제 제출, 깃 헙으로 코드 리뷰
      🪡 야근 등 바쁜 주에는 코드 리뷰만
      🪡 아니라면 과제 제출.
      2월 3일 ➡ BFS 진행해요.
      ⁉ 이론을 한 명을 뽑아 발표해요.
       
      
      💬 연락주세요
      오픈 카카오톡 링크
      
      편하게 연락주세요.
      
      시간만 되면 빠르게 답변드릴게요.
      감사합니다.`,
    hashtags: ["서울", "프론트엔드", "React JS"],
    school: "단국대학교 소프트웨어학과 20학번",
    date: "10분전",
    chat: 10,
    like: 7,
    write: 10,
    interest: "Front-End, DevOps",
    comments: [
      {
        commentId: 1,
        writer: "장** 단국대학교 소프트웨어학과 20학번",
        date: "23.01.01",
        content:
          "ㅏ머ㅜ라부ㅐ댜거ㅡ답ㅇ리ㅜㄴ히ㅏ우래뱌드이ㅏ느란이무링ㄴㄹㅡ아리ㅡ지바을읻자 리ㅏㄷㅈㅂ ㅣㄹㅊ ㄴ이ㅏ뤼ㅏㄴ으ㅜ라민ㅇ 허ㅏ주댁ㄹ뱌ㅡㄷ자ㅣ릉나ㅣ루히ㅏ문ㅇ라ㅣㅂㅈ드ㅏ리 ㄷ아루미ㅏㄴ르ㅏㅣ벋재거답지ㅜ허ㅠㅂㅈㄷ거라ㅜㄷ비ㅏ릐ㅏㅇㄴ믈엠나러ㅐ벚데러ㅡ딪르ㅏㄷ으ㅇ믜림나ㅡ리ㅏ믕ㄴ리ㅏㅡㅏ밎을민ㅇ르ㅏㅣㅇㅁ느리ㅏㅁㄴ으리안므리ㅏㅇ느름ㄴㅇㄹ랑후ㅏ무니라ㅡ미아르",
      },
      {
        commentId: 2,
        writer: "장** 단국대학교 소프트웨어학과 20학번",
        date: "23.01.01",
        content: "댓글 2",
      },
      {
        commentId: 3,
        writer: "장** 단국대학교 소프트웨어학과 20학번",
        date: "23.01.01",
        content: "댓글 3",
      },
      {
        commentId: 4,
        writer: "장** 단국대학교 소프트웨어학과 20학번",
        date: "23.01.01",
        content: "댓글 4",
      },
      {
        commentId: 5,
        writer: "장** 단국대학교 소프트웨어학과 20학번",
        date: "23.01.01",
        content: "댓글 5",
      },
    ],
  },
  {
    studyId: 2,
    recruiting: "모집완료",
    title: "리액트 JS, 타입스크립트 스터디 모집",
    description:
      "안녕하세요. 웹 프론트엔드 스터디원 구합니다. 스터디 주제: 리액트 JS, 타입스크립트  스터디 진행 방..",
    hashtags: ["프론트엔드", "React JS"],
    school: "단국대학교 소프트웨어학과 20학번",
    date: "10분전",
    chat: 10,
    like: 7,
    write: 10,
    interest: "Front-End, DevOps",
  },
  {
    studyId: 3,
    recruiting: "모집중",
    title: "리액트 JS, 타입스크립트 스터디 모집",
    description:
      "안녕하세요. 웹 프론트엔드 스터디원 구합니다. 스터디 주제: 리액트 JS, 타입스크립트  스터디 진행 방..",
    hashtags: [],
    school: "단국대학교 소프트웨어학과 20학번",
    date: "10분전",
    chat: 10,
    like: 7,
    write: 10,
    interest: "Front-End, DevOps",
  },
];

export default data;

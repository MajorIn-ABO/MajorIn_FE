export interface TradeData {
  tradeId: number;
  img: string;
  sale: boolean;
  title: string;
  author: string;
  publish: string;
  price: number;
  saler: string;
  description: string;
  damage_level: string;
  posting: string;
  chat: number;
  comments?: CommentData[];
}

export interface CommentData {
  commentId: number;
  writer: string;
  date: string;
  content: string;
}

const data: TradeData[] = [
  {
    tradeId: 1,
    img: "https://media.wiley.com/product_data/coverImage300/66/11198003/1119800366.jpg",
    sale: true,
    title: "Operating System Concepts",
    author: "Silberschatz, Avraham, PETER BAER GALVIN, GREG GAGNE 저자(글)",
    publish: "John Wiley & Sons Inc",
    price: 10000,
    saler: "단국대학교 소프트웨어학과 20학번",
    description: "운영체제 교재 판매합니다.",
    damage_level: "없음",
    posting: "35분전",
    chat: 5,
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
    tradeId: 2,
    img: "https://media.wiley.com/product_data/coverImage300/66/11198003/1119800366.jpg",
    sale: false,
    title: "Operating System Concepts",
    author: "Silberschatz, Avraham, PETER BAER GALVIN, GREG GAGNE 저자(글)",
    publish: "John Wiley & Sons Inc",
    price: 10000,
    saler: "단국대학교 소프트웨어학과 20학번",
    description: "운영체제 교재 판매합니다.",
    damage_level: "조금있음",
    posting: "35분전",
    chat: 5,
  },
  {
    tradeId: 3,
    img: "https://media.wiley.com/product_data/coverImage300/66/11198003/1119800366.jpg",
    sale: true,
    title: "Operating System Concepts",
    author: "Silberschatz, Avraham, PETER BAER GALVIN, GREG GAGNE 저자(글)",
    publish: "John Wiley & Sons Inc",
    price: 10000,
    saler: "단국대학교 소프트웨어학과 20학번",
    description: "운영체제 교재 판매합니다.",
    damage_level: "없음",
    posting: "35분전",
    chat: 5,
  },
  {
    tradeId: 4,
    img: "https://media.wiley.com/product_data/coverImage300/66/11198003/1119800366.jpg",
    sale: true,
    title: "Operating System Concepts",
    author: "Silberschatz, Avraham, PETER BAER GALVIN, GREG GAGNE 저자(글)",
    publish: "John Wiley & Sons Inc",
    price: 10000,
    saler: "단국대학교 소프트웨어학과 20학번",
    description: "운영체제 교재 판매합니다.",
    damage_level: "많음",
    posting: "35분전",
    chat: 5,
  },
];

export default data;

export interface SearchData {
  searchId: number;
  img: string;
  title: string;
  author: string;
  publish: string;
  price: number;
}
const data: SearchData[] = [
  {
    searchId: 1,
    img: "https://media.wiley.com/product_data/coverImage300/66/11198003/1119800366.jpg",
    title: "Operating System Concepts",
    author: "Silberschatz, Avraham, PETER BAER GALVIN, GREG GAGNE 저자(글)",
    publish: "John Wiley & Sons Inc",
    price: 25000,
  },
  {
    searchId: 2,
    img: "https://image.yes24.com/goods/89496122/XL",
    title: "Operating System Concepts",
    author: "Silberschatz, Avraham, PETER BAER GALVIN, GREG GAGNE 저자(글)",
    publish: "John Wiley & Sons Inc",
    price: 25000,
  },
  {
    searchId: 3,
    img: "https://image.yes24.com/goods/89496122/XL",
    title: "Operating System Concepts",
    author: "Silberschatz, Avraham, PETER BAER GALVIN, GREG GAGNE 저자(글)",
    publish: "John Wiley & Sons Inc",
    price: 25000,
  },
  {
    searchId: 4,
    img: "https://media.wiley.com/product_data/coverImage300/66/11198003/1119800366.jpg",
    title: "Operating System Concepts",
    author: "Silberschatz, Avraham, PETER BAER GALVIN, GREG GAGNE 저자(글)",
    publish: "John Wiley & Sons Inc",
    price: 25000,
  },
];

export default data;

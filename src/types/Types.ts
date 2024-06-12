export interface StudentData {
  user_name: string;
  school_name: string;
  major_name: string;
  student_id: number;
  major_id: number;
  home_id: string;
  home_password: string;
  home_password_check: string;
  email: string;
  phonenumber: string;
  admission_date: number;
}

export interface CommunityData {
  id: number;
  user_id: number;
  category_name: string;
  title: string;
  contents: string;
  imgfile: string;
  post_date: string;
  comment: number;
  like: number;
  bookmark: number;
  school_name: string;
  major_name: string;
  admission_date: number;
}

export interface CommunityWriteData {
  title: string;
  contents: string;
  category_name: string;
  imgfile: File;
}

export interface StudyData {
  id: number;
  user_id: number;
  title: string;
  contents: string;
  hashtags: [];
  is_recruited: boolean;
  post_date: string;
  comment: number;
  like: number;
  school_name: string;
  major_name: string;
  admission_date: number;
}

export interface BookData {
  id: number;
  user_id: number;
  title: string;
  author: string;
  seller: number;
  publisher: string;
  price: string;
  origin_imgfile: string;
  imgfile: string;
  description: string;
  damage_level: string;
  post_date: string;
  comment: number;
  is_sold: boolean;
  school_name: string;
  major_name: string;
  admission_date: number;
}

export interface BookSearchData {
  title: string;
  link: string;
  image: string;
  author: string;
  discount: string;
  publisher: string;
  pubdate: string;
  isbn: string;
  description: string;
}

export interface BookWriteData {
  title: string;
  author: string;
  seller: number;
  publisher: string;
  origin_imgfile: string;
  price: string;
  imgfile: File | null;
  description: string;
  damage_level: string;
}

export interface CommentData {
  id: number;
  contents: string;
  school_name: string;
  major_name: string;
  admission_date: number;
  comment_date: string;
  comments?: ReplyComment[];
}

export interface ReplyComment {
  commentId: number;
  school_name: string;
  major_name: string;
  admission_date: number;
  comment_date: string;
  contents: string;
}

export interface UserInfo {
  id: number;
  major_id: number;
  user_name: string;
  school_name: string;
  major_name: string;
  student_id: number;
  home_id: string;
  email: string;
  phonenumber: string;
  admission_date: number;
  registration_date: string;
  user_status: string;
  user_post_count: number;
  user_comment_count: number;
  user_bookmark_count: number;
}

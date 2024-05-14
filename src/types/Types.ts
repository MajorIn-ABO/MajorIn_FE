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
  post_date: string;
  comment: number;
  like: number;
  keep: number;
  school_name: string;
  major_name: string;
  admission_date: number;
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

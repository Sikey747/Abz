export interface AnswerType {
  success: boolean;
  page: number;
  total_pages: number;
  total_users: number;
  count: number;
  links: LinksType;
  users: UsersType[];
}

export interface LinksType {
  next_url: string | null;
  prev_url: string | null;
}

export interface UsersType {
  id: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  position_id: string;
  registration_timestamp: number;
  photo: string;
}

export type Positions = {
  id: number;
  name: string;
};

export interface FormSendUser {
  name: string;
  email: string;
  phone: string;
  position_id: number;
  photo: File;
}

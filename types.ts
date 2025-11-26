export type UserRole = 'student' | 'creator' | 'recruiter';

export interface Course {
  id: number;
  title: string;
  creator: string;
  thumbnail: string;
  progress: number;
  category: string;
}

export interface Reward {
  id: number;
  title: string;
  description: string;
  cost: number;
  image: string;
}

export interface ForumTopic {
  id: number;
  title: string;
  category: string;
  author: string;
  replies: number;
  lastPost: string;
}

export interface Mission {
  id: number;
  title: string;
  description: string;
  xp: number;
  completed: boolean;
}

export interface Certificate {
  id: number;
  courseTitle: string;
  dateIssued: string;
}

import {User} from './user';

export interface Post {
  id?: string,
  type: 'image' | 'text',
  resUrl?: string,
  text?: string,
  description?: string,
  userId: string,
  likeCount: number,
  commentCount: number,
  user: User
}
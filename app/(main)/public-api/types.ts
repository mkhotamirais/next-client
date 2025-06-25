export interface IJPPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IDJPost {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: { likes: number; dislikes: number };
  views: number;
  userId: number;
}

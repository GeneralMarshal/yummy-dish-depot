
export interface User {
  id: string;
  email: string;
  role: 'user' | 'admin';
  name?: string;
  createdAt: string;
  isActive: boolean;
}

export interface AuthUser {
  id: string;
  email: string;
  token: string;
  role?: 'user' | 'admin';
}

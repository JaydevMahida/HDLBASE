
export enum UserRole {
  CONTRIBUTOR = 'Contributor',
  LEARNER = 'Learner',
  ADMIN = 'ADMIN'
}

export interface UserProfile {
  uid: string;
  email: string;
  role: UserRole;
  displayName: string;
  username: string;
  category: string; // e.g., 'Faculty member', 'Beginner student'
}

export interface HDLModule {
  id: string;
  title: string;
  language: 'Verilog' | 'VHDL';
  contributorId: string;
  description: string;
  createdAt: number;
}

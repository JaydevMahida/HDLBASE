
export enum UserRole {
  PRODUCER = 'PRODUCER',
  CONSUMER = 'CONSUMER',
  ADMIN = 'ADMIN'
}

export interface UserProfile {
  uid: string;
  email: string;
  role: UserRole;
  displayName: string;
  category: string; // e.g., 'Faculty member', 'Beginner student'
}

export interface HDLModule {
  id: string;
  title: string;
  language: 'Verilog' | 'VHDL';
  producerId: string;
  description: string;
  createdAt: number;
}

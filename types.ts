
export enum Role {
  ADMIN = 'ADMIN',
  DIRECTOR = 'DIRECTOR',
  ANGGOTA = 'ANGGOTA'
}

export enum TransactionType {
  MASUK = 'MASUK',
  KELUAR = 'KELUAR'
}

export enum ReferalType {
  KOPERASI = 'KOPERASI',
  PROJECT = 'PROJECT'
}

export interface User {
  id: string;
  name: string;
  role: Role;
  username: string;
  plantation?: string;
}

export interface Transaction {
  id: string;
  date: string;
  referal: ReferalType;
  entity: string;
  type: TransactionType;
  category: string;
  amount: number;
  qty: number;
  product?: string;
  account?: string;
  description: string;
  fileUrl?: string;
  createdAt: string;
}

export interface Member {
  id: string;
  name: string;
  registrationDate: string;
  gender: 'L' | 'P';
  location: string;
  job: string;
  plantation: string;
  areaType: string;
}

export interface AppState {
  view: 'PORTAL' | 'DASHBOARD';
  currentPage: string;
  user: User | null;
  loading: boolean;
}


import { Transaction, Member, TransactionType, ReferalType, Role, User } from '../types';

export const mockTransactions: Transaction[] = [
  {
    id: 'T240101001',
    date: '2024-01-15',
    referal: ReferalType.KOPERASI,
    entity: 'PUSAT',
    type: TransactionType.MASUK,
    category: 'SIMPANAN WAJIB',
    amount: 500000,
    qty: 0,
    account: 'ANG-001 (Budi Santoso)',
    description: 'Setoran bulanan Januari',
    createdAt: '2024-01-15T08:00:00Z'
  },
  {
    id: 'P240201002',
    date: '2024-02-10',
    referal: ReferalType.PROJECT,
    entity: 'KAMPUNG HAJI',
    type: TransactionType.KELUAR,
    category: 'OPERASIONAL',
    amount: 12500000,
    qty: 50,
    product: 'Bibit Kelapa',
    description: 'Pembelian bibit tahap 1',
    createdAt: '2024-02-10T14:30:00Z'
  }
];

export const mockMembers: Member[] = [
  {
    id: 'M23-0001',
    name: 'Budi Santoso',
    registrationDate: '2023-05-20',
    gender: 'L',
    location: 'Surabaya, Jawa Timur',
    job: 'Petani Modern',
    plantation: 'KAMPUNG HAJI',
    areaType: 'PUSAT'
  },
  {
    id: 'M23-0002',
    name: 'Siti Aminah',
    registrationDate: '2023-06-15',
    gender: 'P',
    location: 'Medan, Sumatera Utara',
    job: 'Wiraswasta',
    plantation: 'TRADING IKAN',
    areaType: 'CABANG'
  }
];

export const mockUsers: User[] = [
  { id: 'ADMIN', name: 'Super Admin', role: Role.ADMIN, username: 'admin' },
  { id: 'DIR01', name: 'Dr. Ahmad Hidayat', role: Role.DIRECTOR, username: 'director' },
  { id: 'M23-0001', name: 'Budi Santoso', role: Role.ANGGOTA, username: 'budi', plantation: 'KAMPUNG HAJI' }
];


import React from 'react';
import { 
  LayoutDashboard, 
  Wallet, 
  Users, 
  Layers, 
  Home,
  Briefcase,
  Store,
  History,
  ShieldAlert,
  Database
} from 'lucide-react';

export const COLORS = {
  primary: '#1a4d2e',
  secondary: '#4f6f52',
  accent: '#d4af37',
  danger: '#d93025',
  success: '#1e7e34'
};

export const MENU_ITEMS = [
  { id: 'dashboard', label: 'DASHBOARD', icon: <LayoutDashboard size={20} />, roles: ['ADMIN', 'DIRECTOR', 'ANGGOTA'] },
  { id: 'keuangan', label: 'KEUANGAN', icon: <Wallet size={20} />, roles: ['ADMIN', 'DIRECTOR'] },
  { id: 'keanggotaan', label: 'KEANGGOTAAN', icon: <Users size={20} />, roles: ['ADMIN', 'DIRECTOR'] },
  { id: 'project', label: 'PROJECT', icon: <Layers size={20} />, roles: ['ADMIN', 'DIRECTOR', 'ANGGOTA'] },
];

export const PORTAL_MENU = [
  { id: 'home', label: 'Beranda', icon: <Home size={20} /> },
  { id: 'manajemen', label: 'Manajemen', icon: <Users size={20} /> },
  { id: 'portofolio', label: 'Portofolio', icon: <Briefcase size={20} /> },
  { id: 'marketplace', label: 'Marketplace', icon: <Store size={20} /> },
  { id: 'sejarah', label: 'Sejarah', icon: <History size={20} /> },
];

export const BUSINESS_NARRATIVE = {
  vision: "Kedaulatan Ekonomi Bangsa Melalui Ekosistem Digital Syariah Terpadu",
  mission: "Koperasi Syarikat Islam Mandiri menghadirkan solusi teknologi inovatif untuk hilirisasi sektor riil, memperkuat daya saing ekonomi umat, dan memastikan tata kelola aset yang transparan serta berkelanjutan.",
  intro: "Membawa warisan semangat kemandirian ekonomi dari sejarah panjang Syarikat Islam ke dalam era transformasi digital. Kami membangun jembatan antara produsen, investor, dan pasar melalui platform yang amanah, akuntabel, dan profesional."
};

export const PAGE_NARRATIVES = {
  manajemen: {
    title: "Tata Kelola & Manajemen Profesional",
    description: "SI MANDIRI menerapkan standar Digital Governance untuk memastikan transparansi mutlak, akuntabilitas, dan auditabilitas pada setiap lini usaha.",
    highlights: ["Transparansi Real-time Dashboard", "Kepatuhan Syariah melalui DPS", "Audit Keuangan Independen", "Manajemen Risiko Aset"]
  },
  portofolio: {
    title: "Portofolio Bisnis Sektor Riil",
    description: "Fokus investasi kami terletak pada sektor strategis: Agrikultur, Akuakultur, dan Rantai Pasok Nasional.",
    projects: [
      { name: "Hilirisasi Kelapa Terpadu", sector: "Agrikultur", status: "Operasional" },
      { name: "Trading Perikanan Modern", sector: "Akuakultur", status: "Ekspansi" },
      { name: "Distribusi Logistik Pangan", sector: "Rantai Pasok", status: "Operasional" }
    ]
  },
  marketplace: {
    title: "Ekosistem Marketplace Mandiri",
    description: "Platform B2B & B2C yang menghubungkan produsen koperasi langsung ke pasar nasional melalui integrasi logistik cerdas.",
    features: ["Akses UMKM Global", "Pembayaran Syariah", "Jaminan Kualitas", "Logistik Terintegrasi"]
  },
  sejarah: {
    title: "Warisan Sarekat Dagang Islam",
    description: "Membawa semangat SDI 1905 ke abad 21 dengan teknologi digital untuk kedaulatan ekonomi nasional.",
    milestones: ["1905: SDI Fondasi Ekonomi", "1912: Syarikat Islam", "2024: Digital Ecosystem SI MANDIRI"]
  }
};

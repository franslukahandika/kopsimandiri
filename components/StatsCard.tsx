
import React from 'react';

interface StatsCardProps {
  label: string;
  value: string;
  subLabel?: string;
  icon?: React.ReactNode;
  color?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ label, value, subLabel, icon, color = '#1a4d2e' }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border-b-4 p-6 transition-transform hover:scale-[1.02]" style={{ borderBottomColor: color }}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">{label}</p>
          <h3 className="text-2xl font-extrabold text-slate-800 tracking-tight">{value}</h3>
          {subLabel && <p className="text-xs text-slate-400 mt-2 italic">{subLabel}</p>}
        </div>
        <div className="p-3 rounded-lg bg-slate-50 text-slate-400">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;

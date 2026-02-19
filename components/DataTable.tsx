
import React from 'react';

interface DataTableProps<T,> {
  headers: string[];
  data: T[];
  renderRow: (item: T, index: number) => React.ReactNode;
  emptyMessage?: string;
}

const DataTable = <T,>({ headers, data, renderRow, emptyMessage = "Tidak ada data tersedia" }: DataTableProps<T>) => {
  return (
    <div className="w-full overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead className="bg-[#1a4d2e] text-white">
          <tr>
            {headers.map((h, i) => (
              <th key={i} className="px-6 py-4 text-xs font-bold uppercase tracking-wider">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {data.length > 0 ? (
            data.map((item, index) => renderRow(item, index))
          ) : (
            <tr>
              <td colSpan={headers.length} className="px-6 py-12 text-center text-slate-400 font-medium">
                {emptyMessage}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;

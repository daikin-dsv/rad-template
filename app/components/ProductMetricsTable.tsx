'use client';

import type { ReactNode } from 'react';

export type ProductMetricsColumn = {
    key: string;
    label: string;
    align?: 'left' | 'center' | 'right';
};

export type ProductMetricsRow = {
    key: string;
    cells: Record<string, ReactNode>;
};

export interface ProductMetricsTableProps {
    title: string;
    description?: string;
    columns: ProductMetricsColumn[];
    rows: ProductMetricsRow[];
    footer?: ReactNode;
}

const alignmentClass: Record<NonNullable<ProductMetricsColumn['align']>, string> = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
};

export default function ProductMetricsTable({
    title,
    description,
    columns,
    rows,
    footer
}: ProductMetricsTableProps) {
    return (
        <section className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <header className="flex flex-col gap-2 pb-4">
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">{title}</h2>
                {description ? (
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{description}</p>
                ) : null}
            </header>
            <div className="overflow-x-auto">
                <table className="min-w-[1100px] table-fixed border-separate border-spacing-0">
                    <thead>
                        <tr className="bg-zinc-50 text-sm uppercase tracking-wide text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
                            {columns.map((column) => (
                                <th
                                    key={column.key}
                                    scope="col"
                                    className={`border-b border-zinc-200 px-4 py-3 font-medium first:rounded-tl-lg last:rounded-tr-lg dark:border-zinc-700 ${alignmentClass[column.align ?? 'left']}`}
                                >
                                    {column.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200 text-sm text-zinc-700 dark:divide-zinc-800 dark:text-zinc-200">
                        {rows.map((row) => (
                            <tr key={row.key} className="bg-white transition-colors hover:bg-zinc-50 dark:bg-zinc-900 dark:hover:bg-zinc-800">
                                {columns.map((column) => (
                                    <td
                                        key={`${row.key}-${column.key}`}
                                        className={`px-4 py-3 ${alignmentClass[column.align ?? 'left']}`}
                                    >
                                        {row.cells[column.key] ?? '\u2014'}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {footer ? <div className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">{footer}</div> : null}
        </section>
    );
}

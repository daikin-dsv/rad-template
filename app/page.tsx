'use client';

import { DaikinButtonReact } from './components/dds-wrappers';
import ProductMetricsTable, {
    type ProductMetricsColumn,
    type ProductMetricsRow
} from './components/ProductMetricsTable';

const performanceColumns: ProductMetricsColumn[] = [
    { key: 'product', label: 'Product' },
    { key: 'category', label: 'Category' },
    { key: 'unitsSold', label: 'Units Sold', align: 'right' },
    { key: 'revenue', label: 'Revenue', align: 'right' },
    { key: 'conversion', label: 'Conversion Rate', align: 'right' }
];

const performanceRows: ProductMetricsRow[] = [
    {
        key: 'aurora-mini-split',
        cells: {
            product: 'Aurora Mini-Split',
            category: 'Residential',
            unitsSold: '1,245',
            revenue: '$2.4M',
            conversion: '5.8%'
        }
    },
    {
        key: 'skyline-rtu',
        cells: {
            product: 'Skyline RTU',
            category: 'Commercial',
            unitsSold: '842',
            revenue: '$3.1M',
            conversion: '7.2%'
        }
    },
    {
        key: 'hydroflow-chiller',
        cells: {
            product: 'HydroFlow Chiller',
            category: 'Industrial',
            unitsSold: '316',
            revenue: '$4.8M',
            conversion: '3.9%'
        }
    }
];

const regionalColumns: ProductMetricsColumn[] = [
    { key: 'region', label: 'Region' },
    { key: 'pipeline', label: 'Pipeline', align: 'right' },
    { key: 'forecast', label: 'Forecast', align: 'right' },
    { key: 'growth', label: 'Growth vs LY', align: 'right' },
    { key: 'coverage', label: 'Coverage', align: 'right' }
];

const regionalRows: ProductMetricsRow[] = [
    {
        key: 'americas',
        cells: {
            region: 'Americas',
            pipeline: '$5.3M',
            forecast: '$4.1M',
            growth: '+8.4%',
            coverage: '2.3x'
        }
    },
    {
        key: 'emea',
        cells: {
            region: 'EMEA',
            pipeline: '$3.9M',
            forecast: '$3.2M',
            growth: '+5.1%',
            coverage: '1.9x'
        }
    },
    {
        key: 'apac',
        cells: {
            region: 'APAC',
            pipeline: '$4.6M',
            forecast: '$3.8M',
            growth: '+12.7%',
            coverage: '2.6x'
        }
    }
];

const inventoryColumns: ProductMetricsColumn[] = [
    { key: 'sku', label: 'SKU' },
    { key: 'status', label: 'Status' },
    { key: 'onHand', label: 'On Hand', align: 'right' },
    { key: 'backlog', label: 'Backlog', align: 'right' },
    { key: 'nextShipment', label: 'Next Shipment' }
];

const inventoryRows: ProductMetricsRow[] = [
    {
        key: 'aurora-kit',
        cells: {
            sku: 'Aurora Outdoor Kit',
            status: 'Healthy',
            onHand: '2,840',
            backlog: '312',
            nextShipment: 'Mar 22'
        }
    },
    {
        key: 'skyline-controller',
        cells: {
            sku: 'Skyline Controls',
            status: 'Replenish',
            onHand: '1,105',
            backlog: '854',
            nextShipment: 'Apr 3'
        }
    },
    {
        key: 'hydroflow-pump',
        cells: {
            sku: 'HydroFlow Pumps',
            status: 'Constraint',
            onHand: '648',
            backlog: '1,219',
            nextShipment: 'Apr 18'
        }
    }
];

export default function Home() {
    return (
        <div className="flex min-w-[1200px] flex-col gap-8 pb-10">
            <header className="flex flex-col gap-6 rounded-2xl border border-zinc-200 bg-gradient-to-r from-sky-50 via-white to-white p-8 shadow-sm dark:border-zinc-800 dark:from-sky-900/30 dark:via-zinc-900 dark:to-zinc-900">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div className="space-y-2">
                        <p className="text-sm font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-300">
                            Product Performance Overview
                        </p>
                        <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
                            Q2 Product Growth Dashboard
                        </h1>
                        <p className="max-w-2xl text-sm text-zinc-600 dark:text-zinc-300">
                            Monitor revenue, pipeline health, and supply metrics for our flagship HVAC portfolio.
                            Adjust filters to surface the right segment mix for your go-to-market plans.
                        </p>
                    </div>
                    <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                        <DaikinButtonReact variant="outlined" size="medium">
                            Export Report
                        </DaikinButtonReact>
                        <DaikinButtonReact variant="filled" size="medium">
                            Create Plan
                        </DaikinButtonReact>
                    </div>
                </div>
                <div className="grid gap-4 md:grid-cols-4">
                    <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                            Total Revenue
                        </p>
                        <p className="mt-2 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">$10.3M</p>
                        <p className="text-xs text-emerald-600 dark:text-emerald-400">+6.2% vs last quarter</p>
                    </div>
                    <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Closed Won</p>
                        <p className="mt-2 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">318 deals</p>
                        <p className="text-xs text-emerald-600 dark:text-emerald-400">+14.1% vs target</p>
                    </div>
                    <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                            Avg. Sales Cycle
                        </p>
                        <p className="mt-2 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">42 days</p>
                        <p className="text-xs text-amber-600 dark:text-amber-400">-3 days vs baseline</p>
                    </div>
                    <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                            Forecast Accuracy
                        </p>
                        <p className="mt-2 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">92%</p>
                        <p className="text-xs text-emerald-600 dark:text-emerald-400">+4 pts vs LY</p>
                    </div>
                </div>
            </header>

            <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Filters</h2>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                    Adjust the scope of data across the tables below. Updates apply instantly.
                </p>
                <form className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    <label className="flex flex-col gap-2 text-sm text-zinc-600 dark:text-zinc-300">
                        Segment
                        <select className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50">
                            <option>All</option>
                            <option>Residential</option>
                            <option>Commercial</option>
                            <option>Industrial</option>
                        </select>
                    </label>
                    <label className="flex flex-col gap-2 text-sm text-zinc-600 dark:text-zinc-300">
                        Region
                        <select className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50">
                            <option>All</option>
                            <option>Americas</option>
                            <option>EMEA</option>
                            <option>APAC</option>
                        </select>
                    </label>
                    <label className="flex flex-col gap-2 text-sm text-zinc-600 dark:text-zinc-300">
                        Quarter
                        <select className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50">
                            <option>Q2 FY24</option>
                            <option>Q1 FY24</option>
                            <option>Q4 FY23</option>
                        </select>
                    </label>
                    <label className="flex flex-col gap-2 text-sm text-zinc-600 dark:text-zinc-300">
                        Owner
                        <select className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-zinc-900 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50">
                            <option>Portfolio Leadership</option>
                            <option>Product Marketing</option>
                            <option>Sales Operations</option>
                            <option>Supply Planning</option>
                        </select>
                    </label>
                </form>
            </section>

            <ProductMetricsTable
                title="Product Performance"
                description="Track bookings, conversion, and revenue performance for key HVAC offerings."
                columns={performanceColumns}
                rows={performanceRows}
                footer={
                    <span>
                        Source: Salesforce Opportunities (refreshed 15 minutes ago).
                    </span>
                }
            />

            <ProductMetricsTable
                title="Regional Pipeline Health"
                description="Compare forecast coverage and growth trends across major operating regions."
                columns={regionalColumns}
                rows={regionalRows}
                footer={<span>Source: Demand planning workspace (updated hourly).</span>}
            />

            <ProductMetricsTable
                title="Inventory & Supply Status"
                description="Ensure component availability aligns with downstream demand signals."
                columns={inventoryColumns}
                rows={inventoryRows}
                footer={<span>Source: Supply chain control tower (refreshed daily).</span>}
            />
        </div>
    );
}

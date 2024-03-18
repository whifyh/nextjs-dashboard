import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import {fetchCardData, fetchLatestInvoices, fetchRevenue} from "@/app/lib/data";
import {Suspense} from "react";
import {InvoiceSkeleton, RevenueChartSkeleton} from "@/app/ui/skeletons";

export default async function Page() {
    // 此处使用的是es6的特性, 解构赋值
    const {
        numberOfCustomers,
        numberOfInvoices,
        totalPaidInvoices,
        totalPendingInvoices,
        // 并不一定要保证属性名一致, 也可以赋值到新对象之上(格式=> 原属性名 : 新属性名)
        totalPendingInvoices : newToalPengding
    } = await fetchCardData();

    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                 <Card title="Collected" value={totalPaidInvoices} type="collected" />
                 <Card title="Pending" value={newToalPengding} type="pending" />
                 <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
                 <Card title="Total Customers" value={numberOfCustomers} type="customers"/>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                 {/*<RevenueChart revenue={revenue}  />*/}
                <Suspense fallback={<RevenueChartSkeleton/>}>
                    <RevenueChart/>
                </Suspense>
                <Suspense fallback={<InvoiceSkeleton/>}>
                    <LatestInvoices/>
                </Suspense>
            </div>
        </main>
    );
}
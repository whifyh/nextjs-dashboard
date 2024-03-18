import CardWrapper, { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import {Suspense} from "react";
import {CardSkeleton, InvoiceSkeleton, RevenueChartSkeleton} from "@/app/ui/skeletons";

export default async function Page() {
    // 此处使用的是es6的特性, 解构赋值
    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Suspense fallback={<CardSkeleton/>}>
                    <CardWrapper/>
                </Suspense>
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
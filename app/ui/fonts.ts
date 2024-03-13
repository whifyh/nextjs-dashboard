import {Inter, Lusitana} from "next/font/google";

// 主要字体
export const inter = Inter({subsets:['latin']});

// 辅助字体
export const lusitana = Lusitana({
    subsets:['latin'],
    weight:['400', '700']
});
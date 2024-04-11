'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useDebouncedCallback} from "use-debounce";


export default function Search({ placeholder }: { placeholder: string }) {
    const urlSearchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();

    // 防抖版本
    const handleSearch= useDebouncedCallback((term)=> {
        console.log(term);
        const params = new URLSearchParams(urlSearchParams);
        params.set("page", "1");
        if (term) {
            params.set("query", term);
        } else {
            params.delete("query");
        }
        // 两则是一样的, 上面是传统方式, 下面是es6特性: 模板字符串, 模板字符串中使用${}来执行表达式, 模板字符串使用反引号`, 不是单引号'
        //router.replace(pathname + '?' + params.toString());
        router.replace(`${pathname}?${params.toString()}`); // replace 是替换路由, push是添加路由, 此处的replace是整个替换相当于=符号
    }, 300);

    // 旧版
    function handleSearchOld(term: string) {
        console.log(term);
        const params = new URLSearchParams(urlSearchParams);
        params.set("page", "1");
        if (term) {
            params.set("query", term);
        } else {
            params.delete("query");
        }
        // 两则是一样的, 上面是传统方式, 下面是es6特性: 模板字符串, 模板字符串中使用${}来执行表达式, 模板字符串使用反引号`, 不是单引号'
        //router.replace(pathname + '?' + params.toString());
        router.replace(`${pathname}?${params.toString()}`); // replace 是替换路由, push是添加路由, 此处的replace是整个替换相当于=符号
    }

    return (
        <div className="relative flex flex-1 flex-shrink-0">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
            placeholder={placeholder}
            onChange={e=>handleSearch(e.target.value)}
            defaultValue={urlSearchParams.get("query")?.toString()}
          />
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        </div>
  );
}

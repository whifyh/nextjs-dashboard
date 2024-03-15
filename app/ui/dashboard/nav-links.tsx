'use client'

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from "next/link";
import {usePathname} from "next/navigation";
import clsx from "clsx";
import { JSX } from 'react';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  {
    name: 'Home',
    href: '/dashboard',
    icon: HomeIcon
  },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  {
    name: 'Customers',
    href: '/dashboard/customers',
    icon: UserGroupIcon
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  const isLoggedIn = true
  return (
      <>
        {/*只要Link标签出现, 那么next js 就会在后台提前加载(预加载)目标网页的页面, 这样的话页面之间的跳转就没有延迟 */}
        {/*clsx 是一个函数, 可以条件性地组合和管理css类名 */}
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
              <Link
                  key={link.name}
                  href={link.href}
                  className={clsx("flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                      pathname === link.href ? "bg-sky-100 text-blue-600" : "")}
              >
                <LinkIcon className="w-6"/>
                <p className="hidden md:block">{link.name}</p>
              </Link>
          );
        })}
      </>
  );
}

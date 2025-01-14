'use client';

import {
  HomeIcon,
  ChartBarIcon,
  UsersIcon,
  Cog6ToothIcon,
  ShareIcon,
  DocumentTextIcon,
  UserGroupIcon,
  PresentationChartLineIcon,
  ChevronUpIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navigation = [
  { name: 'Dashboard', href: '/', icon: HomeIcon },
  { name: 'Connections', href: '/connections', icon: ShareIcon },
  { name: 'Content', href: '/content', icon: DocumentTextIcon },
  { 
    name: 'Community',
    href: '/community',
    icon: UserGroupIcon,
    children: [
      { name: 'Events', href: '/community/events', icon: PresentationChartLineIcon },
      { name: 'Rewards', href: '/community/rewards', icon: ChartBarIcon },
      { name: 'Onboarding', href: '/community/onboarding', icon: UsersIcon },
    ]
  },
  { name: 'Analytics', href: '/analytics', icon: ChartBarIcon },
  { name: 'Settings', href: '/settings', icon: Cog6ToothIcon },
];

const userNavigation = [
  { name: 'Your Profile', href: '/profile' },
  { name: 'Settings', href: '/settings' },
  { name: 'Sign out', href: '/logout' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <div className="flex h-full w-64 flex-col bg-gray-900">
      <div className="flex h-16 items-center px-4">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="CMAI Logo"
            width={24}
            height={24}
            className="mr-2"
          />
          <h1 className="text-xl font-bold text-white">CMAI</h1>
        </div>
      </div>
      <nav className="flex-1 space-y-1 px-2 py-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href || 
            (item.children?.some(child => pathname === child.href));
          
          return (
            <div key={item.name}>
              <Link
                href={item.href}
                className={clsx(
                  isActive
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'group flex items-center rounded-md px-2 py-2 text-sm font-medium'
                )}
              >
                <item.icon
                  className={clsx(
                    isActive
                      ? 'text-white'
                      : 'text-gray-400 group-hover:text-white',
                    'mr-3 h-6 w-6 flex-shrink-0'
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
              
              {item.children && (
                <div className="ml-8 mt-1 space-y-1">
                  {item.children.map((child) => {
                    const isChildActive = pathname === child.href;
                    
                    return (
                      <Link
                        key={child.name}
                        href={child.href}
                        className={clsx(
                          isChildActive
                            ? 'bg-gray-800 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'group flex items-center rounded-md px-2 py-1.5 text-sm font-medium'
                        )}
                      >
                        <child.icon
                          className={clsx(
                            isChildActive
                              ? 'text-white'
                              : 'text-gray-400 group-hover:text-white',
                            'mr-3 h-5 w-5 flex-shrink-0'
                          )}
                          aria-hidden="true"
                        />
                        {child.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* User Profile Section */}
      <div className="border-t border-gray-800 p-4">
        <div className="relative">
          <button
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            className="flex w-full items-center justify-between rounded-md px-2 py-2 text-left text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
          >
            <div className="flex items-center">
              <Image
                src="/profile_picture.jpg"
                alt="User Profile"
                width={32}
                height={32}
                className="rounded-full mr-3"
              />
              <div>
                <p className="text-sm font-medium text-white">TJ</p>
                <p className="text-xs text-gray-400">Admin</p>
              </div>
            </div>
            <ChevronUpIcon
              className={clsx(
                'h-5 w-5 text-gray-400 transition-transform',
                isUserMenuOpen ? 'rotate-180' : ''
              )}
            />
          </button>

          {/* Dropdown Menu */}
          {isUserMenuOpen && (
            <div className="absolute bottom-full left-0 w-full mb-2 bg-gray-800 rounded-md shadow-lg py-1">
              {userNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 
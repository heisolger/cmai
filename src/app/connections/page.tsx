'use client';

import { useState } from 'react';

const platforms = [
  {
    name: 'Discord',
    icon: '🎮',
    connected: true,
    groups: ['CMAI Community', 'CMAI Developers'],
  },
  {
    name: 'Telegram',
    icon: '📱',
    connected: true,
    groups: ['CMAI Official', 'CMAI Announcements'],
  },
  {
    name: 'Twitter',
    icon: '🐦',
    connected: false,
    groups: [],
  },
  {
    name: 'Instagram',
    icon: '📸',
    connected: false,
    groups: [],
  },
  {
    name: 'TikTok',
    icon: '🎵',
    connected: false,
    groups: [],
  },
  {
    name: 'LinkedIn',
    icon: '💼',
    connected: false,
    groups: [],
  },
];

export default function ConnectionsPage() {
  const [connectedPlatforms, setConnectedPlatforms] = useState(platforms);

  const toggleConnection = (platformName: string) => {
    setConnectedPlatforms(platforms.map(platform => {
      if (platform.name === platformName) {
        return { ...platform, connected: !platform.connected };
      }
      return platform;
    }));
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Social Connections</h1>
        <p className="mt-2 text-lg text-gray-600">
          Connect your social media channels to enable community management features
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {connectedPlatforms.map((platform) => (
          <div
            key={platform.name}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{platform.icon}</span>
                <h3 className="text-lg font-medium text-gray-900">{platform.name}</h3>
              </div>
              <button
                onClick={() => toggleConnection(platform.name)}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  platform.connected
                    ? 'bg-green-100 text-green-800 hover:bg-green-200'
                    : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                }`}
              >
                {platform.connected ? 'Connected' : 'Connect'}
              </button>
            </div>

            {platform.connected && platform.groups.length > 0 && (
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-500">Connected Groups</h4>
                <ul className="mt-2 space-y-1">
                  {platform.groups.map((group) => (
                    <li
                      key={group}
                      className="text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded"
                    >
                      {group}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 
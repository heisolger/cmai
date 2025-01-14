'use client';

import { useState } from 'react';

const dummyContent = [
  {
    id: 1,
    platform: 'Twitter',
    content: '🚀 Exciting news! Our community has grown to 10k members! Thank you for being part of our journey. #CMAI #CryptoCommmunity',
    type: 'Announcement',
    status: 'Ready',
  },
  {
    id: 2,
    platform: 'Discord',
    content: 'Join us tomorrow at 2 PM UTC for an AMA with our lead developer to discuss the upcoming token migration! Set your reminders! 🔔',
    type: 'Event',
    status: 'Scheduled',
  },
  {
    id: 3,
    platform: 'Telegram',
    content: '📊 Weekly Community Update:\n- New governance proposal live\n- 5 new integrations completed\n- Community rewards distributed\nCheck pinned message for details!',
    type: 'Update',
    status: 'Draft',
  },
];

const contentTypes = ['Announcement', 'Event', 'Update', 'Technical', 'Educational'];
const platforms = ['All Platforms', 'Twitter', 'Discord', 'Telegram'];

export default function ContentPage() {
  const [selectedType, setSelectedType] = useState('All');
  const [selectedPlatform, setSelectedPlatform] = useState('All Platforms');

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Content Manager</h1>
        <p className="mt-2 text-lg text-gray-600">
          Generate and manage content across all your social platforms
        </p>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-wrap gap-4">
        <select
          className="rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="All">All Types</option>
          {contentTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        <select
          className="rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={selectedPlatform}
          onChange={(e) => setSelectedPlatform(e.target.value)}
        >
          {platforms.map((platform) => (
            <option key={platform} value={platform}>
              {platform}
            </option>
          ))}
        </select>

        <button className="ml-auto inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Generate New Content
        </button>
      </div>

      {/* Content List */}
      <div className="bg-white shadow-sm rounded-lg border border-gray-200">
        <ul className="divide-y divide-gray-200">
          {dummyContent.map((item) => (
            <li key={item.id} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {item.platform}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {item.type}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {item.status}
                  </span>
                </div>
                <div className="flex space-x-3">
                  <button className="text-sm text-blue-600 hover:text-blue-500">Edit</button>
                  <button className="text-sm text-green-600 hover:text-green-500">Schedule</button>
                  <button className="text-sm text-gray-600 hover:text-gray-500">Delete</button>
                </div>
              </div>
              <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 
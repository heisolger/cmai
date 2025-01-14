'use client';

import { useState } from 'react';
import { CalendarIcon, ClockIcon, UserGroupIcon, VideoCameraIcon } from '@heroicons/react/24/outline';

const upcomingEvents = [
  {
    id: 1,
    title: 'Community AMA Session',
    type: 'AMA',
    date: '2024-03-20',
    time: '14:00 UTC',
    platform: 'Discord',
    expectedAttendees: 250,
    description: 'Monthly AMA session with the core team discussing recent developments and future plans.',
    status: 'Scheduled',
  },
  {
    id: 2,
    title: 'Technical Workshop',
    type: 'Workshop',
    date: '2024-03-22',
    time: '16:00 UTC',
    platform: 'Discord',
    expectedAttendees: 100,
    description: 'Deep dive into the CMAI token architecture and smart contract functionality.',
    status: 'Draft',
  },
  {
    id: 3,
    title: 'Community Town Hall',
    type: 'Meeting',
    date: '2024-03-25',
    time: '18:00 UTC',
    platform: 'Discord',
    expectedAttendees: 500,
    description: 'Quarterly community meeting to discuss governance proposals and community initiatives.',
    status: 'Planning',
  },
];

const eventTypes = ['All Types', 'AMA', 'Workshop', 'Meeting', 'Social', 'Governance'];
const platforms = ['All Platforms', 'Discord', 'Telegram', 'Twitter Spaces'];

export default function EventsPage() {
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedPlatform, setSelectedPlatform] = useState('All Platforms');

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Event Manager</h1>
        <p className="mt-2 text-lg text-gray-600">
          Plan, schedule, and manage community events across all platforms
        </p>
      </div>

      {/* Event Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <CalendarIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-900">Upcoming Events</h3>
              <p className="text-2xl font-semibold text-gray-900">8</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <UserGroupIcon className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-900">Total RSVPs</h3>
              <p className="text-2xl font-semibold text-gray-900">850</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-wrap gap-4">
        <select
          className="rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          {eventTypes.map((type) => (
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
          Create New Event
        </button>
      </div>

      {/* Events List */}
      <div className="bg-white shadow-sm rounded-lg border border-gray-200">
        <ul className="divide-y divide-gray-200">
          {upcomingEvents.map((event) => (
            <li key={event.id} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-medium text-gray-900">{event.title}</h3>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      event.status === 'Scheduled' ? 'bg-green-100 text-green-800' :
                      event.status === 'Draft' ? 'bg-gray-100 text-gray-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {event.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{event.description}</p>
                  <div className="mt-4 flex items-center space-x-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <ClockIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <VideoCameraIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
                      {event.platform}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <UserGroupIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
                      {event.expectedAttendees} expected
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-end space-x-3">
                <button className="text-sm text-blue-600 hover:text-blue-500">Edit</button>
                <button className="text-sm text-green-600 hover:text-green-500">Send Reminder</button>
                <button className="text-sm text-gray-600 hover:text-gray-500">Cancel</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 
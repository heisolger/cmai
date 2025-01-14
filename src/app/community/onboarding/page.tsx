'use client';

import { useState } from 'react';
import { UserIcon, AcademicCapIcon, CheckCircleIcon, ClockIcon } from '@heroicons/react/24/outline';

const newMembers = [
  {
    id: 1,
    username: 'new_trader',
    avatar: '🤓',
    joinDate: '2024-03-18',
    progress: 75,
    completedTasks: [
      'Join Discord',
      'Complete Profile',
      'Read Documentation',
    ],
    pendingTasks: [
      'Join First Event',
    ],
    mentor: 'crypto_expert',
  },
  {
    id: 2,
    username: 'crypto_newbie',
    avatar: '😊',
    joinDate: '2024-03-17',
    progress: 50,
    completedTasks: [
      'Join Discord',
      'Complete Profile',
    ],
    pendingTasks: [
      'Read Documentation',
      'Join First Event',
    ],
    mentor: 'blockchain_guru',
  },
  {
    id: 3,
    username: 'web3_learner',
    avatar: '🎓',
    joinDate: '2024-03-16',
    progress: 25,
    completedTasks: [
      'Join Discord',
    ],
    pendingTasks: [
      'Complete Profile',
      'Read Documentation',
      'Join First Event',
    ],
    mentor: 'defi_master',
  },
];

const onboardingResources = [
  {
    title: 'Getting Started Guide',
    description: 'Essential information for new community members',
    type: 'Documentation',
    difficulty: 'Beginner',
    estimatedTime: '15 mins',
  },
  {
    title: 'CMAI Token Economics',
    description: 'Understanding the tokenomics and utility',
    type: 'Video',
    difficulty: 'Intermediate',
    estimatedTime: '20 mins',
  },
  {
    title: 'Community Guidelines',
    description: 'Rules and best practices for participation',
    type: 'Documentation',
    difficulty: 'Beginner',
    estimatedTime: '10 mins',
  },
];

export default function OnboardingPage() {
  const [selectedStatus, setSelectedStatus] = useState('All');

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Member Onboarding</h1>
        <p className="mt-2 text-lg text-gray-600">
          Guide and track new members through their onboarding journey
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <UserIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-900">New Members</h3>
              <p className="text-2xl font-semibold text-gray-900">24</p>
              <p className="text-sm text-gray-500">this week</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <AcademicCapIcon className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-900">Completion Rate</h3>
              <p className="text-2xl font-semibold text-gray-900">78%</p>
              <p className="text-sm text-gray-500">avg. time: 5 days</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* New Members List */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">New Members</h2>
            <select
              className="rounded-md border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option>All</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </div>

          <div className="bg-white shadow-sm rounded-lg border border-gray-200">
            <ul className="divide-y divide-gray-200">
              {newMembers.map((member) => (
                <li key={member.id} className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 text-2xl">{member.avatar}</div>
                    <div className="ml-4 flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">{member.username}</h3>
                          <p className="text-sm text-gray-500">Joined {member.joinDate}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-gray-900">Progress</div>
                          <div className="mt-1 flex items-center">
                            <div className="w-40 bg-gray-200 rounded-full h-2.5">
                              <div
                                className="bg-blue-600 h-2.5 rounded-full"
                                style={{ width: `${member.progress}%` }}
                              ></div>
                            </div>
                            <span className="ml-2 text-sm text-gray-500">{member.progress}%</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="text-sm font-medium text-gray-900 mb-2">Onboarding Progress</div>
                        <div className="space-y-2">
                          {member.completedTasks.map((task) => (
                            <div key={task} className="flex items-center text-sm text-gray-600">
                              <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                              {task}
                            </div>
                          ))}
                          {member.pendingTasks.map((task) => (
                            <div key={task} className="flex items-center text-sm text-gray-400">
                              <ClockIcon className="h-5 w-5 text-gray-400 mr-2" />
                              {task}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-lg font-medium text-gray-900 mb-4">Onboarding Resources</h2>
          <div className="space-y-4">
            {onboardingResources.map((resource) => (
              <div key={resource.title} className="bg-white shadow-sm rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{resource.description}</p>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {resource.type}
                  </span>
                  <span className="text-gray-500">{resource.difficulty}</span>
                  <span className="text-gray-500">{resource.estimatedTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 
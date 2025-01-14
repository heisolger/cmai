'use client';

import { useState } from 'react';
import {
  ArrowUpIcon,
  ArrowDownIcon,
} from '@heroicons/react/24/outline';

const metrics = [
  {
    name: 'Total Members',
    value: '12,458',
    change: '+12.5%',
    trend: 'up',
    description: 'vs. last month',
  },
  {
    name: 'Active Users',
    value: '8,234',
    change: '+8.2%',
    trend: 'up',
    description: 'vs. last month',
  },
  {
    name: 'Engagement Rate',
    value: '64.3%',
    change: '-2.1%',
    trend: 'down',
    description: 'vs. last month',
  },
  {
    name: 'Token Holders',
    value: '3,856',
    change: '+15.3%',
    trend: 'up',
    description: 'vs. last month',
  },
];

const platformMetrics = [
  {
    platform: 'Discord',
    metrics: {
      members: 8245,
      activeUsers: 4521,
      messages: 156789,
      growth: 12.5,
    },
  },
  {
    platform: 'Telegram',
    metrics: {
      members: 6123,
      activeUsers: 3245,
      messages: 98456,
      growth: 8.3,
    },
  },
  {
    platform: 'Twitter',
    metrics: {
      members: 15234,
      activeUsers: 8456,
      messages: 45678,
      growth: 15.7,
    },
  },
];

const topDiscussions = [
  {
    topic: 'Token Migration Update',
    platform: 'Discord',
    engagement: 456,
    sentiment: 'Positive',
  },
  {
    topic: 'New Feature Proposal',
    platform: 'Telegram',
    engagement: 342,
    sentiment: 'Neutral',
  },
  {
    topic: 'Community AMA Highlights',
    platform: 'Twitter',
    engagement: 789,
    sentiment: 'Positive',
  },
];

const timeRanges = ['Last 24h', 'Last 7 days', 'Last 30 days', 'Last 90 days'];

export default function AnalyticsPage() {
  const [selectedTimeRange, setSelectedTimeRange] = useState('Last 30 days');

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
            <p className="mt-2 text-lg text-gray-600">
              Comprehensive insights into community engagement and growth
            </p>
          </div>
          <select
            className="rounded-md border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={selectedTimeRange}
            onChange={(e) => setSelectedTimeRange(e.target.value)}
          >
            {timeRanges.map((range) => (
              <option key={range}>{range}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {metrics.map((metric) => (
          <div key={metric.name} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <dt className="text-sm font-medium text-gray-500">{metric.name}</dt>
            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold text-gray-900">
                {metric.value}
              </div>
              <div className={`flex items-baseline text-sm font-semibold ${
                metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.trend === 'up' ? (
                  <ArrowUpIcon className="h-4 w-4 flex-shrink-0" />
                ) : (
                  <ArrowDownIcon className="h-4 w-4 flex-shrink-0" />
                )}
                <span className="ml-1">{metric.change}</span>
                <span className="ml-1 text-gray-500">{metric.description}</span>
              </div>
            </dd>
          </div>
        ))}
      </div>

      {/* Platform Analytics */}
      <div className="mb-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Platform Analytics</h2>
        <div className="bg-white shadow-sm rounded-lg border border-gray-200">
          <div className="px-4 py-5 sm:p-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {platformMetrics.map((platform) => (
                <div key={platform.platform} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">{platform.platform}</h3>
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Members</dt>
                      <dd className="mt-1 text-xl font-semibold text-gray-900">
                        {platform.metrics.members.toLocaleString()}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Active Users</dt>
                      <dd className="mt-1 text-xl font-semibold text-gray-900">
                        {platform.metrics.activeUsers.toLocaleString()}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Messages</dt>
                      <dd className="mt-1 text-xl font-semibold text-gray-900">
                        {platform.metrics.messages.toLocaleString()}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Growth</dt>
                      <dd className="mt-1 flex items-baseline">
                        <span className="text-xl font-semibold text-green-600">
                          +{platform.metrics.growth}%
                        </span>
                      </dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Top Discussions */}
      <div>
        <h2 className="text-lg font-medium text-gray-900 mb-4">Top Discussions</h2>
        <div className="bg-white shadow-sm rounded-lg border border-gray-200">
          <div className="px-4 py-5 sm:p-6">
            <div className="flow-root">
              <ul className="-my-5 divide-y divide-gray-200">
                {topDiscussions.map((discussion) => (
                  <li key={discussion.topic} className="py-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">{discussion.topic}</h3>
                        <div className="mt-1 flex items-center space-x-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {discussion.platform}
                          </span>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            discussion.sentiment === 'Positive' ? 'bg-green-100 text-green-800' :
                            discussion.sentiment === 'Negative' ? 'bg-red-100 text-red-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {discussion.sentiment}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-semibold text-gray-900">{discussion.engagement}</p>
                        <p className="text-sm text-gray-500">engagements</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
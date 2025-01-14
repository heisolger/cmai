'use client';

import { useState } from 'react';
import { ArrowUpIcon, ArrowDownIcon, BoltIcon, RocketLaunchIcon, SparklesIcon, CommandLineIcon } from '@heroicons/react/24/solid';

const metrics = [
  { name: 'Community Sentiment', value: '85%', trend: 'up', change: '2.3%', description: 'Overall positive engagement' },
  { name: 'Active Members', value: '2,847', trend: 'up', change: '4.1%', description: 'Across all platforms' },
  { name: 'Daily Engagement', value: '92%', trend: 'down', change: '1.2%', description: 'Member participation rate' },
  { name: 'AI Actions Today', value: '1,234', trend: 'up', change: '12.3%', description: 'Automated tasks completed' },
];

const activeChannels = [
  { 
    platform: 'Discord',
    status: 'active',
    botName: 'CMAI Helper',
    lastAction: '2 minutes ago',
    activeFeatures: ['Content Moderation', 'Welcome Messages', 'Support Responses'],
    queuedTasks: 3
  },
  { 
    platform: 'Telegram',
    status: 'active',
    botName: 'CMAI Assistant',
    lastAction: '5 minutes ago',
    activeFeatures: ['Group Management', 'FAQ Responses'],
    queuedTasks: 1
  },
  { 
    platform: 'Twitter',
    status: 'active',
    botName: 'CMAI Social',
    lastAction: '1 minute ago',
    activeFeatures: ['Engagement Monitoring', 'Content Scheduling'],
    queuedTasks: 2
  }
];

const aiRecommendations = [
  {
    id: 1,
    type: 'Content',
    platform: 'Twitter',
    title: 'Technical Update Thread',
    description: 'Create a thread explaining recent protocol improvements',
    confidence: 92,
    timing: 'High engagement period in 2 hours',
    status: 'ready'
  },
  {
    id: 2,
    type: 'Event',
    platform: 'Discord',
    title: 'Community AMA Session',
    description: 'Schedule an AMA to address recent governance proposals',
    confidence: 88,
    timing: 'Recommended for tomorrow',
    status: 'ready'
  },
  {
    id: 3,
    type: 'Engagement',
    platform: 'Telegram',
    title: 'Market Analysis',
    description: 'Share insights about recent market movements',
    confidence: 85,
    timing: 'Best time: Next 30 minutes',
    status: 'in_progress'
  }
];

const recentAiActions = [
  {
    action: 'Answered 5 support questions',
    platform: 'Discord',
    time: '2 minutes ago',
    impact: '+12 positive reactions'
  },
  {
    action: 'Generated daily market update',
    platform: 'Telegram',
    time: '15 minutes ago',
    impact: '156 members reached'
  },
  {
    action: 'Moderated spam messages',
    platform: 'Discord',
    time: '1 hour ago',
    impact: '23 messages filtered'
  }
];

export default function Home() {
  const [selectedRecommendation, setSelectedRecommendation] = useState<number | null>(null);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header with AI Status */}
      <div className="mb-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Community Dashboard</h1>
            <p className="mt-2 text-lg text-gray-600">
              Empowering Crypto Communities with Smart Automation
            </p>
          </div>
          <div className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-lg">
            <div className="animate-pulse">
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-green-700 font-medium">AI Agent Active</span>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {metrics.map((metric) => (
          <div key={metric.name} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <dt className="text-sm font-medium text-gray-500">{metric.name}</dt>
            <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold text-gray-900">
                {metric.value}
                <span className="ml-2 text-sm font-medium text-gray-500">
                  {metric.description}
                </span>
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
              </div>
            </dd>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* AI Channel Status */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                <CommandLineIcon className="h-5 w-5 mr-2 text-blue-500" />
                Active AI Channels
              </h2>
              <div className="space-y-4">
                {activeChannels.map((channel) => (
                  <div key={channel.platform} className="border border-gray-100 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                            <BoltIcon className="h-5 w-5 text-blue-600" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-medium text-gray-900">{channel.platform}</h3>
                          <p className="text-sm text-gray-500">{channel.botName}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="animate-pulse">
                          <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        </div>
                        <span className="text-sm text-green-600 font-medium">Active</span>
                      </div>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {channel.activeFeatures.map((feature) => (
                        <span key={feature} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="mt-2 text-sm text-gray-500">
                      Last action: {channel.lastAction} • {channel.queuedTasks} tasks queued
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recent AI Actions */}
        <div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                <RocketLaunchIcon className="h-5 w-5 mr-2 text-purple-500" />
                Recent AI Actions
              </h2>
              <div className="space-y-4">
                {recentAiActions.map((action, index) => (
                  <div key={index} className="border-l-4 border-purple-200 pl-4 py-2">
                    <div className="text-sm font-medium text-gray-900">{action.action}</div>
                    <div className="text-sm text-gray-500">
                      {action.platform} • {action.time}
                    </div>
                    <div className="text-sm text-purple-600 mt-1">{action.impact}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Recommendations */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            <SparklesIcon className="h-5 w-5 mr-2 text-yellow-500" />
            AI Recommendations
          </h2>
          <div className="space-y-4">
            {aiRecommendations.map((rec) => (
              <div 
                key={rec.id} 
                className={`border border-gray-200 rounded-lg p-4 transition-all ${
                  selectedRecommendation === rec.id ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-2">
                      {rec.platform}
                    </span>
                    <h3 className="text-lg font-medium text-gray-900">{rec.title}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-green-600">{rec.confidence}% confidence</div>
                    <div className="text-sm text-gray-500">{rec.timing}</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">{rec.description}</p>
                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => setSelectedRecommendation(rec.id)}
                    className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Preview
                  </button>
                  <button
                    className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Create Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

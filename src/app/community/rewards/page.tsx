'use client';

import { useState } from 'react';
import { TrophyIcon, StarIcon, SparklesIcon } from '@heroicons/react/24/outline';

const topContributors = [
  {
    id: 1,
    username: 'crypto_enthusiast',
    avatar: '👨‍💻',
    points: 2500,
    contributions: {
      discord: 150,
      telegram: 85,
      twitter: 45,
    },
    badges: ['Top Contributor', 'Community Guide', 'Event Host'],
  },
  {
    id: 2,
    username: 'blockchain_dev',
    avatar: '👩‍💻',
    points: 2100,
    contributions: {
      discord: 120,
      telegram: 95,
      twitter: 30,
    },
    badges: ['Technical Expert', 'Helpful Member'],
  },
  {
    id: 3,
    username: 'defi_master',
    avatar: '🧑‍💻',
    points: 1800,
    contributions: {
      discord: 90,
      telegram: 110,
      twitter: 40,
    },
    badges: ['Active Participant', 'Content Creator'],
  },
];

const rewardTiers = [
  {
    name: 'Bronze',
    points: 1000,
    benefits: ['Access to private channels', 'Special role in Discord', 'Monthly NFT drops'],
  },
  {
    name: 'Silver',
    points: 2500,
    benefits: ['Early access to features', 'Voting power multiplier', 'Exclusive merchandise'],
  },
  {
    name: 'Gold',
    points: 5000,
    benefits: ['Direct access to core team', 'Custom badge', 'Revenue sharing'],
  },
];

export default function RewardsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('This Week');

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Community Rewards</h1>
        <p className="mt-2 text-lg text-gray-600">
          Track contributions and reward active community members
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <TrophyIcon className="h-6 w-6 text-yellow-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-900">Total Points Distributed</h3>
              <p className="text-2xl font-semibold text-gray-900">45,230</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <StarIcon className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-900">Active Contributors</h3>
              <p className="text-2xl font-semibold text-gray-900">328</p>
            </div>
          </div>
        </div>
      </div>

      {/* Period Selector */}
      <div className="mb-6">
        <select
          className="rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          value={selectedPeriod}
          onChange={(e) => setSelectedPeriod(e.target.value)}
        >
          <option>This Week</option>
          <option>This Month</option>
          <option>All Time</option>
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Top Contributors */}
        <div className="lg:col-span-2">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Top Contributors</h2>
          <div className="bg-white shadow-sm rounded-lg border border-gray-200">
            <ul className="divide-y divide-gray-200">
              {topContributors.map((contributor, index) => (
                <li key={contributor.id} className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 text-2xl">{contributor.avatar}</div>
                    <div className="ml-4 flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">
                            {index + 1}. {contributor.username}
                          </h3>
                          <div className="mt-1 flex items-center space-x-2">
                            {contributor.badges.map((badge) => (
                              <span
                                key={badge}
                                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                              >
                                {badge}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-semibold text-gray-900">{contributor.points}</p>
                          <p className="text-sm text-gray-500">points</p>
                        </div>
                      </div>
                      <div className="mt-4 grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <p className="text-sm font-medium text-gray-900">{contributor.contributions.discord}</p>
                          <p className="text-xs text-gray-500">Discord</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm font-medium text-gray-900">{contributor.contributions.telegram}</p>
                          <p className="text-xs text-gray-500">Telegram</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm font-medium text-gray-900">{contributor.contributions.twitter}</p>
                          <p className="text-xs text-gray-500">Twitter</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Reward Tiers */}
        <div>
          <h2 className="text-lg font-medium text-gray-900 mb-4">Reward Tiers</h2>
          <div className="space-y-4">
            {rewardTiers.map((tier) => (
              <div key={tier.name} className="bg-white shadow-sm rounded-lg border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">{tier.name}</h3>
                  <span className="text-sm font-medium text-gray-500">{tier.points} points</span>
                </div>
                <ul className="space-y-2">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center text-sm text-gray-600">
                      <SparklesIcon className="h-5 w-5 text-yellow-500 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 
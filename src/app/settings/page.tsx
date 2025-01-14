'use client';

import { useState } from 'react';
import { BellIcon, ShieldCheckIcon, UserGroupIcon } from '@heroicons/react/24/outline';

interface DiscordIntegration {
  name: string;
  connected: boolean;
  webhookUrl: string;
  roles: string[];
}

interface TelegramIntegration {
  name: string;
  connected: boolean;
  botToken: string;
  groups: string[];
}

interface TwitterIntegration {
  name: string;
  connected: boolean;
  apiKey: string;
  apiSecret: string;
}

interface IntegrationSettings {
  discord: DiscordIntegration;
  telegram: TelegramIntegration;
  twitter: TwitterIntegration;
}

const notificationSettings = [
  {
    id: 'new-members',
    name: 'New Members',
    description: 'Get notified when new members join the community',
    enabled: true,
  },
  {
    id: 'events',
    name: 'Events',
    description: 'Notifications for upcoming events and reminders',
    enabled: true,
  },
  {
    id: 'rewards',
    name: 'Rewards Distribution',
    description: 'Get notified when rewards are distributed',
    enabled: true,
  },
  {
    id: 'reports',
    name: 'Analytics Reports',
    description: 'Weekly and monthly performance reports',
    enabled: false,
  },
];

const automationSettings = [
  {
    id: 'welcome-messages',
    name: 'Welcome Messages',
    description: 'Automatically send welcome messages to new members',
    enabled: true,
  },
  {
    id: 'content-posting',
    name: 'Content Posting',
    description: 'Automatically post scheduled content across platforms',
    enabled: true,
  },
  {
    id: 'reward-distribution',
    name: 'Reward Distribution',
    description: 'Automatically distribute rewards based on activity',
    enabled: false,
  },
];

const integrationSettings: IntegrationSettings = {
  discord: {
    name: 'Discord',
    connected: true,
    webhookUrl: 'https://discord.com/api/webhooks/123456789',
    roles: ['Admin', 'Moderator', 'Member'],
  },
  telegram: {
    name: 'Telegram',
    connected: true,
    botToken: '123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11',
    groups: ['Main Group', 'Announcements'],
  },
  twitter: {
    name: 'Twitter',
    connected: false,
    apiKey: '',
    apiSecret: '',
  },
};

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(notificationSettings);
  const [automations, setAutomations] = useState(automationSettings);

  const toggleSetting = (settingId: string, type: 'notification' | 'automation') => {
    if (type === 'notification') {
      setNotifications(notifications.map(setting => 
        setting.id === settingId ? { ...setting, enabled: !setting.enabled } : setting
      ));
    } else {
      setAutomations(automations.map(setting =>
        setting.id === settingId ? { ...setting, enabled: !setting.enabled } : setting
      ));
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="mt-2 text-lg text-gray-600">
          Manage your community automation and notification preferences
        </p>
      </div>

      {/* Notification Settings */}
      <div className="mb-8">
        <div className="bg-white shadow-sm rounded-lg border border-gray-200">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <BellIcon className="h-6 w-6 text-gray-900 mr-2" />
              <h2 className="text-lg font-medium text-gray-900">Notification Settings</h2>
            </div>
            <div className="space-y-4">
              {notifications.map((setting) => (
                <div key={setting.id} className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">{setting.name}</h3>
                    <p className="text-sm text-gray-500">{setting.description}</p>
                  </div>
                  <button
                    onClick={() => toggleSetting(setting.id, 'notification')}
                    className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                      setting.enabled ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                        setting.enabled ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Automation Settings */}
      <div className="mb-8">
        <div className="bg-white shadow-sm rounded-lg border border-gray-200">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <ShieldCheckIcon className="h-6 w-6 text-gray-900 mr-2" />
              <h2 className="text-lg font-medium text-gray-900">Automation Settings</h2>
            </div>
            <div className="space-y-4">
              {automations.map((setting) => (
                <div key={setting.id} className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">{setting.name}</h3>
                    <p className="text-sm text-gray-500">{setting.description}</p>
                  </div>
                  <button
                    onClick={() => toggleSetting(setting.id, 'automation')}
                    className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                      setting.enabled ? 'bg-blue-600' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                        setting.enabled ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Integration Settings */}
      <div>
        <div className="bg-white shadow-sm rounded-lg border border-gray-200">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <UserGroupIcon className="h-6 w-6 text-gray-900 mr-2" />
              <h2 className="text-lg font-medium text-gray-900">Platform Integrations</h2>
            </div>
            <div className="space-y-6">
              {Object.entries(integrationSettings).map(([key, platform]) => (
                <div key={key} className="border-t border-gray-200 pt-6 first:border-0 first:pt-0">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium text-gray-900">{platform.name}</h3>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        platform.connected
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {platform.connected ? 'Connected' : 'Not Connected'}
                    </span>
                  </div>
                  {platform.connected && (
                    <div className="mt-4 space-y-4">
                      {key === 'discord' && 'webhookUrl' in platform && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Webhook URL</label>
                          <input
                            type="text"
                            value={platform.webhookUrl}
                            readOnly
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                          />
                        </div>
                      )}
                      {key === 'telegram' && 'botToken' in platform && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Bot Token</label>
                          <input
                            type="password"
                            value={platform.botToken}
                            readOnly
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                          />
                        </div>
                      )}
                      {'roles' in platform && platform.roles && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Roles</label>
                          <div className="mt-1 flex flex-wrap gap-2">
                            {platform.roles.map((role) => (
                              <span
                                key={role}
                                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                              >
                                {role}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      {'groups' in platform && platform.groups && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Groups</label>
                          <div className="mt-1 flex flex-wrap gap-2">
                            {platform.groups.map((group) => (
                              <span
                                key={group}
                                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800"
                              >
                                {group}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                  <div className="mt-4">
                    <button
                      className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm ${
                        platform.connected
                          ? 'text-red-600 bg-red-100 hover:bg-red-200'
                          : 'text-white bg-blue-600 hover:bg-blue-700'
                      }`}
                    >
                      {platform.connected ? 'Disconnect' : 'Connect'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
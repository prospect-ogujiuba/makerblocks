import React, { useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import {
  Cog6ToothIcon,
  UserCircleIcon,
  BellIcon,
  ShieldCheckIcon,
  CreditCardIcon,
  GlobeAltIcon,
  PaintBrushIcon,
  KeyIcon,
} from "@heroicons/react/24/outline";

const Settings = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "",
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    pushNotifications: false,
    weeklyDigest: true,
  });

  const [theme, setTheme] = useState("light");

  const categories = [
    { name: "Profile", icon: UserCircleIcon },
    { name: "Notifications", icon: BellIcon },
    { name: "Security", icon: ShieldCheckIcon },
    { name: "Billing", icon: CreditCardIcon },
    { name: "Preferences", icon: PaintBrushIcon },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Cog6ToothIcon className="mx-auto h-12 w-12 text-blue-600" />
            <h1 className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Settings
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Manage your account settings and preferences
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <TabGroup>
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-3">
              <TabList className="flex flex-col space-y-1">
                {categories.map((category) => (
                  <Tab
                    key={category.name}
                    className={({ selected }) =>
                      `${
                        selected
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-600 hover:bg-gray-50"
                      } flex items-center px-3 py-2 text-sm font-medium rounded-lg`
                    }
                  >
                    <category.icon className="h-5 w-5 mr-3" />
                    <span>{category.name}</span>
                  </Tab>
                ))}
              </TabList>
            </div>

            {/* Content Area */}
            <div className="mt-6 lg:mt-0 lg:col-span-9">
              <TabPanels>
                {/* Profile Panel */}
                <TabPanel>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Profile Settings
                    </h2>

                    <div className="space-y-6">
                      {/* Profile Picture */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Profile Picture
                        </label>
                        <div className="flex items-center">
                          <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center">
                            <UserCircleIcon className="h-16 w-16 text-gray-400" />
                          </div>
                          <button className="ml-4 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
                            Change Photo
                          </button>
                        </div>
                      </div>

                      {/* Name */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={profile.name}
                          onChange={(e) =>
                            setProfile({ ...profile, name: e.target.value })
                          }
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={profile.email}
                          onChange={(e) =>
                            setProfile({ ...profile, email: e.target.value })
                          }
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>

                      {/* Bio */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Bio
                        </label>
                        <textarea
                          value={profile.bio}
                          onChange={(e) =>
                            setProfile({ ...profile, bio: e.target.value })
                          }
                          rows={4}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Tell us about yourself..."
                        />
                      </div>

                      <div className="flex justify-end">
                        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </TabPanel>

                {/* Notifications Panel */}
                <TabPanel>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Notification Settings
                    </h2>

                    <div className="space-y-6">
                      {/* Email Notifications */}
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-sm font-medium text-gray-900">
                            Email Notifications
                          </h3>
                          <p className="text-sm text-gray-500">
                            Receive notifications via email
                          </p>
                        </div>
                        <button
                          onClick={() =>
                            setNotifications({
                              ...notifications,
                              emailNotifications: !notifications.emailNotifications,
                            })
                          }
                          className={`${
                            notifications.emailNotifications
                              ? "bg-blue-600"
                              : "bg-gray-200"
                          } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
                        >
                          <span
                            className={`${
                              notifications.emailNotifications
                                ? "translate-x-6"
                                : "translate-x-1"
                            } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                          />
                        </button>
                      </div>

                      {/* Push Notifications */}
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-sm font-medium text-gray-900">
                            Push Notifications
                          </h3>
                          <p className="text-sm text-gray-500">
                            Receive push notifications in your browser
                          </p>
                        </div>
                        <button
                          onClick={() =>
                            setNotifications({
                              ...notifications,
                              pushNotifications: !notifications.pushNotifications,
                            })
                          }
                          className={`${
                            notifications.pushNotifications
                              ? "bg-blue-600"
                              : "bg-gray-200"
                          } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
                        >
                          <span
                            className={`${
                              notifications.pushNotifications
                                ? "translate-x-6"
                                : "translate-x-1"
                            } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                          />
                        </button>
                      </div>

                      {/* Weekly Digest */}
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-sm font-medium text-gray-900">
                            Weekly Digest
                          </h3>
                          <p className="text-sm text-gray-500">
                            Receive a weekly summary of activity
                          </p>
                        </div>
                        <button
                          onClick={() =>
                            setNotifications({
                              ...notifications,
                              weeklyDigest: !notifications.weeklyDigest,
                            })
                          }
                          className={`${
                            notifications.weeklyDigest
                              ? "bg-blue-600"
                              : "bg-gray-200"
                          } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
                        >
                          <span
                            className={`${
                              notifications.weeklyDigest
                                ? "translate-x-6"
                                : "translate-x-1"
                            } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </TabPanel>

                {/* Security Panel */}
                <TabPanel>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Security Settings
                    </h2>

                    <div className="space-y-6">
                      {/* Change Password */}
                      <div className="border-b border-gray-200 pb-6">
                        <div className="flex items-start">
                          <KeyIcon className="h-6 w-6 text-gray-400 mt-1" />
                          <div className="ml-4 flex-1">
                            <h3 className="text-sm font-medium text-gray-900">
                              Change Password
                            </h3>
                            <p className="text-sm text-gray-500 mt-1">
                              Update your password to keep your account secure
                            </p>
                            <button className="mt-3 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
                              Update Password
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Two-Factor Authentication */}
                      <div className="border-b border-gray-200 pb-6">
                        <div className="flex items-start">
                          <ShieldCheckIcon className="h-6 w-6 text-gray-400 mt-1" />
                          <div className="ml-4 flex-1">
                            <h3 className="text-sm font-medium text-gray-900">
                              Two-Factor Authentication
                            </h3>
                            <p className="text-sm text-gray-500 mt-1">
                              Add an extra layer of security to your account
                            </p>
                            <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
                              Enable 2FA
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Active Sessions */}
                      <div>
                        <h3 className="text-sm font-medium text-gray-900 mb-4">
                          Active Sessions
                        </h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div>
                              <p className="text-sm font-medium text-gray-900">
                                Current Session
                              </p>
                              <p className="text-xs text-gray-500">
                                Chrome on MacOS • Last active now
                              </p>
                            </div>
                            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                              Active
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>

                {/* Billing Panel */}
                <TabPanel>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Billing Settings
                    </h2>

                    <div className="space-y-6">
                      {/* Current Plan */}
                      <div className="border-b border-gray-200 pb-6">
                        <h3 className="text-sm font-medium text-gray-900 mb-4">
                          Current Plan
                        </h3>
                        <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                          <div>
                            <p className="text-lg font-semibold text-gray-900">
                              Pro Plan
                            </p>
                            <p className="text-sm text-gray-500">
                              $29/month • Renews on Nov 17, 2025
                            </p>
                          </div>
                          <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-white">
                            Change Plan
                          </button>
                        </div>
                      </div>

                      {/* Payment Method */}
                      <div className="border-b border-gray-200 pb-6">
                        <h3 className="text-sm font-medium text-gray-900 mb-4">
                          Payment Method
                        </h3>
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center">
                            <CreditCardIcon className="h-6 w-6 text-gray-400" />
                            <div className="ml-3">
                              <p className="text-sm font-medium text-gray-900">
                                •••• •••• •••• 4242
                              </p>
                              <p className="text-xs text-gray-500">Expires 12/26</p>
                            </div>
                          </div>
                          <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-white">
                            Update
                          </button>
                        </div>
                      </div>

                      {/* Billing History */}
                      <div>
                        <h3 className="text-sm font-medium text-gray-900 mb-4">
                          Billing History
                        </h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div>
                              <p className="text-sm font-medium text-gray-900">
                                Oct 17, 2025
                              </p>
                              <p className="text-xs text-gray-500">Pro Plan</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-medium text-gray-900">
                                $29.00
                              </p>
                              <button className="text-xs text-blue-600 hover:text-blue-500">
                                Download
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>

                {/* Preferences Panel */}
                <TabPanel>
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Preferences
                    </h2>

                    <div className="space-y-6">
                      {/* Theme */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Theme
                        </label>
                        <div className="grid grid-cols-3 gap-4">
                          {["light", "dark", "auto"].map((t) => (
                            <button
                              key={t}
                              onClick={() => setTheme(t)}
                              className={`${
                                theme === t
                                  ? "border-blue-500 ring-2 ring-blue-500"
                                  : "border-gray-300"
                              } border-2 rounded-lg p-4 text-center hover:border-blue-400 transition-colors`}
                            >
                              <p className="text-sm font-medium text-gray-900 capitalize">
                                {t}
                              </p>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Language */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Language
                        </label>
                        <div className="flex items-center">
                          <GlobeAltIcon className="h-5 w-5 text-gray-400 mr-2" />
                          <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                            <option>English</option>
                            <option>Spanish</option>
                            <option>French</option>
                            <option>German</option>
                          </select>
                        </div>
                      </div>

                      {/* Time Zone */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Time Zone
                        </label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                          <option>UTC-8 (Pacific Time)</option>
                          <option>UTC-5 (Eastern Time)</option>
                          <option>UTC+0 (London)</option>
                          <option>UTC+1 (Paris)</option>
                        </select>
                      </div>

                      <div className="flex justify-end">
                        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
                          Save Preferences
                        </button>
                      </div>
                    </div>
                  </div>
                </TabPanel>
              </TabPanels>
            </div>
          </div>
        </TabGroup>
      </div>
    </div>
  );
};

export default Settings;

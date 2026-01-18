import { useState } from "react"
import {
  Cog6ToothIcon,
  UserCircleIcon,
  BellIcon,
  ShieldCheckIcon,
  CreditCardIcon,
  GlobeAltIcon,
  KeyIcon,
} from "@heroicons/react/24/outline"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../../components/ui/tabs"
import { Card, CardContent } from "../../../../components/ui/card"
import { Button } from "../../../../components/ui/button"
import { Input } from "../../../../components/ui/input"
import { Label } from "../../../../components/ui/label"
import { Badge } from "../../../../components/ui/badge"
import { cn } from "../../../../lib/utils"

interface Profile {
  name: string
  email: string
  bio: string
}

interface Notifications {
  emailNotifications: boolean
  pushNotifications: boolean
  weeklyDigest: boolean
}

interface Category {
  name: string
  value: string
  icon: React.ComponentType<{ className?: string }>
}

export default function Settings() {
  const [profile, setProfile] = useState<Profile>({
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "",
  })

  const [notifications, setNotifications] = useState<Notifications>({
    emailNotifications: true,
    pushNotifications: false,
    weeklyDigest: true,
  })

  const [theme, setTheme] = useState("light")

  const categories: Category[] = [
    { name: "Profile", value: "profile", icon: UserCircleIcon },
    { name: "Notifications", value: "notifications", icon: BellIcon },
    { name: "Security", value: "security", icon: ShieldCheckIcon },
    { name: "Billing", value: "billing", icon: CreditCardIcon },
    { name: "Preferences", value: "preferences", icon: GlobeAltIcon },
  ]

  const ToggleSwitch = ({
    checked,
    onChange,
  }: {
    checked: boolean
    onChange: () => void
  }) => (
    <button
      onClick={onChange}
      className={cn(
        "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
        checked ? "bg-blue-600" : "bg-gray-200"
      )}
    >
      <span
        className={cn(
          "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
          checked ? "translate-x-6" : "translate-x-1"
        )}
      />
    </button>
  )

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
        <Tabs defaultValue="profile" className="w-full">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-3">
              <TabsList className="flex flex-col h-auto w-full space-y-1 bg-transparent">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.value}
                    value={category.value}
                    className="w-full justify-start px-3 py-2 text-sm font-medium rounded-lg data-[state=active]:bg-blue-50 data-[state=active]:text-blue-600"
                  >
                    <category.icon className="h-5 w-5 mr-3" />
                    <span>{category.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Content Area */}
            <div className="mt-6 lg:mt-0 lg:col-span-9">
              {/* Profile Panel */}
              <TabsContent value="profile">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Profile Settings
                    </h2>

                    <div className="space-y-6">
                      {/* Profile Picture */}
                      <div>
                        <Label>Profile Picture</Label>
                        <div className="flex items-center mt-2">
                          <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center">
                            <UserCircleIcon className="h-16 w-16 text-gray-400" />
                          </div>
                          <Button variant="outline" className="ml-4">
                            Change Photo
                          </Button>
                        </div>
                      </div>

                      {/* Name */}
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          className="mt-2"
                          value={profile.name}
                          onChange={(e) =>
                            setProfile({ ...profile, name: e.target.value })
                          }
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          className="mt-2"
                          value={profile.email}
                          onChange={(e) =>
                            setProfile({ ...profile, email: e.target.value })
                          }
                        />
                      </div>

                      {/* Bio */}
                      <div>
                        <Label htmlFor="bio">Bio</Label>
                        <textarea
                          id="bio"
                          value={profile.bio}
                          onChange={(e) =>
                            setProfile({ ...profile, bio: e.target.value })
                          }
                          rows={4}
                          className="mt-2 flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                          placeholder="Tell us about yourself..."
                        />
                      </div>

                      <div className="flex justify-end">
                        <Button>Save Changes</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Notifications Panel */}
              <TabsContent value="notifications">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Notification Settings
                    </h2>

                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-sm font-medium text-gray-900">
                            Email Notifications
                          </h3>
                          <p className="text-sm text-gray-500">
                            Receive notifications via email
                          </p>
                        </div>
                        <ToggleSwitch
                          checked={notifications.emailNotifications}
                          onChange={() =>
                            setNotifications({
                              ...notifications,
                              emailNotifications: !notifications.emailNotifications,
                            })
                          }
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-sm font-medium text-gray-900">
                            Push Notifications
                          </h3>
                          <p className="text-sm text-gray-500">
                            Receive push notifications in your browser
                          </p>
                        </div>
                        <ToggleSwitch
                          checked={notifications.pushNotifications}
                          onChange={() =>
                            setNotifications({
                              ...notifications,
                              pushNotifications: !notifications.pushNotifications,
                            })
                          }
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-sm font-medium text-gray-900">
                            Weekly Digest
                          </h3>
                          <p className="text-sm text-gray-500">
                            Receive a weekly summary of activity
                          </p>
                        </div>
                        <ToggleSwitch
                          checked={notifications.weeklyDigest}
                          onChange={() =>
                            setNotifications({
                              ...notifications,
                              weeklyDigest: !notifications.weeklyDigest,
                            })
                          }
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Security Panel */}
              <TabsContent value="security">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Security Settings
                    </h2>

                    <div className="space-y-6">
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
                            <Button variant="outline" className="mt-3">
                              Update Password
                            </Button>
                          </div>
                        </div>
                      </div>

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
                            <Button className="mt-3">Enable 2FA</Button>
                          </div>
                        </div>
                      </div>

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
                                Chrome on MacOS - Last active now
                              </p>
                            </div>
                            <Badge className="bg-green-100 text-green-800">
                              Active
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Billing Panel */}
              <TabsContent value="billing">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Billing Settings
                    </h2>

                    <div className="space-y-6">
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
                              $29/month - Renews on Nov 17, 2025
                            </p>
                          </div>
                          <Button variant="outline">Change Plan</Button>
                        </div>
                      </div>

                      <div className="border-b border-gray-200 pb-6">
                        <h3 className="text-sm font-medium text-gray-900 mb-4">
                          Payment Method
                        </h3>
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-center">
                            <CreditCardIcon className="h-6 w-6 text-gray-400" />
                            <div className="ml-3">
                              <p className="text-sm font-medium text-gray-900">
                                **** **** **** 4242
                              </p>
                              <p className="text-xs text-gray-500">Expires 12/26</p>
                            </div>
                          </div>
                          <Button variant="outline">Update</Button>
                        </div>
                      </div>

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
                              <Button variant="link" className="text-xs p-0 h-auto">
                                Download
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Preferences Panel */}
              <TabsContent value="preferences">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Preferences
                    </h2>

                    <div className="space-y-6">
                      {/* Theme */}
                      <div>
                        <Label className="mb-3 block">Theme</Label>
                        <div className="grid grid-cols-3 gap-4">
                          {["light", "dark", "auto"].map((t) => (
                            <button
                              key={t}
                              onClick={() => setTheme(t)}
                              className={cn(
                                "border-2 rounded-lg p-4 text-center hover:border-blue-400 transition-colors",
                                theme === t
                                  ? "border-blue-500 ring-2 ring-blue-500"
                                  : "border-gray-300"
                              )}
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
                        <Label htmlFor="language">Language</Label>
                        <div className="flex items-center mt-2">
                          <GlobeAltIcon className="h-5 w-5 text-gray-400 mr-2" />
                          <select
                            id="language"
                            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                          >
                            <option>English</option>
                            <option>Spanish</option>
                            <option>French</option>
                            <option>German</option>
                          </select>
                        </div>
                      </div>

                      {/* Time Zone */}
                      <div>
                        <Label htmlFor="timezone">Time Zone</Label>
                        <select
                          id="timezone"
                          className="mt-2 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        >
                          <option>UTC-8 (Pacific Time)</option>
                          <option>UTC-5 (Eastern Time)</option>
                          <option>UTC+0 (London)</option>
                          <option>UTC+1 (Paris)</option>
                        </select>
                      </div>

                      <div className="flex justify-end">
                        <Button>Save Preferences</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  )
}

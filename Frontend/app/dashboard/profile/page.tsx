'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { User, Settings, Award, FileText } from 'lucide-react'
import { useState } from 'react'

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: 'Anjali Patel',
    email: 'anjali@example.com',
    phone: '+91 98765 43210',
    city: 'Bangalore',
    state: 'Karnataka',
    businessName: 'AJ Handmade Creations',
    businessType: 'Handicrafts & E-commerce',
    bio: 'Passionate about sustainable craftsmanship and empowering rural artisans.',
    joinDate: 'January 2024',
  })

  const achievements = [
    { icon: '🎓', title: 'Course Completion', description: 'Completed 3 courses' },
    { icon: '🏆', title: 'Mentor Connection', description: 'Connected with 2 mentors' },
    { icon: '💼', title: 'Opportunity Applied', description: 'Applied to 5 opportunities' },
    { icon: '⭐', title: 'Community Star', description: 'Helping 10+ entrepreneurs' },
  ]

  return (
    <div className="p-6 md:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          My Profile
        </h1>
        <p className="text-muted-foreground">
          Manage your account and view your achievements
        </p>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile" className="mt-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Profile Picture */}
            <Card className="p-6 md:col-span-1">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mb-4">
                <User className="w-16 h-16 text-primary/50" />
              </div>
              <Button variant="outline" className="w-full mb-2">
                Change Photo
              </Button>
              <Button variant="outline" className="w-full">
                Remove Photo
              </Button>
            </Card>

            {/* Profile Information */}
            <Card className="p-6 md:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-foreground">Personal Information</h2>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  {isEditing ? 'Save' : 'Edit'}
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={profile.name}
                    onChange={(e) =>
                      setProfile({ ...profile, name: e.target.value })
                    }
                    disabled={!isEditing}
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    value={profile.email}
                    onChange={(e) =>
                      setProfile({ ...profile, email: e.target.value })
                    }
                    disabled={!isEditing}
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={profile.phone}
                    onChange={(e) =>
                      setProfile({ ...profile, phone: e.target.value })
                    }
                    disabled={!isEditing}
                  />
                </div>

                {/* City */}
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    value={profile.city}
                    onChange={(e) =>
                      setProfile({ ...profile, city: e.target.value })
                    }
                    disabled={!isEditing}
                  />
                </div>

                {/* State */}
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input
                    id="state"
                    value={profile.state}
                    onChange={(e) =>
                      setProfile({ ...profile, state: e.target.value })
                    }
                    disabled={!isEditing}
                  />
                </div>
              </div>
            </Card>
          </div>

          {/* Business Information */}
          <Card className="p-6 mt-8">
            <h2 className="text-xl font-semibold text-foreground mb-6">Business Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="businessName">Business Name</Label>
                <Input
                  id="businessName"
                  value={profile.businessName}
                  onChange={(e) =>
                    setProfile({ ...profile, businessName: e.target.value })
                  }
                  disabled={!isEditing}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="businessType">Business Type</Label>
                <Input
                  id="businessType"
                  value={profile.businessType}
                  onChange={(e) =>
                    setProfile({ ...profile, businessType: e.target.value })
                  }
                  disabled={!isEditing}
                />
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="bio">Bio</Label>
                <textarea
                  id="bio"
                  value={profile.bio}
                  onChange={(e) =>
                    setProfile({ ...profile, bio: e.target.value })
                  }
                  disabled={!isEditing}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground disabled:opacity-50"
                  rows={4}
                />
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Achievements Tab */}
        <TabsContent value="achievements" className="mt-6">
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement) => (
              <Card key={achievement.title} className="p-6 text-center">
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h3 className="font-semibold text-foreground mb-2">
                  {achievement.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Certificates */}
          <Card className="p-8 mt-8">
            <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Certificates & Awards
            </h2>
            <div className="space-y-3">
              <div className="border border-border rounded-lg p-4 flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">
                    Digital Marketing Excellence
                  </p>
                  <p className="text-sm text-muted-foreground">Completed - Social Media Mastery</p>
                </div>
                <Button size="sm" variant="outline">
                  Download
                </Button>
              </div>
              <div className="border border-border rounded-lg p-4 flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">
                    Entrepreneurship Foundation
                  </p>
                  <p className="text-sm text-muted-foreground">Completed - Business Basics</p>
                </div>
                <Button size="sm" variant="outline">
                  Download
                </Button>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Settings Tab */}
        <TabsContent value="settings" className="mt-6">
          <div className="space-y-6">
            {/* Notifications */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Notification Preferences
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label htmlFor="email-notif" className="text-foreground">
                    Email Notifications
                  </label>
                  <input type="checkbox" id="email-notif" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <label htmlFor="course-notif" className="text-foreground">
                    Course Updates
                  </label>
                  <input type="checkbox" id="course-notif" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <label htmlFor="opportunity-notif" className="text-foreground">
                    New Opportunities
                  </label>
                  <input type="checkbox" id="opportunity-notif" defaultChecked />
                </div>
              </div>
            </Card>

            {/* Privacy */}
            <Card className="p-6">
              <h2 className="text-lg font-semibold text-foreground mb-4">
                Privacy Settings
              </h2>
              <Button variant="outline" className="w-full md:w-auto">
                View Privacy Policy
              </Button>
            </Card>

            {/* Danger Zone */}
            <Card className="p-6 border-destructive/20">
              <h2 className="text-lg font-semibold text-foreground mb-4">
                Danger Zone
              </h2>
              <div className="space-y-3">
                <Button variant="outline" className="w-full md:w-auto">
                  Change Password
                </Button>
                <Button
                  variant="outline"
                  className="w-full md:w-auto text-destructive hover:text-destructive"
                >
                  Delete Account
                </Button>
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

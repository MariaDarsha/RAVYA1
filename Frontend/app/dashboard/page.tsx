'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import Link from 'next/link'
import { BookOpen, Zap, Users, Trophy } from 'lucide-react'

export default function Dashboard() {
  const recentActivity = [
    { title: 'Digital Marketing Basics', progress: 65, type: 'course' },
    { title: 'Financial Planning 101', progress: 45, type: 'course' },
    { title: 'Leadership Skills', progress: 80, type: 'course' },
  ]

  const quickStats = [
    { label: 'Courses in Progress', value: '3', icon: BookOpen, color: 'text-primary' },
    { label: 'Mentorship Hours', value: '12', icon: Users, color: 'text-secondary' },
    { label: 'Opportunities Applied', value: '5', icon: Zap, color: 'text-orange-500' },
    { label: 'Achievements', value: '8', icon: Trophy, color: 'text-yellow-500' },
  ]

  return (
    <div className="p-6 md:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Welcome back, Entrepreneur!
        </h1>
        <p className="text-muted-foreground">
          Track your progress and continue your learning journey
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {quickStats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.label} className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-muted-foreground text-sm font-medium">
                  {stat.label}
                </span>
                <Icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
            </Card>
          )
        })}
      </div>

      {/* Active Courses */}
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-foreground mb-6">Active Courses</h2>
          <div className="space-y-6">
            {recentActivity.map((activity) => (
              <div key={activity.title}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-foreground">{activity.title}</span>
                  <span className="text-sm text-muted-foreground">{activity.progress}%</span>
                </div>
                <Progress value={activity.progress} className="h-2" />
              </div>
            ))}
          </div>
          <Link href="/dashboard/learn">
            <Button variant="outline" className="w-full mt-6">
              View All Courses
            </Button>
          </Link>
        </Card>

        {/* Quick Actions */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-foreground mb-6">Quick Actions</h2>
          <div className="space-y-3">
            <Link href="/dashboard/learn">
              <Button variant="outline" className="w-full justify-start">
                <BookOpen className="w-4 h-4 mr-2" />
                Start a New Course
              </Button>
            </Link>
            <Link href="/dashboard/build">
              <Button variant="outline" className="w-full justify-start">
                <Zap className="w-4 h-4 mr-2" />
                Explore Opportunities
              </Button>
            </Link>
            <Link href="/dashboard/connect">
              <Button variant="outline" className="w-full justify-start">
                <Users className="w-4 h-4 mr-2" />
                Connect with a Mentor
              </Button>
            </Link>
          </div>
        </Card>
      </div>

      {/* Upcoming Events */}
      <Card className="p-6 mt-8">
        <h2 className="text-xl font-semibold text-foreground mb-4">Upcoming Events</h2>
        <div className="space-y-3">
          <div className="border border-border rounded-lg p-4">
            <p className="font-medium text-foreground">Women Entrepreneurs Webinar</p>
            <p className="text-sm text-muted-foreground">March 10, 2024 - 2:00 PM</p>
          </div>
          <div className="border border-border rounded-lg p-4">
            <p className="font-medium text-foreground">Financial Planning Workshop</p>
            <p className="text-sm text-muted-foreground">March 15, 2024 - 3:30 PM</p>
          </div>
        </div>
      </Card>
    </div>
  )
}

'use client'

import { CourseCard } from '@/components/course-card'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Search } from 'lucide-react'

export default function LearnPage() {
  const courses = [
    {
      id: 1,
      title: 'Digital Marketing Basics',
      description: 'Learn the fundamentals of digital marketing and grow your online presence.',
      progress: 65,
      isCompleted: false,
      category: 'Marketing',
      duration: '8 weeks',
    },
    {
      id: 2,
      title: 'Financial Planning 101',
      description: 'Master the essentials of personal and business financial management.',
      progress: 45,
      isCompleted: false,
      category: 'Finance',
      duration: '6 weeks',
    },
    {
      id: 3,
      title: 'Social Media Mastery',
      description: 'Create engaging content and build a loyal audience on social platforms.',
      progress: 100,
      isCompleted: true,
      category: 'Social Media',
      duration: '4 weeks',
    },
    {
      id: 4,
      title: 'Business Basics',
      description: 'Start your entrepreneurial journey with business fundamentals.',
      progress: 25,
      isCompleted: false,
      category: 'Business',
      duration: '10 weeks',
    },
    {
      id: 5,
      title: 'Leadership Skills',
      description: 'Develop strong leadership qualities for your business and team.',
      progress: 80,
      isCompleted: false,
      category: 'Leadership',
      duration: '8 weeks',
    },
    {
      id: 6,
      title: 'E-commerce Essentials',
      description: 'Build and manage your online store successfully.',
      progress: 0,
      isCompleted: false,
      category: 'E-commerce',
      duration: '7 weeks',
    },
  ]

  const completedCourses = courses.filter((c) => c.isCompleted)
  const inProgressCourses = courses.filter((c) => !c.isCompleted && c.progress > 0)
  const notStartedCourses = courses.filter((c) => c.progress === 0)

  return (
    <div className="p-6 md:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Learning Modules
        </h1>
        <p className="text-muted-foreground">
          Expand your skills with our curated courses designed for entrepreneurs
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search courses..."
            className="pl-10"
          />
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="not-started">New</TabsTrigger>
        </TabsList>

        {/* All Courses */}
        <TabsContent value="all" className="space-y-4 mt-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </TabsContent>

        {/* In Progress */}
        <TabsContent value="in-progress" className="space-y-4 mt-6">
          {inProgressCourses.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {inProgressCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          ) : (
            <Card className="p-12 text-center">
              <p className="text-muted-foreground">No courses in progress yet.</p>
              <p className="text-sm text-muted-foreground mt-1">
                Start a new course to begin learning!
              </p>
            </Card>
          )}
        </TabsContent>

        {/* Completed */}
        <TabsContent value="completed" className="space-y-4 mt-6">
          {completedCourses.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          ) : (
            <Card className="p-12 text-center">
              <p className="text-muted-foreground">No completed courses yet.</p>
            </Card>
          )}
        </TabsContent>

        {/* Not Started */}
        <TabsContent value="not-started" className="space-y-4 mt-6">
          {notStartedCourses.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {notStartedCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          ) : (
            <Card className="p-12 text-center">
              <p className="text-muted-foreground">All courses have been started!</p>
            </Card>
          )}
        </TabsContent>
      </Tabs>

      {/* Video Section */}
      <Card className="p-8 mt-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">Current Lesson</h2>
        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <div className="w-0 h-0 border-l-8 border-l-primary border-t-5 border-t-transparent border-b-5 border-b-transparent ml-1" />
            </div>
            <p className="text-muted-foreground">Video player placeholder</p>
          </div>
        </div>
        <p className="text-muted-foreground">
          Click play to start watching the lesson. You can adjust playback speed and enable subtitles.
        </p>
      </Card>
    </div>
  )
}

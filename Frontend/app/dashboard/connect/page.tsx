'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { MessageCircle, Users, AlertCircle, Send } from 'lucide-react'
import { useState } from 'react'

export default function ConnectPage() {
  const [message, setMessage] = useState('')

  const mentors = [
    {
      id: 1,
      name: 'Priya Sharma',
      expertise: 'Digital Marketing & E-commerce',
      bio: 'Founder of 3 successful businesses. Passionate about mentoring women entrepreneurs.',
      availability: 'Available',
      rating: 4.8,
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      expertise: 'Financial Planning & Investments',
      bio: 'CFO with 15 years experience. Specialized in startup finance.',
      availability: 'Available',
      rating: 4.9,
    },
    {
      id: 3,
      name: 'Anjali Verma',
      expertise: 'Rural Business Development',
      bio: 'NGO founder working on sustainable agriculture businesses.',
      availability: 'Busy',
      rating: 4.7,
    },
    {
      id: 4,
      name: 'Vikram Singh',
      expertise: 'Product Development & Operations',
      bio: 'Built and scaled 2 tech companies. Now focused on mentorship.',
      availability: 'Available',
      rating: 4.8,
    },
  ]

  const networkingCards = [
    {
      id: 1,
      name: 'Deepa Reddy',
      title: 'E-commerce Entrepreneur',
      industry: 'Fashion & Textiles',
      location: 'Bangalore',
    },
    {
      id: 2,
      name: 'Fatima Khan',
      title: 'Agricultural Innovator',
      industry: 'AgriTech',
      location: 'Gujarat',
    },
    {
      id: 3,
      name: 'Neha Desai',
      title: 'Food Entrepreneur',
      industry: 'Food & Beverage',
      location: 'Maharashtra',
    },
  ]

  return (
    <div className="p-6 md:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Connect & Grow
        </h1>
        <p className="text-muted-foreground">
          Network with mentors, peers, and build meaningful relationships
        </p>
      </div>

      <Tabs defaultValue="mentor-chat" className="w-full">
        <TabsList className="grid w-full max-w-2xl grid-cols-4">
          <TabsTrigger value="mentor-chat">AI Mentor</TabsTrigger>
          <TabsTrigger value="mentors">Find Mentor</TabsTrigger>
          <TabsTrigger value="networking">Network</TabsTrigger>
          <TabsTrigger value="grievance">Help</TabsTrigger>
        </TabsList>

        {/* AI Mentor Chat */}
        <TabsContent value="mentor-chat" className="mt-6">
          <Card className="p-6 h-96 md:h-96 flex flex-col">
            <h2 className="text-lg font-semibold text-foreground mb-4">AI Mentor Chat</h2>
            
            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto mb-4 space-y-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex-shrink-0" />
                <div className="bg-muted rounded-lg p-4 max-w-xs">
                  <p className="text-sm text-foreground">
                    Hello! I'm your AI mentor. How can I help you with your business today?
                  </p>
                </div>
              </div>
              <div className="flex gap-3 justify-end">
                <div className="bg-primary text-primary-foreground rounded-lg p-4 max-w-xs">
                  <p className="text-sm">I need help with digital marketing strategy</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex-shrink-0" />
                <div className="bg-muted rounded-lg p-4 max-w-xs">
                  <p className="text-sm text-foreground">
                    Great! I can help you develop a digital marketing strategy. Let's start by...
                  </p>
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="flex gap-2">
              <Input
                placeholder="Ask your mentor..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1"
              />
              <Button size="icon" className="bg-primary hover:bg-primary/90">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        </TabsContent>

        {/* Find Mentors */}
        <TabsContent value="mentors" className="mt-6">
          <div className="space-y-4">
            {mentors.map((mentor) => (
              <Card key={mentor.id} className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{mentor.name}</h3>
                      <Badge variant="secondary">{mentor.expertise}</Badge>
                    </div>
                    <p className="text-muted-foreground mb-3">{mentor.bio}</p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-semibold text-foreground">
                          {mentor.rating}★
                        </span>
                        <span className="text-sm text-muted-foreground">Rating</span>
                      </div>
                      <Badge
                        variant={
                          mentor.availability === 'Available'
                            ? 'secondary'
                            : 'destructive'
                        }
                      >
                        {mentor.availability}
                      </Badge>
                    </div>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90 md:flex-shrink-0">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Connect
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Networking */}
        <TabsContent value="networking" className="mt-6">
          <div className="mb-6">
            <Input placeholder="Search networking community..." />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {networkingCards.map((person) => (
              <Card key={person.id} className="p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/20 mb-4" />
                <h3 className="font-semibold text-foreground mb-1">{person.name}</h3>
                <p className="text-sm text-primary mb-2">{person.title}</p>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Industry:</span> {person.industry}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Location:</span> {person.location}
                  </p>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  <Users className="w-4 h-4 mr-2" />
                  Connect
                </Button>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Grievance/Help */}
        <TabsContent value="grievance" className="mt-6">
          <Card className="p-8 max-w-2xl">
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              Need Help?
            </h2>
            <p className="text-muted-foreground mb-6">
              Submit a grievance or request assistance. Our support team will get back to you within 24 hours.
            </p>

            <form className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Subject</label>
                <Input placeholder="What do you need help with?" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Category</label>
                <select className="w-full px-4 py-2 rounded-lg border border-border bg-background">
                  <option>Technical Issue</option>
                  <option>Course Related</option>
                  <option>Funding Question</option>
                  <option>Mentor Connection</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Description</label>
                <Textarea
                  placeholder="Please describe your issue in detail..."
                  className="min-h-32"
                />
              </div>

              <Button className="bg-primary hover:bg-primary/90">
                <AlertCircle className="w-4 h-4 mr-2" />
                Submit Grievance
              </Button>
            </form>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

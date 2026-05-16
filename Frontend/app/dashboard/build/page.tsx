'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Search, Upload, IndianRupee, Briefcase } from 'lucide-react'

export default function BuildPage() {
  const opportunities = [
    {
      id: 1,
      title: 'Women Tech Entrepreneurs Grant',
      description: 'Grant up to ₹5 lakhs for tech-based startups founded by women.',
      amount: '₹5,00,000',
      deadline: 'April 30, 2024',
      category: 'Grants',
      status: 'open',
    },
    {
      id: 2,
      title: 'Rural Business Loan Program',
      description: 'Easy-to-access loans for rural entrepreneurs with mentorship support.',
      amount: '₹10,00,000',
      deadline: 'May 15, 2024',
      category: 'Loans',
      status: 'open',
    },
    {
      id: 3,
      title: 'Startup Incubation Program',
      description: 'Join our 6-month incubation with funding and expert guidance.',
      amount: '₹25,00,000',
      deadline: 'March 31, 2024',
      category: 'Incubation',
      status: 'closing-soon',
    },
    {
      id: 4,
      title: 'E-commerce Support Initiative',
      description: 'Get tools and training to launch your online store. Discount on platform fees.',
      amount: 'Varies',
      deadline: 'Ongoing',
      category: 'Support',
      status: 'open',
    },
    {
      id: 5,
      title: 'Women Cooperative Fund',
      description: 'Funding for cooperative business models with government backing.',
      amount: '₹15,00,000',
      deadline: 'April 15, 2024',
      category: 'Cooperative',
      status: 'open',
    },
    {
      id: 6,
      title: 'Agricultural Tech Innovation Grant',
      description: 'Support for tech solutions in agriculture and agribusiness.',
      amount: '₹8,00,000',
      deadline: 'June 1, 2024',
      category: 'Agriculture',
      status: 'open',
    },
  ]

  return (
    <div className="p-6 md:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Build Your Business
        </h1>
        <p className="text-muted-foreground">
          Access funding, opportunities, and resources to grow your venture
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-8">
        {/* Funding Card */}
        <Card className="lg:col-span-1 p-8 bg-gradient-to-br from-secondary/10 to-secondary/5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-secondary text-white flex items-center justify-center">
              <IndianRupee className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Funding Available</p>
              <p className="text-2xl font-bold text-foreground">₹50+ Cr</p>
            </div>
          </div>
          <Button className="w-full bg-secondary hover:bg-secondary/90">
            View Funding Options
          </Button>
        </Card>

        {/* Quick Upload */}
        <Card className="lg:col-span-1 p-8 bg-gradient-to-br from-primary/10 to-primary/5">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-primary text-white flex items-center justify-center">
              <Upload className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Share Your Idea</p>
              <p className="text-2xl font-bold text-foreground">Upload Pitch</p>
            </div>
          </div>
          <Button variant="outline" className="w-full">
            Upload Business Plan
          </Button>
        </Card>

        {/* Active Opportunities */}
        <Card className="lg:col-span-1 p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-orange-500/20 text-orange-500 flex items-center justify-center">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Active Opportunities</p>
              <p className="text-2xl font-bold text-foreground">{opportunities.filter(o => o.status === 'open').length}</p>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            Click below to explore all available opportunities
          </div>
        </Card>
      </div>

      {/* Search and Tabs */}
      <div className="mb-6">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search opportunities..."
            className="pl-10"
          />
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="open">Open</TabsTrigger>
          <TabsTrigger value="applied">Applied</TabsTrigger>
        </TabsList>

        {/* All Opportunities */}
        <TabsContent value="all" className="space-y-4 mt-6">
          <div className="space-y-4">
            {opportunities.map((opp) => (
              <Card key={opp.id} className="p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{opp.title}</h3>
                      <Badge
                        variant={opp.status === 'closing-soon' ? 'destructive' : 'secondary'}
                      >
                        {opp.status === 'closing-soon' ? 'Closing Soon' : 'Open'}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-3">{opp.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Funding: </span>
                        <span className="font-semibold text-foreground">{opp.amount}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Deadline: </span>
                        <span className="font-semibold text-foreground">{opp.deadline}</span>
                      </div>
                      <Badge variant="outline">{opp.category}</Badge>
                    </div>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90 md:flex-shrink-0">
                    Apply Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Open Opportunities */}
        <TabsContent value="open" className="space-y-4 mt-6">
          <div className="space-y-4">
            {opportunities
              .filter((o) => o.status === 'open')
              .map((opp) => (
                <Card key={opp.id} className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {opp.title}
                      </h3>
                      <p className="text-muted-foreground mb-3">{opp.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Funding: </span>
                          <span className="font-semibold text-foreground">{opp.amount}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Deadline: </span>
                          <span className="font-semibold text-foreground">{opp.deadline}</span>
                        </div>
                      </div>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90 md:flex-shrink-0">
                      Apply Now
                    </Button>
                  </div>
                </Card>
              ))}
          </div>
        </TabsContent>

        {/* Applied */}
        <TabsContent value="applied" className="mt-6">
          <Card className="p-12 text-center">
            <p className="text-muted-foreground">No applications yet.</p>
            <p className="text-sm text-muted-foreground mt-1">
              Start by applying to opportunities that match your business goals!
            </p>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

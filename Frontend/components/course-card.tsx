import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { CheckCircle2 } from 'lucide-react'

interface CourseCardProps {
  title: string
  description: string
  progress: number
  isCompleted: boolean
  category: string
  duration: string
}

export function CourseCard({
  title,
  description,
  progress,
  isCompleted,
  category,
  duration,
}: CourseCardProps) {
  return (
    <Card className="p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <Badge variant="secondary" className="mb-2">
            {category}
          </Badge>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        </div>
        {isCompleted && (
          <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 ml-2" />
        )}
      </div>

      <p className="text-sm text-muted-foreground mb-4">{description}</p>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-foreground">Progress</span>
          <span className="text-sm text-muted-foreground">{progress}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">{duration}</span>
        <Button size="sm" className="bg-primary hover:bg-primary/90">
          {isCompleted ? 'Review' : 'Continue'}
        </Button>
      </div>
    </Card>
  )
}

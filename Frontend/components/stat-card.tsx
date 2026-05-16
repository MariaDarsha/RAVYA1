import React from 'react'

interface StatCardProps {
  statistic: string
  description: string
}

export function StatCard({ statistic, description }: StatCardProps) {
  return (
    <div className="text-center card-interactive bg-gradient-to-br from-white/50 to-primary/5 rounded-xl p-8 border border-primary/10 hover:border-primary/30">
      <div className="text-5xl font-bold gradient-text mb-3 animate-bounce-soft">{statistic}</div>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  )
}

import { Trophy, Users, Eye, GamepadIcon } from 'lucide-react';
import { useCompanyStats } from '@/hooks/useRobloxStats';
import { AnimatedCounter } from '@/components/AnimatedCounter';

export const LiveStatsSection = () => {
  const { companyStats, loading } = useCompanyStats();

  if (loading) {
    return (
      <section className="py-20 px-6 bg-gradient-to-br from-background to-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-secondary mb-4">
              Live Company Stats
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="stat-card animate-pulse">
                <div className="h-12 bg-muted rounded mb-4" />
                <div className="h-8 bg-muted rounded mb-2" />
                <div className="h-4 bg-muted rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const stats = [
    {
      icon: GamepadIcon,
      label: 'Games Published',
      value: companyStats.totalGames,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      delay: '0s'
    },
    {
      icon: Users,
      label: 'Active Players',
      value: companyStats.totalPlayers,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      delay: '0.1s'
    },
    {
      icon: Eye,
      label: 'Total Visits',
      value: companyStats.totalVisits,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      delay: '0.2s'
    },
    {
      icon: Trophy,
      label: 'Average Rating',
      value: companyStats.averageRating,
      suffix: '/5.0',
      color: 'text-warning',
      bgColor: 'bg-warning/10',
      delay: '0.3s'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-secondary mb-4">
            Live Company Stats
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Real-time statistics showcasing our impact in the gaming community. 
            Updated every 30 seconds with live data from Roblox.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={stat.label}
                className="stat-card text-center animate-scale-in group"
                style={{ animationDelay: stat.delay }}
              >
                <div className={`inline-flex p-4 rounded-full ${stat.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                
                <div className="mb-4">
                  <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                    <AnimatedCounter 
                      end={stat.value} 
                      suffix={stat.suffix || ''}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {stat.label}
                  </h3>
                </div>

                {/* Additional Info */}
                <div className="text-sm text-muted-foreground">
                  {stat.label === 'Games Published' && 'Quality over quantity'}
                  {stat.label === 'Active Players' && 'Players online now'}
                  {stat.label === 'Total Visits' && 'All-time game visits'}
                  {stat.label === 'Average Rating' && 'Community rating'}
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Update Indicator */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Live updates every 30 seconds
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
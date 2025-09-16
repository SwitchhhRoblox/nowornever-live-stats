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
      value: 2,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      delay: '0s'
    },
    {
      icon: Users,
      label: 'Peak Active Players',
      value: 2100,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      delay: '0.1s'
    },
    {
      icon: Eye,
      label: 'Total Visits',
      value: 3000000,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      delay: '0.2s'
    },
    {
      icon: Trophy,
      label: 'Average Rating',
      value: 100,
      suffix: '%',
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
            Company Statistics
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Our achievements and milestones in the gaming industry
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
                  {stat.label === 'Peak Active Players' && 'Record concurrent players'}
                  {stat.label === 'Total Visits' && 'All-time game visits'}
                  {stat.label === 'Average Rating' && 'Community satisfaction'}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
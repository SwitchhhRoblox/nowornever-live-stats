import { Target, Lightbulb, Rocket, Users } from 'lucide-react';
import { useCompanyStats } from '@/hooks/useRobloxStats';
import { AnimatedCounter } from '@/components/AnimatedCounter';

export const AboutSection = () => {
  const { companyStats, loading } = useCompanyStats();

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for perfection in every game we create, ensuring quality that exceeds player expectations.',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible in gaming, creating unique and engaging experiences.',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    },
    {
      icon: Rocket,
      title: 'Growth',
      description: 'We\'re committed to continuous improvement and expanding our reach to players worldwide.',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Our players are at the heart of everything we do. We build games that bring people together.',
      color: 'text-warning',
      bgColor: 'bg-warning/10'
    }
  ];

  const quickStats = [
    {
      label: 'Active Players',
      value: companyStats.totalPlayers,
      color: 'text-primary'
    },
    {
      label: 'Total Visits',
      value: companyStats.totalVisits,
      color: 'text-secondary'
    },
    {
      label: 'Games Published',
      value: companyStats.totalGames,
      color: 'text-accent'
    },
    {
      label: 'Average Rating',
      value: companyStats.averageRating,
      suffix: '/5.0',
      color: 'text-warning'
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-br from-muted/20 to-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4">
            About NowOrNever
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story */}
          <div className="space-y-6 animate-slide-in-left">
            <h3 className="text-3xl font-bold text-foreground">
              Our Story
            </h3>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded with a vision to revolutionize gaming experiences, <span className="text-gradient-primary font-semibold">NowOrNever</span> emerged 
                from a passion for creating games that matter. We believe that every player deserves 
                an experience that captivates, challenges, and inspires.
              </p>
              <p>
                Our journey began with a simple question: "What if we could create games that not only 
                entertain but also bring communities together?" This question drives everything we do, 
                from our innovative game mechanics to our player-first development philosophy.
              </p>
              <p>
                Today, we're proud to serve thousands of active players with our flagship title, 
                <span className="text-gradient-secondary font-semibold"> Soccer Impact</span>, 
                and we're just getting started. The future holds endless possibilities for interactive entertainment.
              </p>
            </div>
            
            {/* Mission Statement */}
            <div className="bg-card border border-border rounded-lg p-6 mt-8">
              <h4 className="text-xl font-bold text-gradient-secondary mb-3">Our Mission</h4>
              <p className="text-muted-foreground italic">
                "To create gaming experiences that push the boundaries of creativity, foster global communities, 
                and leave lasting impressions on players worldwide."
              </p>
            </div>
          </div>

          {/* Core Values Section */}
          <div className="space-y-8 animate-slide-in-right">
            <h3 className="text-3xl font-bold text-foreground text-center">
              Our Philosophy
            </h3>
            
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="text-xl font-bold text-gradient-secondary mb-3">Quality First</h4>
              <p className="text-muted-foreground">
                We believe in creating fewer, better games rather than rushing to market. Every project receives 
                the attention and polish it deserves to deliver exceptional player experiences.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="text-xl font-bold text-gradient-primary mb-3">Community Driven</h4>
              <p className="text-muted-foreground">
                Our players inspire everything we do. We listen, we adapt, and we create games that bring 
                people together in meaningful ways.
              </p>
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12 animate-fade-in">
            Our Core Values
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div 
                  key={value.title}
                  className="card-game text-center group animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`inline-flex p-4 rounded-full ${value.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${value.color}`} />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-4">{value.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Join Our Journey?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you're a player looking for your next adventure or a developer wanting to create 
              something amazing, we'd love to connect with you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="btn-gaming"
                onClick={() => window.open('https://www.roblox.com/games/86232037320791/Soccer-Impact', '_blank')}
              >
                Play Our Games
              </button>
              <button 
                className="btn-secondary-gaming"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
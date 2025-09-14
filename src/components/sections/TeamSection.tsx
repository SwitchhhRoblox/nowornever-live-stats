import { Crown, Plus, Mail, Linkedin, Twitter } from 'lucide-react';

export const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Switch',
      role: 'CEO & Founder',
      description: 'Visionary leader driving NowOrNever to create revolutionary gaming experiences that captivate millions worldwide.',
      icon: Crown,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/30',
      isFounder: true
    },
    {
      name: 'You Next?',
      role: 'Join Our Team',
      description: 'We\'re always looking for talented developers, designers, and creative minds to join our growing team.',
      icon: Plus,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      borderColor: 'border-secondary/30',
      isHiring: true
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4">
            Meet Our Team
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            The creative minds behind NowOrNever's success. We're a passionate team 
            dedicated to pushing the boundaries of gaming innovation.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => {
            const Icon = member.icon;
            return (
              <div 
                key={member.name}
                className={`card-game group animate-slide-in-${index % 2 === 0 ? 'left' : 'right'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Card Header */}
                <div className="flex items-center mb-6">
                  <div className={`p-4 rounded-full ${member.bgColor} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${member.color}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {member.name}
                    </h3>
                    <p className={`text-lg font-semibold ${member.color}`}>
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {member.description}
                </p>

                {/* Action Area */}
                {member.isFounder ? (
                  <div className="space-y-4">
                    {/* Achievements */}
                    <div className="flex flex-wrap gap-2">
                      {['Visionary Leader', 'Game Designer', 'Tech Innovator'].map((badge) => (
                        <span 
                          key={badge}
                          className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                    
                    {/* Social Links (placeholder) */}
                    <div className="flex gap-3">
                      <button className="p-2 bg-muted hover:bg-primary/20 rounded-full transition-colors">
                        <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary" />
                      </button>
                      <button className="p-2 bg-muted hover:bg-primary/20 rounded-full transition-colors">
                        <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" />
                      </button>
                      <button className="p-2 bg-muted hover:bg-primary/20 rounded-full transition-colors">
                        <Mail className="w-5 h-5 text-muted-foreground hover:text-primary" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* Open Positions */}
                    <div className="space-y-2">
                      {['Game Developer', 'UI/UX Designer', 'Marketing Specialist'].map((position) => (
                        <div key={position} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-secondary rounded-full" />
                          <span className="text-muted-foreground">{position}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Apply Button */}
                    <button 
                      className="btn-secondary-gaming w-full inline-flex items-center justify-center gap-2"
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      <Mail className="w-5 h-5" />
                      Get In Touch
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { label: 'Team Members', value: '2+', color: 'text-primary' },
            { label: 'Years Experience', value: '5+', color: 'text-secondary' },
            { label: 'Games Shipped', value: '1+', color: 'text-accent' }
          ].map((stat, index) => (
            <div key={stat.label} className="stat-card text-center animate-scale-in" style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
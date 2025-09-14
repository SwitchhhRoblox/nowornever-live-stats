import { useState } from 'react';
import { Mail, Send, MessageSquare, User, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@noworneever.com',
      description: 'General inquiries and partnerships'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Remote Team',
      description: 'Working globally, thinking locally'
    },
    {
      icon: Clock,
      title: 'Response Time',
      content: '< 24 Hours',
      description: 'We pride ourselves on quick responses'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Have a question, want to collaborate, or interested in joining our team? 
            We'd love to hear from you. Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-slide-in-left">
            <div className="card-game">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary/10 rounded-full mr-4">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Send us a Message</h3>
                  <p className="text-muted-foreground">We'll respond within 24 hours</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-input border-border focus:ring-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-input border-border focus:ring-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Your Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project, question, or just say hello..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-input border-border focus:ring-primary min-h-[120px] resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gaming w-full"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-right">
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div 
                    key={info.title}
                    className="card-game animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-secondary/10 rounded-full">
                        <Icon className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-foreground mb-2">
                          {info.title}
                        </h4>
                        <p className="text-lg text-gradient-secondary font-semibold mb-1">
                          {info.content}
                        </p>
                        <p className="text-muted-foreground">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className="card-game bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
              <h4 className="text-xl font-bold text-foreground mb-4">
                Why Partner With Us?
              </h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <span>Experienced team with proven track record</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2" />
                  <span>Innovative approach to game development</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2" />
                  <span>Strong community focus and engagement</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-warning rounded-full mt-2" />
                  <span>Commitment to quality and player satisfaction</span>
                </li>
              </ul>
            </div>

            {/* Quick Contact Actions */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Quick Actions</h4>
              <div className="grid grid-cols-1 gap-3">
                <button 
                  className="btn-secondary-gaming justify-start"
                  onClick={() => window.open('https://www.roblox.com/games/79021943931147/NEW-Brainrot-Tower-Defense', '_blank')}
                >
                  Play Our Featured Game
                </button>
                <button 
                  className="btn-secondary-gaming justify-start"
                  onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Career Opportunities
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
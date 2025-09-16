import { ExternalLink, Users, Gamepad2 } from 'lucide-react';
import { useGameInfo } from '@/hooks/useRobloxStats';

export const FeaturedGameSection = () => {
  const { games, loading } = useGameInfo();

  const handlePlayGame = (url: string) => {
    window.open(url, '_blank');
  };

  if (loading) {
    return (
      <section id="featured-games" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4">
              Featured Games
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="aspect-video bg-muted rounded-lg animate-pulse" />
            <div className="aspect-video bg-muted rounded-lg animate-pulse" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="featured-games" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4">
            Featured Games
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6">
            Discover our latest Roblox games and join thousands of players worldwide
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 gap-8">
          {games.map((game, index) => (
            <div key={game.id} className="animate-slide-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div 
                className="relative card-game group cursor-pointer transform transition-all duration-300 hover:scale-105 col-span-full max-w-4xl mx-auto"
                onClick={() => handlePlayGame(game.url)}
              >
                {/* Coming Soon Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm rounded-lg flex items-center justify-center z-10 border-2 border-primary/30">
                  <div className="text-center space-y-4">
                    <div className="text-6xl font-bold text-gradient-primary animate-pulse">
                      COMING SOON
                    </div>
                    <div className="text-lg text-muted-foreground">
                      Get ready for the ultimate gaming experience
                    </div>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-8 p-8">
                  {/* Game Thumbnail */}
                  <div className="w-full lg:w-1/2 h-80 bg-muted rounded-lg overflow-hidden relative">
                    {game.thumbnail ? (
                      <img 
                        src={game.thumbnail} 
                        alt={`${game.name} thumbnail`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          if (target.nextElementSibling) {
                            (target.nextElementSibling as HTMLElement).style.display = 'flex';
                          }
                        }}
                      />
                    ) : null}
                    <div className="absolute inset-0 flex items-center justify-center bg-muted" style={{ display: game.thumbnail ? 'none' : 'flex' }}>
                      <Gamepad2 className="w-24 h-24 text-muted-foreground" />
                    </div>
                  </div>

                  {/* Game Info */}
                  <div className="flex-1 space-y-6 text-center lg:text-left">
                    <h3 className="text-4xl lg:text-5xl font-bold text-gradient-primary group-hover:text-gradient-secondary transition-all duration-300">
                      {game.name}
                    </h3>
                    
                    {game.playing !== undefined && (
                      <div className="flex items-center justify-center lg:justify-start gap-3 text-lg text-muted-foreground">
                        <Users className="w-6 h-6" />
                        <span>
                          {game.playing.toLocaleString()} playing now
                        </span>
                      </div>
                    )}

                    <p className="text-lg text-muted-foreground max-w-2xl">
                      Experience the next evolution of soccer gaming with revolutionary mechanics, 
                      stunning visuals, and competitive gameplay that will redefine sports gaming forever.
                    </p>

                    {/* Play Button */}
                    <button
                      className="btn-gaming text-xl px-12 py-6"
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePlayGame(game.url);
                      }}
                    >
                      <ExternalLink className="w-6 h-6" />
                      Play on Roblox
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
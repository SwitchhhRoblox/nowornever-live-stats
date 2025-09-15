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
        <div className="grid md:grid-cols-2 gap-8">
          {games.map((game, index) => (
            <div key={game.id} className="animate-slide-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="card-game group cursor-pointer" onClick={() => handlePlayGame(game.url)}>
                {/* Game Thumbnail */}
                <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 relative overflow-hidden rounded-t-lg">
                  {game.thumbnail ? (
                    <img 
                      src={game.thumbnail} 
                      alt={`${game.name} gameplay screenshot`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Gamepad2 className="w-16 h-16 text-primary animate-glow" />
                    </div>
                  )}
                  
                  {/* Play Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-primary/20 rounded-full p-6 backdrop-blur-sm">
                      <Gamepad2 className="w-12 h-12 text-white animate-glow" />
                    </div>
                  </div>
                </div>

                {/* Game Info */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {game.name}
                  </h3>
                  
                  {game.playing && (
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="text-gradient-primary font-semibold">
                        {game.playing} playing now
                      </span>
                    </div>
                  )}

                  {/* Play Button */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePlayGame(game.url);
                    }}
                    className="btn-gaming w-full inline-flex items-center justify-center gap-3"
                  >
                    <Gamepad2 className="w-5 h-5" />
                    Play on Roblox
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
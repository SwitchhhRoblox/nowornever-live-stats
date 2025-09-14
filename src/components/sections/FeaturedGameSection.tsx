import { ExternalLink, Users, Eye, Heart, Star, Gamepad2 } from 'lucide-react';
import { useRobloxGameStats } from '@/hooks/useRobloxStats';
import { AnimatedCounter } from '@/components/AnimatedCounter';

export const FeaturedGameSection = () => {
  const { gameStats, loading, error } = useRobloxGameStats();

  const handlePlayGame = () => {
    window.open('https://www.roblox.com/games/79021943931147/NEW-Brainrot-Tower-Defense', '_blank');
  };

  if (loading) {
    return (
      <section id="featured-game" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4">
              Featured Game
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="h-8 bg-muted rounded animate-pulse" />
              <div className="h-4 bg-muted rounded animate-pulse" />
              <div className="h-4 bg-muted rounded w-3/4 animate-pulse" />
            </div>
            <div className="aspect-video bg-muted rounded-lg animate-pulse" />
          </div>
        </div>
      </section>
    );
  }

  if (error || !gameStats) {
    return (
      <section id="featured-game" className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-destructive">Failed to load game stats. Please try again later.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="featured-game" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4">
            Featured Game
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        {/* Game Showcase */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Game Info */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                {gameStats.name}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Experience the ultimate tower defense adventure! Defend against waves of enemies 
                with strategic tower placement and unique power-ups. Join thousands of players 
                in this exciting multiplayer experience.
              </p>
            </div>

            {/* Live Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="stat-card text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-primary mr-2" />
                  <span className="text-2xl font-bold text-gradient-primary">
                    <AnimatedCounter end={gameStats.playing} />
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">Playing Now</p>
              </div>

              <div className="stat-card text-center">
                <div className="flex items-center justify-center mb-2">
                  <Eye className="w-6 h-6 text-secondary mr-2" />
                  <span className="text-2xl font-bold text-gradient-secondary">
                    <AnimatedCounter end={gameStats.visits} />
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">Total Visits</p>
              </div>

              <div className="stat-card text-center">
                <div className="flex items-center justify-center mb-2">
                  <Heart className="w-6 h-6 text-destructive mr-2" />
                  <span className="text-2xl font-bold text-destructive">
                    <AnimatedCounter end={gameStats.favoriteCount} />
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">Favorites</p>
              </div>

              <div className="stat-card text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-6 h-6 text-warning mr-2" />
                  <span className="text-2xl font-bold text-warning">4.8</span>
                </div>
                <p className="text-sm text-muted-foreground">Rating</p>
              </div>
            </div>

            {/* Play Button */}
            <button 
              onClick={handlePlayGame}
              className="btn-gaming w-full md:w-auto inline-flex items-center justify-center gap-3"
            >
              <Gamepad2 className="w-6 h-6" />
              Play Now on Roblox
              <ExternalLink className="w-5 h-5" />
            </button>
          </div>

          {/* Game Preview */}
          <div className="animate-slide-in-right">
            <div className="card-game aspect-video bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center relative overflow-hidden group">
              {gameStats.thumbnails && gameStats.thumbnails.length > 0 ? (
                <img 
                  src={gameStats.thumbnails[0].imageUrl} 
                  alt={`${gameStats.name} gameplay screenshot`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="text-center">
                  <Gamepad2 className="w-16 h-16 text-primary mb-4 mx-auto animate-glow" />
                  <p className="text-lg font-semibold text-gradient-primary">
                    {gameStats.name}
                  </p>
                  <p className="text-muted-foreground mt-2">Click to play on Roblox!</p>
                </div>
              )}
              
              {/* Play Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                   onClick={handlePlayGame}>
                <div className="bg-primary/20 rounded-full p-6 backdrop-blur-sm">
                  <Gamepad2 className="w-12 h-12 text-white animate-glow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
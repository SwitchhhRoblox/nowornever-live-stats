import { useState, useEffect } from 'react';

export interface GameInfo {
  id: string;
  name: string;
  url: string;
  thumbnail?: string;
  playing?: number;
}

// Featured games list
const FEATURED_GAMES = [
  {
    id: '86232037320791',
    name: 'Soccer Impact',
    url: 'https://www.roblox.com/games/86232037320791/Soccer-Impact'
  },
  {
    id: '79021943931147', 
    name: 'NEW Brainrot Tower Defense',
    url: 'https://www.roblox.com/games/79021943931147/NEW-Brainrot-Tower-Defense'
  }
];

export const useGameInfo = () => {
  const [games, setGames] = useState<GameInfo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadGames = async () => {
      setLoading(true);
      
      const gameData = await Promise.all(
        FEATURED_GAMES.map(async (game) => {
          try {
            // Try to fetch thumbnail - if it fails, we'll just show without it
            const thumbnailUrl = `https://thumbnails.roblox.com/v1/games/icons?universeIds=${game.id}&size=512x512&format=Png&isCircular=false`;
            let thumbnail;
            
            try {
              const response = await fetch(thumbnailUrl);
              if (response.ok) {
                const data = await response.json();
                thumbnail = data.data?.[0]?.imageUrl;
              }
            } catch {
              // Thumbnail fetch failed, continue without it
            }

            return {
              id: game.id,
              name: game.name,
              url: game.url,
              thumbnail
            };
          } catch {
            // Return basic info even if everything fails
            return {
              id: game.id,
              name: game.name,
              url: game.url
            };
          }
        })
      );
      
      setGames(gameData);
      setLoading(false);
    };

    loadGames();
  }, []);

  return { games, loading };
};

export interface CompanyStats {
  totalGames: number;
  totalPlayers: number;
  totalVisits: number;
  averageRating: number;
}

export const useCompanyStats = () => {
  const [companyStats, setCompanyStats] = useState<CompanyStats>({
    totalGames: 2, // NowOrNever has 2 featured games
    totalPlayers: Math.floor(Math.random() * 1000) + 500,
    totalVisits: Math.floor(Math.random() * 500000) + 100000,
    averageRating: 4.8
  });
  const [loading, setLoading] = useState(false);

  return { companyStats, loading };
};
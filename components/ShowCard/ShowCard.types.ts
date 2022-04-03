export interface ShowCardProps {
    name?: string;
    src?: string | undefined;
    alt?: string;
    country?: string;
    genres?: any;
    releaseDate?: {
      premiered?: number;
      ended?: number;
    };
    averageRating?: any;
    
  }
export interface StockResponse {
  id: number;
  symbol: string;
  name: string;
  price: number;
  change: string;
  description: string;
  marketCap: string;
  volume: string;
  peRatio: number;
  dividendYield: string;
  earningsPerShare: number;
  website: string;
  timeSeries: TimeSeriesData[];
  news: NewsArticle[];
  analystRatings: AnalystRating[];
}

interface TimeSeriesData {
  date: string;
  price: number;
  volume: string;
}

interface NewsArticle {
  title: string;
  source: string;
  timestamp: string;
  link: string;
}

interface AnalystRating {
  rating: string;
  targetPrice: number;
  analystCount: number;
}

export interface UserProfile {
  name: string;
  email: string;
  country: string;
  totalInvestedAmount: number;
  totalReturnAmount: number;
  totalProfitPercentage: number;
}

export interface Holding {
  id: number;
  symbol: string;
  name: string;
  quantity: number;
  purchasePrice: number;
  currentPrice: number;
}

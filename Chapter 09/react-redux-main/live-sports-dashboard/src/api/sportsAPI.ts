// src/api/sportsAPI.ts

// Define types for sports data
interface Match {
    id: number;
    homeTeam: string;
    awayTeam: string;
    homeScore: number;
    awayScore: number;
    status: 'live' | 'upcoming' | 'finished';
  }
  
  interface Sport {
    name: string;
    matches: Match[];
  }
  
  // Mock data for live scores
  const footballMatches: Match[] = [
    { id: 1, homeTeam: 'Team A', awayTeam: 'Team B', homeScore: 2, awayScore: 1, status: 'live' },
    { id: 2, homeTeam: 'Team C', awayTeam: 'Team D', homeScore: 0, awayScore: 0, status: 'live' },
    // Add more football matches as needed
  ];
  
  const cricketMatches: Match[] = [
    { id: 1, homeTeam: 'Team X', awayTeam: 'Team Y', homeScore: 150, awayScore: 120, status: 'live' },
    { id: 2, homeTeam: 'Team Z', awayTeam: 'Team W', homeScore: 200, awayScore: 180, status: 'live' },
    // Add more cricket matches as needed
  ];
  
  // Define the fetchLiveScores function
  export const fetchLiveScores = async (): Promise<Sport[]> => {
    // Simulate API request delay with setTimeout
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    // Return mock data for all sports
    return [
      { name: 'Football', matches: footballMatches },
      { name: 'Cricket', matches: cricketMatches },
      // Add more sports with mock matches as needed
    ];
  };
  
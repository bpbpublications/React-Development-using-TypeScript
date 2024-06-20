// src/store/actions/sportsActions.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchLiveScores } from '../../api/sportsAPI';

export interface Match {
  id: number;
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
}

export interface Sport {
  name: string;
  matches: Match[];
} 

export const fetchLiveScoresAsync = createAsyncThunk<Sport[]>(
  'sports/fetchLiveScores',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchLiveScores();
      return response;
    } catch (error) {
      return rejectWithValue('Failed to fetch live scores');
    }
  }
);
